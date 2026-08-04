import {
	afterRenderEffect,
	ChangeDetectionStrategy,
	Component,
	computed,
	ElementRef,
	EventEmitter,
	Input,
	OnDestroy,
	Output,
	Renderer2,
	Signal,
	signal,
	ViewChild,
	WritableSignal
} from '@angular/core';

/** Payload of the search, kept compatible with the event the component received from PrimeNG. */
export interface ChipsSearchEvent {
	query: string;
}

/** Distance left between the input and the suggestions panel when it has to be flipped above it. */
const PANEL_MARGIN = 2;

/** Milliseconds waited after the last keystroke before the suggestions are calculated. */
const SEARCH_DELAY = 300;

@Component({
	selector:        'systelab-chips',
	templateUrl:     'chips.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone:      false
})
export class ChipsComponent implements OnDestroy {

	private static instances = 0;

	/** Prefix of the ids of the panel and of its items, unique for every instance. */
	public readonly instanceId = `slab-chips-${ChipsComponent.instances++}`;

	@Output() public filtered = new EventEmitter<Array<string>>();

	@ViewChild('input') public inputViewChild: ElementRef<HTMLInputElement>;
	@ViewChild('panel') public panelViewChild: ElementRef<HTMLElement>;
	@ViewChild('container') public containerViewChild: ElementRef<HTMLElement>;

	private readonly $texts: WritableSignal<Array<string>> = signal([]);
	private readonly $disabled = signal(false);
	private readonly $readonly = signal(false);

	private readonly $results: WritableSignal<Array<string>> = signal([]);
	private readonly $filter: WritableSignal<Array<string>> = signal([]);
	private readonly $panelVisible = signal(false);
	private readonly $highlightedIndex = signal(-1);
	private readonly $focus = signal(false);

	/** The panel is only rendered when it is open and there is something to show. */
	private readonly $showPanel: Signal<boolean> = computed(() => this.$panelVisible() && this.$results().length > 0);

	@Input()
	public set texts(value: Array<string>) {
		this.$texts.set(value ?? []);
	}

	public get texts(): Array<string> {
		return this.$texts();
	}

	@Input()
	public set disabled(value: boolean) {
		this.$disabled.set(value);
	}

	public get disabled(): boolean {
		return this.$disabled();
	}

	@Input()
	public set readonly(value: boolean) {
		this.$readonly.set(value);
	}

	public get readonly(): boolean {
		return this.$readonly();
	}

	/** Suggestions currently offered for the text being typed. */
	public get results(): Array<string> {
		return this.$results();
	}

	public set results(value: Array<string>) {
		this.$results.set(value ?? []);
	}

	public get filter(): Array<string> {
		return this.$filter();
	}

	public set filter(value: Array<string>) {
		this.$filter.set(value ?? []);
		this.filtered.emit(this.$filter());
	}

	public get panelVisible(): boolean {
		return this.$panelVisible();
	}

	public get showPanel(): boolean {
		return this.$showPanel();
	}

	public get highlightedIndex(): number {
		return this.$highlightedIndex();
	}

	public get focus(): boolean {
		return this.$focus();
	}

	private searchTimer: any;
	private unlistenDocumentMouseDown: () => void;
	private unlistenScroll: () => void;
	private unlistenResize: () => void;

	constructor(public el: ElementRef, protected renderer: Renderer2) {
		// The panel is a fixed element: every time it is shown (and on every render while it is
		// open) it is measured and placed below the container, or above it when it does not fit.
		afterRenderEffect(() => {
			if (this.$showPanel()) {
				this.alignPanel();
			}
		});
	}

	public ngOnDestroy(): void {
		this.clearSearchTimer();
		this.unbindPanelListeners();
	}

	/**
	 * Calculates the suggestions for a query. Public and receiving a `{query}` event to keep the
	 * signature the component had when the search was requested by PrimeNG.
	 */
	public search(event: ChipsSearchEvent): void {
		const query = (event?.query ?? '')
			.toLowerCase();
		this.$results.set(this.texts.filter(text => text?.toLowerCase()
			.includes(query)));
		this.$highlightedIndex.set(-1);
	}

	public onInput(event: Event): void {
		if (this.disabled || this.readonly) {
			return;
		}
		const query = (event.target as HTMLInputElement).value;
		this.clearSearchTimer();
		if (!query) {
			this.hide();
			this.$results.set([]);
			return;
		}
		this.searchTimer = setTimeout(() => {
			this.searchTimer = null;
			this.search({query});
			this.show();
		}, SEARCH_DELAY);
	}

	public onInputFocus(): void {
		this.$focus.set(true);
	}

	/**
	 * Closes the panel when the input loses the focus. Clicking the panel does not blur the input,
	 * because its mousedown is prevented, so the suggestion is still selected.
	 */
	public onInputBlur(): void {
		this.$focus.set(false);
		this.hide();
	}

	public onContainerClick(): void {
		if (!this.disabled) {
			this.inputViewChild?.nativeElement.focus();
		}
	}

	public onKeydown(event: KeyboardEvent): void {
		switch (event.key) {
			case 'ArrowDown':
				this.moveHighlight(1);
				event.preventDefault();
				break;
			case 'ArrowUp':
				this.moveHighlight(-1);
				event.preventDefault();
				break;
			case 'Escape':
				if (this.panelVisible) {
					this.hide();
					event.preventDefault();
				}
				break;
			case 'Backspace':
				this.onKeyBackspace(event);
				break;
			default:
				break;
		}
	}

	/**
	 * Enter adds the highlighted suggestion when the user navigated the panel, and the text typed
	 * otherwise, which is what the component has always done.
	 */
	public onKeyEnter(event: KeyboardEvent): void {
		const input = (event.target ?? this.inputViewChild?.nativeElement) as HTMLInputElement;
		const highlighted = this.results[this.highlightedIndex];
		const value = highlighted ?? input?.value;
		if (value) {
			this.addChip(value);
			if (input) {
				input.value = '';
			}
		}
		this.filtered.emit(this.filter);
		this.hide();
	}

	/** Backspace over an empty input removes the last chip. */
	public onKeyBackspace(event: KeyboardEvent): void {
		if (this.disabled || this.readonly) {
			return;
		}
		const input = event.target as HTMLInputElement;
		if (!input?.value && this.filter.length) {
			this.removeChip(this.filter.length - 1);
			event.preventDefault();
		}
	}

	public onSuggestionClick(suggestion: string): void {
		this.addChip(suggestion);
		this.filtered.emit(this.filter);
		if (this.inputViewChild) {
			this.inputViewChild.nativeElement.value = '';
		}
		this.hide();
		this.inputViewChild?.nativeElement.focus();
	}

	public onSuggestionMouseEnter(index: number): void {
		this.$highlightedIndex.set(index);
	}

	/** Keeps the focus on the input when the panel is clicked, so the blur does not close it. */
	public onPanelMouseDown(event: MouseEvent): void {
		event.preventDefault();
	}

	public removeChip(index: number, event?: MouseEvent): void {
		event?.stopPropagation();
		if (this.disabled || this.readonly) {
			return;
		}
		const values = [...this.filter];
		values.splice(index, 1);
		this.filter = values;
	}

	public show(): void {
		if (this.disabled || this.readonly || this.panelVisible) {
			return;
		}
		this.$panelVisible.set(true);
		this.bindPanelListeners();
	}

	public hide(): void {
		this.clearSearchTimer();
		if (!this.panelVisible) {
			return;
		}
		this.$panelVisible.set(false);
		this.$highlightedIndex.set(-1);
		this.unbindPanelListeners();
	}

	/** Places the panel right below the chips container, flipping it above when there is no room. */
	public alignPanel(): void {
		const panel = this.panelViewChild?.nativeElement;
		const container = this.containerViewChild?.nativeElement;
		if (!panel || !container) {
			return;
		}
		const containerRect = container.getBoundingClientRect();
		let top = containerRect.bottom;
		if (top + panel.offsetHeight > window.innerHeight) {
			const flipped = containerRect.top - panel.offsetHeight - PANEL_MARGIN;
			top = flipped > 0 ? flipped : Math.max(window.innerHeight - panel.offsetHeight, 0);
		}
		let left = containerRect.left;
		if (left + containerRect.width > window.innerWidth) {
			left = Math.max(window.innerWidth - containerRect.width, 0);
		}
		this.renderer.setStyle(panel, 'top', `${top}px`);
		this.renderer.setStyle(panel, 'left', `${left}px`);
		this.renderer.setStyle(panel, 'width', `${containerRect.width}px`);
	}

	/** Adds a chip without emitting: the caller decides when the change is notified. */
	private addChip(value: string): void {
		this.$filter.update(values => [...values, value]);
	}

	private moveHighlight(offset: number): void {
		if (!this.showPanel) {
			return;
		}
		const total = this.results.length;
		const next = this.highlightedIndex + offset;
		this.$highlightedIndex.set(next < 0 ? total - 1 : next % total);
	}

	private clearSearchTimer(): void {
		if (this.searchTimer) {
			clearTimeout(this.searchTimer);
			this.searchTimer = null;
		}
	}

	// The panel only listens to the document while it is open.
	private bindPanelListeners(): void {
		if (this.unlistenDocumentMouseDown) {
			return;
		}
		this.unlistenDocumentMouseDown = this.renderer.listen('document', 'mousedown', (event: MouseEvent) => {
			if (this.panelVisible && !this.el.nativeElement.contains(event.target)) {
				this.hide();
			}
		});
		this.unlistenScroll = this.renderer.listen('window', 'scroll', () => this.alignPanel());
		this.unlistenResize = this.renderer.listen('window', 'resize', () => this.hide());
	}

	private unbindPanelListeners(): void {
		this.unlistenDocumentMouseDown?.();
		this.unlistenScroll?.();
		this.unlistenResize?.();
		this.unlistenDocumentMouseDown = null;
		this.unlistenScroll = null;
		this.unlistenResize = null;
	}
}

import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, provideZoneChangeDetection } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ChipsComponent } from './chips.component';

@Component({
    template: `
                <systelab-chips [texts]="texts" [disabled]="disabled" [readonly]="readonly"></systelab-chips>`,
    standalone: false
})
export class ChipsTestComponent {

	public readonly = false;
	public disabled = false;
	public texts: Array<string> = [
		'New York',
		'Rome',
		'London',
		'Barcelona',
		'París',
		'Berlín',
		'Oslo',
		'Atenas',
		'Lisboa',
		'Amsterdam',
		'St Petersburgo'
	];
}

const setArrayValue = (fixture: ComponentFixture<ChipsTestComponent>, values: Array<string>) => {
	fixture.componentInstance.texts = values;
	fixture.detectChanges();
};

const getInput = (fixture: ComponentFixture<ChipsTestComponent>): HTMLInputElement =>
	fixture.debugElement.query(By.css('input')).nativeElement;

/** Types a text in the input and lets the debounced search run. */
const typeText = (fixture: ComponentFixture<ChipsTestComponent>, text: string): void => {
	const inputEl = getInput(fixture);
	inputEl.dispatchEvent(new Event('focus'));
	inputEl.value = text;
	inputEl.dispatchEvent(new Event('input'));
	tick(300);
	fixture.detectChanges();
};

const getSuggestions = (fixture: ComponentFixture<ChipsTestComponent>): Array<string> =>
	fixture.debugElement.queryAll(By.css('.slab-chips-item'))
		.map(item => item.nativeElement.innerText);

const getChips = (fixture: ComponentFixture<ChipsTestComponent>): Array<string> =>
	fixture.debugElement.queryAll(By.css('.slab-chips-chip-label'))
		.map(chip => chip.nativeElement.innerText);

describe('Systelab Chips', () => {

	let fixture: ComponentFixture<ChipsTestComponent>;
	let chips: ChipsComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports:      [
				NoopAnimationsModule,
				FormsModule,
				BrowserDynamicTestingModule,
			],
			declarations: [
				ChipsComponent,
				ChipsTestComponent,
			],
			providers: [
				provideZoneChangeDetection(),
			],
		});

		fixture = TestBed.createComponent(ChipsTestComponent);
		chips = fixture.debugElement.children[0].componentInstance;
	});

	it('should be disabled', async () => {
		setArrayValue(fixture, fixture.componentInstance.texts);
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		await fixture.whenStable();

		expect(getInput(fixture).disabled).toBeTrue();
		const container = fixture.debugElement.query(By.css('.slab-chips-container'));
		expect(container.nativeElement.className).toContain('slab-chips-disabled');
	});

	it('should be readonly', () => {
		setArrayValue(fixture, fixture.componentInstance.texts);
		fixture.componentInstance.readonly = true;
		fixture.detectChanges();

		expect(getInput(fixture).readOnly)
			.toEqual(true);
		const container = fixture.debugElement.query(By.css('.slab-chips-container'));
		expect(container.nativeElement.className).toContain('slab-chips-readonly');
	});

	it('should allow multiple values', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		typeText(fixture, 'Rome');
		chips.onKeyEnter(new KeyboardEvent('keydown', {key: 'Enter'}));
		typeText(fixture, 'Oslo');
		chips.onKeyEnter(new KeyboardEvent('keydown', {key: 'Enter'}));
		fixture.detectChanges();

		expect(chips.filter).toEqual(['Rome', 'Oslo']);
		expect(getChips(fixture)).toEqual(['Rome', 'Oslo']);
		flush();
	}));

	it('filtered list is correct', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		typeText(fixture, 'b');

		expect(getSuggestions(fixture))
			.toEqual(['Barcelona', 'Berlín', 'Lisboa', 'St Petersburgo']);

		flush();
	}));

	it('should not show the panel when nothing matches', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		typeText(fixture, 'zzz');

		expect(fixture.debugElement.query(By.css('.slab-chips-panel'))).toBeNull();
		flush();
	}));

	it('should hide the panel when the text is cleared', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		typeText(fixture, 'New');
		expect(fixture.debugElement.query(By.css('.slab-chips-panel'))).not.toBeNull();

		typeText(fixture, '');
		expect(fixture.debugElement.query(By.css('.slab-chips-panel'))).toBeNull();
		expect(chips.panelVisible).toBeFalse();
		flush();
	}));

	it('should select item', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);
		const emitSpy = spyOn(chips.filtered, 'emit');

		typeText(fixture, 'New');

		const suggestions = fixture.debugElement.queryAll(By.css('.slab-chips-item'));
		expect(suggestions.length).toEqual(1);
		suggestions[0].nativeElement.click();
		fixture.detectChanges();

		expect(chips.filter).toEqual(['New York']);
		expect(getChips(fixture)).toEqual(['New York']);
		expect(getInput(fixture).value).toEqual('');
		expect(fixture.debugElement.query(By.css('.slab-chips-panel'))).toBeNull();
		expect(emitSpy).toHaveBeenCalledOnceWith(['New York']);
		expect(fixture.componentInstance.texts.length).toEqual(11);
		flush();
	}));

	it('should select the highlighted item with the keyboard', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		typeText(fixture, 'b');
		const inputEl = getInput(fixture);
		inputEl.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowDown'}));
		inputEl.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowDown'}));
		fixture.detectChanges();

		expect(chips.highlightedIndex).toEqual(1);
		const highlighted = fixture.debugElement.queryAll(By.css('.slab-chips-item-highlighted'));
		expect(highlighted.length).toEqual(1);
		expect(highlighted[0].nativeElement.innerText).toEqual('Berlín');

		inputEl.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
		fixture.detectChanges();

		expect(chips.filter).toEqual(['Berlín']);
		flush();
	}));

	it('should close the panel with the escape key', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		typeText(fixture, 'b');
		expect(chips.panelVisible).toBeTrue();

		getInput(fixture).dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
		fixture.detectChanges();

		expect(chips.panelVisible).toBeFalse();
		expect(fixture.debugElement.query(By.css('.slab-chips-panel'))).toBeNull();
		flush();
	}));

	it('should handle enter key press', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		// Simulate user input
		const inputEl = getInput(fixture);
		inputEl.value = 'TestValue';

		// Create a KeyboardEvent
		const event = new KeyboardEvent('keydown', {key: 'Enter'});

		// Manually assign the target property
		Object.defineProperty(event, 'target', {value: inputEl, writable: true});

		// Explicitly call the onKeyEnter method
		chips.onKeyEnter(event);
		fixture.detectChanges();

		// Verify that the value was added to the filter
		expect(chips.filter).toContain('TestValue');

		// Verify that the input was cleared
		expect(inputEl.value).toEqual('');

		// Verify that the filtered event was emitted
		const emitSpy = spyOn(chips.filtered, 'emit');
		chips.onKeyEnter(event);
		expect(emitSpy).toHaveBeenCalledWith(chips.filter);

		// Verify that the panel is hidden
		expect(chips.panelVisible).toBeFalse();
		flush();
	}));

	it('should remove a chip when its remove icon is clicked', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		typeText(fixture, 'Rome');
		chips.onKeyEnter(new KeyboardEvent('keydown', {key: 'Enter'}));
		typeText(fixture, 'Oslo');
		chips.onKeyEnter(new KeyboardEvent('keydown', {key: 'Enter'}));
		fixture.detectChanges();

		const emitSpy = spyOn(chips.filtered, 'emit');
		fixture.debugElement.queryAll(By.css('.slab-chips-chip-remove'))[0].nativeElement.click();
		fixture.detectChanges();

		expect(chips.filter).toEqual(['Oslo']);
		expect(getChips(fixture)).toEqual(['Oslo']);
		expect(emitSpy).toHaveBeenCalledOnceWith(['Oslo']);
		flush();
	}));

	it('should not show the remove icon when disabled or readonly', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		chips.filter = ['Rome'];
		fixture.detectChanges();
		expect(fixture.debugElement.queryAll(By.css('.slab-chips-chip-remove')).length).toEqual(1);

		fixture.componentInstance.readonly = true;
		fixture.detectChanges();
		expect(fixture.debugElement.queryAll(By.css('.slab-chips-chip-remove')).length).toEqual(0);

		fixture.componentInstance.readonly = false;
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		expect(fixture.debugElement.queryAll(By.css('.slab-chips-chip-remove')).length).toEqual(0);
		flush();
	}));

	it('should remove the last chip with the backspace key on an empty input', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		chips.filter = ['Rome', 'Oslo'];
		fixture.detectChanges();

		const inputEl = getInput(fixture);
		inputEl.value = '';
		inputEl.dispatchEvent(new KeyboardEvent('keydown', {key: 'Backspace'}));
		fixture.detectChanges();

		expect(chips.filter).toEqual(['Rome']);

		inputEl.value = 'Ro';
		inputEl.dispatchEvent(new KeyboardEvent('keydown', {key: 'Backspace'}));
		fixture.detectChanges();

		expect(chips.filter).toEqual(['Rome']);
		flush();
	}));

	it('should not search when disabled or readonly', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();

		typeText(fixture, 'b');

		expect(chips.panelVisible).toBeFalse();
		expect(fixture.debugElement.query(By.css('.slab-chips-panel'))).toBeNull();
		flush();
	}));

	it('should focus the input when the container is clicked', () => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		fixture.debugElement.query(By.css('.slab-chips-container')).nativeElement.click();
		fixture.detectChanges();

		expect(document.activeElement).toBe(getInput(fixture));
	});

	it('should hide the panel when the input loses the focus', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		typeText(fixture, 'b');
		expect(chips.panelVisible).toBeTrue();

		getInput(fixture).dispatchEvent(new Event('blur'));
		fixture.detectChanges();

		expect(chips.panelVisible).toBeFalse();
		expect(chips.focus).toBeFalse();
		flush();
	}));

	it('should hide the panel when clicking outside the component', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		typeText(fixture, 'b');
		expect(chips.panelVisible).toBeTrue();

		document.dispatchEvent(new MouseEvent('mousedown'));
		fixture.detectChanges();

		expect(chips.panelVisible).toBeFalse();
		flush();
	}));
});

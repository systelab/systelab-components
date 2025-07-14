import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[scrollSpy]',
})
export class ScrollSpyDirective implements OnInit
 {
  @Input() public spiedTags: Array<string> = ['div'];
  @Input() public querySelector = '[id^="section"]';
  @Output() public sectionChange = new EventEmitter<string>();

  private currentSection: string;
	private observer: IntersectionObserver;

  constructor(private readonly _el: ElementRef) { }

  public ngOnInit(): void {
    this.spiedTags = this.spiedTags.map(tag => tag.toLowerCase());
  }

  public ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  public ngAfterViewInit(): void {
    const options: IntersectionObserverInit = {
      root: this._el.nativeElement, 
      threshold: 0.6, 
    };

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
    const children = this._el.nativeElement.querySelectorAll(this.querySelector);

    children.forEach(element => {
      const tagName = element.tagName.toLowerCase();
      if (this.spiedTags.includes(tagName)) {
        this.observer.observe(element);
      }
    });
  }

  private handleIntersect(entries: IntersectionObserverEntry[]): void {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const sectionId = (entry.target as HTMLElement).id;
        if (sectionId && sectionId !== this.currentSection) {
          this.currentSection = sectionId;
          this.sectionChange.emit(this.currentSection);
        }
      }
    }
  }
}

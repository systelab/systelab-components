import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[scrollSpy]',
    standalone: false
})
export class ScrollSpyDirective {
  @Input() public spiedTags: Array<string> = ['div'];
  @Input() public querySelector = '[id^="section"]';
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(private _el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    let nextSection: string;
    const children = this._el.nativeElement.querySelectorAll(this.querySelector);
    const scrollTop = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some((spiedTag) => spiedTag.toLowerCase() === element.tagName.toLowerCase())) {
        if (element.offsetTop - parentOffset <= scrollTop) {
          nextSection = element.id;
        }
      }
    }
    if (nextSection && nextSection !== this.currentSection) {
      this.currentSection = nextSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}

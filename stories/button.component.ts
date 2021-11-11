import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'systelab-button',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  @Input()
  variant: 'primary' | 'secondary' | 'ghost' | 'link' = 'primary';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  disabled = false;

  @Input()
  label = 'Button';


  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const disabled = this.disabled ? 'systelab-button--disabled': '';
    return [
      'systelab-button',
      `systelab-button--${this.size}`,
      `systelab-button--${this.variant}`,
      disabled
    ];
  }
}

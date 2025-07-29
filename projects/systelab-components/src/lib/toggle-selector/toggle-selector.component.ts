import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ToggleSelectorOption {
  id: string;
  name: string;
}

@Component({
    selector: 'systelab-toggle-selector',
    templateUrl: './toggle-selector.component.html',
    standalone: false
})
export class ToggleSelectorComponent {
  @Input() public options: Array<ToggleSelectorOption> = [];

  @Input() public currentOption: string;
  @Output() public currentOptionChange = new EventEmitter<string>();

  @Output() public select = new EventEmitter<ToggleSelectorOption>();

  public selectOption(option: ToggleSelectorOption): void {
    this.currentOption = option.id;
    this.select.emit(option);
    this.currentOptionChange.emit(option.id);
  }
}

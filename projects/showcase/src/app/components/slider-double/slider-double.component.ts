import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'showcase-slider-double',
  templateUrl: './slider-double.component.html'
})
export class SliderDoubleComponent{

  public startValue = 20;
  public endValue = 60;

  constructor() { }
}

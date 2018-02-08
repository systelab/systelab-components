import {Component, Input} from '@angular/core';
import {BreadcrumbItem} from './BreadcrumbItem';

@Component({
  selector: 'systelab-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @Input() public items: Array<Object>;
  @Input() public backgroundColor: string;
  @Input() public activeFontColor: string;
  @Input() public fontColor: string;
  constructor() { }


}

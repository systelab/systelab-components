import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {NavbarItem} from './NavbarItem';

@Component({
  selector: 'systelab-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() public items: Array<Object>;
  @Input() public isVertical: boolean;
  @Input() public backgroundColor: string;
  @Input() public backgroundHoverColor: string;
  @Input() public fontColor: string;
  @Input() public alignNavbar: string;
  @Input() public id: string;
  
  public hovered: number = 0;

  constructor() {
  }
}

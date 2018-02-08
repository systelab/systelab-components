import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NavbarItem } from './NavbarItem';
import { Router } from '@angular/router';
@Component({
  selector: 'systelab-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
 
  @Input() public items: Array<NavbarItem>=[];
	@Input() public elementID: number=0;
  @Input() public isVertical: boolean=false;
  @Input() public backgroundColor: string="rgb(21, 143, 239)";
  @Input() public backgroundHoverColor: string="rgb(66, 161,205)";
  @Input() public fontColor: string="#ffffff";
  @Input() public alignNavs: string="left";
  @Input() public id:string="nav-content";

  public style;
  public hovered:number=0;

  constructor() { 
  }
}

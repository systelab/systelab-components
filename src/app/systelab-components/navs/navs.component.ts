import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NavsItems } from './NavsItems';
import { Router } from '@angular/router';
@Component({
  selector: 'systelab-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.scss']
})
export class NavsComponent  {
 
  @Input() public navsItems: Array<NavsItems>=[];
	@Input() public elementID: number=0;
  @Input() public isVertical: boolean=false;
  @Input() public backgroundColor: string="rgb(21, 143, 239)";
  @Input() public backgroundHoverItemColor: string="rgb(66, 161,205)";
  @Input() public fontColor: string="#ffffff";
  @Input() public alignNavs: string="left";
  @Input() public idNav:string="nav-content";

  public style;
  public hovered:number=0;

  constructor() { 
  }
}

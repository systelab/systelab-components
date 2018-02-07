import { Component, OnInit } from '@angular/core';
import { NavsItems } from '../../../systelab-components/navs/NavsItems';

@Component({
  selector: 'showcase-navs',
  templateUrl: './showcase-navs.component.html'
})
export class ShowcaseNavsComponent implements OnInit {

  public navsItems1: Array<NavsItems>=[];
  public navsItems2: Array<NavsItems>=[];
  public navsItems3: Array<NavsItems>=[];
  public navsItems4: Array<NavsItems>=[];
  public navsItems5: Array<NavsItems>=[];
  public alignNavsCenter:string="center";
  public alignNavsRight:string="right";
  public alignNavsLeft:string="left";
  public fontColor:string="#ffffff";
  public isVertical:boolean=false;
  public isVertical2:boolean=true;
  public backgroundColor:string="rgb(21, 143, 239)";
  public backgroundHoverItemColor:string="rgb(66, 161,205)";
  public backgroundColor2:string="rgb(242, 158, 0)";
  public backgroundHoverItemColor2:string="rgb(239, 170, 107)";
  constructor() { 
    this.navsItems1.push(new NavsItems(1,'Option 1','',false,true,true,'_self','https://google.com'));
    this.navsItems1.push(new NavsItems(2,'Disabled','',false,false,false,'_self','https://werfen.com'));
    this.navsItems1.push(new NavsItems(3,'Option 3','',false,false,true,'_self','https://werfen.com'));
    this.navsItems1.push(new NavsItems(4,'Option 4','',false,false,true,'_self','https://werfen.com'));
    this.navsItems1.push(new NavsItems(5,'Blank Link','',false,false,true,'_blank','https://werfen.com'));

    this.navsItems2.push(new NavsItems(1,'Option 1','slab-icon-medium mt-2 mb-2 icon-home',false,true,true,'_self','https://google.com'));
    this.navsItems2.push(new NavsItems(2,'Disabled','slab-icon-medium mt-2 mb-2 icon-bug',false,false,false,'_self','https://werfen.com'));
    this.navsItems2.push(new NavsItems(3,'Option 3','slab-icon-medium mt-2 mb-2 icon-calendar',false,false,true,'_self','https://werfen.com'));
    this.navsItems2.push(new NavsItems(4,'Option 4','slab-icon-medium mt-2 mb-2 icon-clock',false,false,true,'_self','https://werfen.com'));
    this.navsItems2.push(new NavsItems(5,'Blank Link','slab-icon-medium mt-2 mb-2 icon-print',false,false,true,'_blank','https://werfen.com'));

    this.navsItems3.push(new NavsItems(1,'Option 1','slab-icon-medium mt-2 mb-2 icon-home',true,true,true,'_self','https://google.com'));
    this.navsItems3.push(new NavsItems(2,'Disabled','slab-icon-medium mt-2 mb-2 icon-bug',true,false,false,'_self','https://werfen.com'));
    this.navsItems3.push(new NavsItems(3,'Option 3','slab-icon-medium mt-2 mb-2 icon-calendar',true,false,true,'_self','https://werfen.com'));
    this.navsItems3.push(new NavsItems(5,'Blank Link','slab-icon-medium mt-2 mb-2 icon-clock',true,false,true,'_blank','https://werfen.com'));

    this.navsItems4.push(new NavsItems(1,'Option 1','',false,true,true,'_self','https://google.com'));
    this.navsItems4.push(new NavsItems(2,'Disabled','',false,false,false,'_self','https://werfen.com'));
    this.navsItems4.push(new NavsItems(5,'Blank Link','',false,false,true,'_blank','https://werfen.com'));

    this.navsItems5.push(new NavsItems(1,'Option 1','slab-icon-medium mt-2 mb-2 icon-home',false,true,true,'_self','https://google.com'));
    this.navsItems5.push(new NavsItems(2,'Option 2','slab-icon-medium mt-2 mb-2 icon-bug',false,false,true,'_self','https://werfen.com'));
    this.navsItems5.push(new NavsItems(3,'Option 3','slab-icon-medium mt-2 mb-2 icon-calendar',true,false,true,'_self','https://werfen.com'));
  }

  ngOnInit() {

  }

}

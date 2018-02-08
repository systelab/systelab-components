import {Component, OnInit} from '@angular/core';
import {BreadcrumbItem, BreadcrumbSubItem} from '../../../systelab-components/breadcrumb/BreadcrumbItem';
import {MessagePopupService} from '../../../systelab-components/modal/message-popup/message-popup.service';

@Component({
  selector: 'showcase-breadcrumb',
  templateUrl: './showcase-breadcrumb.component.html'
})
export class ShowcaseBreadcrumbComponent {

  public backgroundColor:string ="#ffffff";
  public activeFontColor:string ="#212529";
  public fontColor:string ="#158fef";
  public items: Array<Object> = [];
  constructor(protected messagePopupService: MessagePopupService) { 

    var subItems: Array<BreadcrumbSubItem> = [];
    subItems.push(new BreadcrumbSubItem('1','Apartments','https://google.com?apartments'));
    subItems.push(new BreadcrumbSubItem('2','Campings','',() => this.showModal()));


    this.items.push(new BreadcrumbItem('1', 'Home', false,'https://google.com'));
    this.items.push(new BreadcrumbItem('2', 'Holidays', false,'',null,() => this.showModal()));
    this.items.push(new BreadcrumbItem('3', 'Hotels', false,'https://google.com',subItems));
    this.items.push(new BreadcrumbItem('4', 'Rooms', true,'https://google.com'));
    
  }
  public showModal() {
    this.messagePopupService.showInformationPopup('Test', 'Example Text', 'w-33 h-33');
  }

}

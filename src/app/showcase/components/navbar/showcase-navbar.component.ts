import {Component} from '@angular/core';
import {NavbarItem} from '../../../systelab-components/navbar/NavbarItem';
import {MessagePopupService} from '../../../systelab-components/modal/message-popup/message-popup.service';
@Component({
  selector: 'showcase-navbar',
  templateUrl: './showcase-navbar.component.html'
})
export class ShowcaseNavbarComponent {

  public items1: Array<Object> = [];
  public items2: Array<Object> = [];
  public items3: Array<Object> = [];
  public items4: Array<Object> = [];
  public items5: Array<Object> = [];
  public idNavbar1: string = "navbar-content1";
  public idNavbar2: string = "navbar-content2";
  public idNavbar3: string = "navbar-content3";
  public idNavbar4: string = "navbar-content4";
  public idNavbar5: string = "navbar-content5";
  public alignNavbarCenter: string = "center";
  public alignNavbarRight: string = "right";
  public alignNavbarLeft: string = "left";
  public fontColor: string = "#ffffff";
  public isVertical: boolean = false;
  public isVertical2: boolean = true;
  public backgroundColor: string = "rgb(21, 143, 239)";
  public backgroundHoverColor: string = "rgb(66, 161,205)";
  public backgroundColor2: string = "rgb(242, 158, 0)";
  public backgroundHoverColor2: string = "rgb(239, 170, 107)";

  constructor(protected messagePopupService: MessagePopupService) {
    /* Items for the horizontal navbar without images */
    this.items1.push(new NavbarItem(1, 'Option 1', '', false, true, true, '_self', 'https://google.com'));
    this.items1.push(new NavbarItem(2, 'Disabled', '', false, false, false, '_self', 'https://werfen.com'));
    this.items1.push(new NavbarItem(3, 'Option 3', '', false, false, true, '_self', 'https://werfen.com'));
    this.items1.push(new NavbarItem(4, 'Option 4', '', false, false, true, '_self', 'https://werfen.com'));
    this.items1.push(new NavbarItem(5, 'Blank Link', '', false, false, true, '_blank', 'https://werfen.com'));

    /* Items for the horizontal navbar with images */
    this.items2.push(new NavbarItem(1, 'Option 1', 'slab-icon-medium icon-home', false, true, true, '_self', 'https://google.com'));
    this.items2.push(new NavbarItem(2, 'Disabled', 'slab-icon-medium icon-bug', false, false, false, '_self', 'https://werfen.com'));
    this.items2.push(new NavbarItem(3, 'Option 3', 'slab-icon-medium icon-calendar', false, false, true, '_self', 'https://werfen.com'));
    this.items2.push(new NavbarItem(4, 'Option 4', 'slab-icon-medium icon-clock', false, false, true, '_self', 'https://werfen.com'));
    this.items2.push(new NavbarItem(5, 'Blank Link', 'slab-icon-medium icon-print', false, false, true, '_blank', 'https://werfen.com'));

    /*Items for the horizontal navbar with images inline */
    this.items3.push(new NavbarItem(1, 'Option 1', 'slab-icon-medium icon-home', true, true, true, '_self', 'https://google.com'));
    this.items3.push(new NavbarItem(2, 'Disabled', 'slab-icon-medium icon-bug', true, false, false, '_self', 'https://werfen.com'));
    this.items3.push(new NavbarItem(3, 'Option 3', 'slab-icon-medium icon-calendar', true, false, true, '_self', 'https://werfen.com'));
    this.items3.push(new NavbarItem(5, 'Blank Link', 'slab-icon-medium icon-clock', true, false, true, '_blank', 'https://werfen.com'));

    /*Items for the vertical navbar without images*/
    this.items4.push(new NavbarItem(1, 'Option 1', '', false, true, true, '_self', 'https://google.com'));
    this.items4.push(new NavbarItem(2, 'Disabled', '', false, false, false, '_self', 'https://werfen.com'));
    this.items4.push(new NavbarItem(5, 'Blank Link', '', false, false, true, '_blank', 'https://werfen.com'));

    /*Items for the vertical navbar with images */
    this.items5.push(new NavbarItem(1, 'Option 1', 'slab-icon-medium icon-home', false, true, true, '_self', 'https://google.com'));
    this.items5.push(new NavbarItem(2, 'Option 2', 'slab-icon-medium icon-bug', false, false, true, '_self', 'https://werfen.com'));
    this.items5.push(new NavbarItem(3, 'Open Modal', 'slab-icon-medium icon-calendar', true, false, true, '', '', () => this.showModal()));
  }
  public showModal() {
    this.messagePopupService.showInformationPopup('Test', 'Example Text', 'w-33 h-33');
  }
}

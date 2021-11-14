import { Story, Meta } from '@storybook/angular/types-6-0';
import DialogDocumentation from './docs/dialog.mdx';
import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogHeaderComponent } from '../projects/systelab-components/src/lib/modal/header/dialog-header.component';
import { DialogBottomComponent } from '../projects/systelab-components/src/lib/modal/bottom/dialog-bottom.component';
import { MessagePopupService } from '../projects/systelab-components/src/lib/modal/message-popup/message-popup.service';
import { I18nService, SystelabTranslateModule } from 'systelab-translate';
import { HttpClientModule } from '@angular/common/http';
import { MessagePopupViewComponent } from '../projects/systelab-components/src/lib/modal/message-popup/message-popup-view.component';
import { MessageWithIconComponent } from '../projects/systelab-components/src/lib/modal/message-popup/message-with-icon.component';
import { of } from 'rxjs';
import { AutofocusDirective } from '../projects/systelab-components/src/lib/directives/autofocus.directive';


@Component({
  selector: "app-popup-story",
  template: `
              <button class="btn btn-primary mt-1 mr-1" (click)="openInfo()">Information Popup</button>
              <button class="btn btn-primary mt-1 mr-1" (click)="openWarning()">Warning Popup</button>
              <button class="btn btn-primary mt-1 mr-1" (click)="openError()">Error Popup</button>
              <button class="btn btn-primary mt-1 mr-1" (click)="openQuestion()">Question Popup</button>
	`
})
class PopupStory {

  @Input() public title='Title';
  @Input() public description='Description';

  constructor(protected messagePopupService: MessagePopupService) { }

  openWarning() {
    this.messagePopupService.showWarningPopup(this.title,this.description);
  }
  openError() {
    this.messagePopupService.showErrorPopup(this.title,this.description);
  }
  openInfo() {
    this.messagePopupService.showInformationPopup(this.title,this.description);
  }
  openQuestion() {
    this.messagePopupService.showYesNoQuestionPopup(this.title,this.description);
  }
}


class USMockI18nService {
  public get(key: string) {
    return of(key);
  }
  public instant(key: string) {
    switch (key) {
      case 'COMMON_YES': return 'Yes';
      case 'COMMON_NO': return 'No';
      default: return key;
    }
  }
}


export default {
  title: 'Navigation/Popups',
  component: PopupStory,
  decorators: [
    moduleMetadata({
      declarations: [PopupStory, DialogHeaderComponent, DialogBottomComponent, MessageWithIconComponent, MessagePopupViewComponent, AutofocusDirective],
      imports: [CommonModule, OverlayModule, SystelabTranslateModule, HttpClientModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'},{provide: I18nService, useClass: USMockI18nService}]
    }),
  ],
  parameters: {
    docs: {
      page: DialogDocumentation,
    }
  },
} as Meta;


const Template: Story<PopupStory> = (args: PopupStory) => ({
  props: args,
  template: `
    <div class="container">
    <app-popup-story [title]="title" [description]="description"></app-popup-story>
    </div>
    `,
});



export const Default = Template.bind({});
Default.args = {
  title: 'My Title',
  description: 'My Description'
};


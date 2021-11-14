import { Story, Meta } from '@storybook/angular/types-6-0';
import DialogDocumentation from './docs/dialog.mdx';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DialogService } from '../projects/systelab-components/src/lib/modal/dialog/dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogRef } from '../projects/systelab-components/src/lib/modal/dialog/dialog-ref';
import { ModalComponent } from '../projects/systelab-components/src/lib/modal/dialog/modal-context';
import { SystelabModalContext } from '../projects/systelab-components/src/lib/modal/dialog/modal-context';
import { DialogHeaderComponent } from '../projects/systelab-components/src/lib/modal/header/dialog-header.component';
import { DialogBottomComponent } from '../projects/systelab-components/src/lib/modal/bottom/dialog-bottom.component';



class ShowcaseStandardDialogParameters extends SystelabModalContext {
  public index: number;
  public width = 500;
  public height = 400;
}

@Component({
  template: `<div class="slab-flex-1 d-flex flex-column" cdkTrapFocus>
    <systelab-dialog-header (close)="close();">Title</systelab-dialog-header>
    <div class="slab-flex-1"></div>
    <systelab-dialog-bottom>
      <button type="button" class="btn btn-primary ml-auto" (click)="close()"> Submit</button>
    </systelab-dialog-bottom>
  </div>
            `,
})
class ShowcaseStandardDialog implements ModalComponent<ShowcaseStandardDialogParameters> {

  protected parameters: ShowcaseStandardDialogParameters;

  public static getParameters(): ShowcaseStandardDialogParameters {
    return new ShowcaseStandardDialogParameters();
  }

  constructor(public dialog: DialogRef<ShowcaseStandardDialogParameters>) {
    this.parameters = dialog.context;
  }

  public close(): void {
    this.dialog.close('This is a test');
  }
}




@Component({
  selector: 'app-modal-story',
  template: `
		<button class="btn btn-primary" (click)="openModal()">Open Dialog</button>
	`
})
class ModalStory {

  @Input() modalText = 'Hello, World';

  @Input() size = 'default';

  @Input() showCloseButton = true;

  constructor(protected dialogService: DialogService) { }

  openModal() {
    this.dialogService.showDialog(ShowcaseStandardDialog, ShowcaseStandardDialog.getParameters());

    console.log('Do something');
  }
}


export default {
  title: 'Components/Modals/Dialog',
  component: ModalStory,
  decorators: [
    moduleMetadata({
      declarations: [ModalStory, ShowcaseStandardDialog, DialogHeaderComponent, DialogBottomComponent],
      imports: [CommonModule, OverlayModule],
    }),
  ],
  parameters: {
    docs: {
      page: DialogDocumentation,
    }
  },
} as Meta;

const Template: Story<ModalStory> = (args: ModalStory) => ({
  props: args,
  template: `
    <div class="container">
    <app-modal-story></app-modal-story>
    </div>
    `,

});


export const Default = Template.bind({});
Default.args = {
};


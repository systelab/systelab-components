import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShowcaseComponent } from './showcase.component';
import { SystelabComponentsModule } from '../systelab-components/systelab-components.module';
import { FormsModule } from '@angular/forms';
import { DialogService } from '../systelab-components/modal/dialog/dialog.service';
import { MessagePopupService } from '../systelab-components/modal/message-popup/message-popup.service';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { HttpClientModule } from '@angular/common/http';
import { ShowcaseSplitDialog } from './forms/split/showcase-split-dialog.component';
import { ShowcaseUpperFlexComponent } from './forms/upper-flex/showcase-upper-flex.component';
import { ShowcaseLowerFlexComponent } from './forms/lower-flex/showcase-lower-flex.component';
import { ShowcaseTwoColumnsComponent } from './forms/two-columns/showcase-two-columns.component';
import { ShowcaseIconsListComponent } from './icons-list/showcase-icons-list.component';
import { ShowcaseFullFlexComponent } from './forms/full-flex/showcase-full-flex.component';
import { ShowcaseUpperFlexDialog } from './forms/upper-flex/showcase-upper-flex-dialog.component';
import { ShowcaseLowerFlexDialog } from './forms/lower-flex/showcase-lower-flex-dialog.component';
import { ShowcaseTwoColumnsDialog } from './forms/two-columns/showcase-two-columns-dialog.component';
import { ShowcaseFullFlexDialog } from './forms/full-flex/showcase-full-flex-dialog.component';
import { SampleRouteComponent } from './sample-route/sample-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowcaseGrid } from './grid/showcase-grid.component';
import { ShowcaseProgressBarDialog } from './forms/progressbar-dialog/showcase-progressbar-dialog.component';
import { ShowcaseSpinnersComponent } from './spinners/showcase-spinners.component';
import { ShowcaseInputsComponent } from './inputs/showcase-inputs.component';
import { ShowcaseFormsComponent } from './forms/showcase-forms.component';
import { ShowcaseStandardDialog } from './forms/standard-dialog/showcase-standard-dialog.component';
import { ShowcaseStandardComponent } from './forms/standard-dialog/showcase-standard.component';

@NgModule({
	imports:         [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		SystelabComponentsModule.forRoot(),
		SystelabTranslateModule.forRoot(),
		SystelabPreferencesModule.forRoot()
	],
	declarations:    [
		ShowcaseComponent,
		ShowcaseUpperFlexComponent,
		ShowcaseLowerFlexComponent,
		ShowcaseTwoColumnsComponent,
		ShowcaseIconsListComponent,
		ShowcaseFullFlexComponent,
		ShowcaseSpinnersComponent,
		ShowcaseInputsComponent,
		ShowcaseFormsComponent,
		ShowcaseUpperFlexDialog,
		ShowcaseLowerFlexDialog,
		ShowcaseTwoColumnsDialog,
		ShowcaseFullFlexDialog,
		ShowcaseSplitDialog,
		ShowcaseGrid,
		ShowcaseStandardDialog,
		SampleRouteComponent,
		ShowcaseStandardComponent,
		ShowcaseProgressBarDialog
	],
	entryComponents: [
		ShowcaseUpperFlexDialog,
		ShowcaseLowerFlexDialog,
		ShowcaseTwoColumnsDialog,
		ShowcaseFullFlexDialog,
		ShowcaseStandardDialog,
		ShowcaseSplitDialog,
		ShowcaseProgressBarDialog
	],
	providers:       [
		MessagePopupService,
		DialogService
	],
	bootstrap:       [ShowcaseComponent]
})
export class ShowcaseModule {
}

export { ShowcaseComponent } from './showcase.component';

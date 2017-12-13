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
import { SplitShowcaseDialog } from './split/split-showcase-dialog.component';
import { EmptyDialog } from './forms/empty-dialog/empty-dialog.component';
import { UpperFlexComponent } from './upper-flex/upper-flex.component';
import { LowerFlexComponent } from './forms/lower-flex/lower-flex.component';
import { TwoColumnsComponent } from './two-columns/two-columns.component';
import { IconsListComponent } from './icons-list/icons-list.component';
import { FullFlexComponent } from './forms/full-flex/full-flex.component';
import { UpperFlexDialog } from './upper-flex/upper-flex-dialog.component';
import { LowerFlexDialog } from './forms/lower-flex/lower-flex-dialog.component';
import { TwoColumnsDialog } from './two-columns/two-columns-dialog.component';
import { FullFlexDialog } from './forms/full-flex/full-flex-dialog.component';
import { SampleRouteComponent } from './sample-route/sample-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InnerSampleGrid } from './grid/innner-sample-grid.component';
import { BootstrapDialog } from './forms/bootstrap-dialog/bootstrap-dialog.component';
import { BootstrapPanel } from './forms/bootstrap-dialog/bootstrap-panel.component';
import { ProgressbarDialog } from './forms/progressbar-dialog/progressbar-dialog.component';
import { ShowcaseSpinnersComponent } from './spinners/showcase-spinners.component';
import { ShowcaseInputsComponent } from './inputs/showcase-inputs.component';

@NgModule({
	imports:      [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		SystelabComponentsModule.forRoot(),
		SystelabTranslateModule.forRoot(),
		SystelabPreferencesModule.forRoot()
	],
	declarations: [
		ShowcaseComponent,
		UpperFlexComponent,
		LowerFlexComponent,
		TwoColumnsComponent,
		IconsListComponent,
		FullFlexComponent,
		ShowcaseSpinnersComponent,
		ShowcaseInputsComponent,
		UpperFlexDialog,
		LowerFlexDialog,
		TwoColumnsDialog,
		FullFlexDialog,
		EmptyDialog,
		SplitShowcaseDialog,
		InnerSampleGrid,
		BootstrapDialog,
		SampleRouteComponent,
		BootstrapPanel,
		ProgressbarDialog
	],
	entryComponents: [
		UpperFlexDialog,
		LowerFlexDialog,
		TwoColumnsDialog,
		FullFlexDialog,
		EmptyDialog,
		BootstrapDialog,
		SplitShowcaseDialog,
		ProgressbarDialog
	],
	providers:    [
		MessagePopupService,
		DialogService
	],
	bootstrap:    [ShowcaseComponent]
})
export class ShowcaseModule {
}

export { ShowcaseComponent } from './showcase.component';

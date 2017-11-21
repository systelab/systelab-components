import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShowcaseComponent } from './showcase.component';
import { SystelabComponentsModule } from './systelab-components/systelab-components.module';
import { FormsModule } from '@angular/forms';
import { DialogService } from './systelab-components/modal/dialog/dialog.service';
import { MessagePopupService } from './systelab-components/modal/message-popup/message-popup.service';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { HttpClientModule } from '@angular/common/http';
import { SplitShowcaseDialog } from './showcase/split/split-showcase-dialog.component';
import { EmptyDialog } from './showcase/empty-dialog/empty-dialog.component';
import { UpperFlexComponent } from './showcase/upper-flex/upper-flex.component';
import { LowerFlexComponent } from './showcase/lower-flex/lower-flex.component';
import { TwoColumnsComponent } from './showcase/two-columns/two-columns.component';
import { IconsListComponent } from './showcase/icons-list.component';
import { FullFlexComponent } from './showcase/full-flex/full-flex.component';
import { UpperFlexDialog } from './showcase/upper-flex/upper-flex-dialog.component';
import { LowerFlexDialog } from './showcase/lower-flex/lower-flex-dialog.component';
import { TwoColumnsDialog } from './showcase/two-columns/two-columns-dialog.component';
import { FullFlexDialog } from './showcase/full-flex/full-flex-dialog.component';
import { SampleRouteComponent } from './showcase/sample-route/sample-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InnerSampleGrid } from './showcase/innner-sample-grid.component';

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
		UpperFlexDialog,
		LowerFlexDialog,
		TwoColumnsDialog,
		FullFlexDialog,
		EmptyDialog,
		SplitShowcaseDialog,
		InnerSampleGrid,
		SampleRouteComponent
	],
	entryComponents: [
		UpperFlexDialog,
		LowerFlexDialog,
		TwoColumnsDialog,
		FullFlexDialog,
		EmptyDialog,
		EmptyDialog,
		SplitShowcaseDialog
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

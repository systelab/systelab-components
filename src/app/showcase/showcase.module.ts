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
import { ShowcaseSplitDialog } from './components/dialog/split/showcase-split-dialog.component';
import { ShowcaseTwoTabsComponent } from './components/dialog/two-tabs/showcase-two-tabs.component';
import { ShowcaseLowerFlexComponent } from './components/dialog/lower-flex/showcase-lower-flex.component';
import { ShowcaseTwoColumnsComponent } from './components/dialog/two-columns/showcase-two-columns.component';
import { ShowcaseFullFlexComponent } from './components/dialog/full-flex/showcase-full-flex.component';
import { ShowcaseTwoTabsDialog } from './components/dialog/two-tabs/showcase-two-tabs-dialog.component';
import { ShowcaseLowerFlexDialog } from './components/dialog/lower-flex/showcase-lower-flex-dialog.component';
import { ShowcaseTwoColumnsDialog } from './components/dialog/two-columns/showcase-two-columns-dialog.component';
import { ShowcaseFullFlexDialog } from './components/dialog/full-flex/showcase-full-flex-dialog.component';
import { SampleRouteComponent } from './components/sample-route/sample-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowcaseProgressBarDialog } from './components/progress-bars/progressbar-dialog/showcase-progressbar-dialog.component';
import { ShowcaseDialogComponent } from './components/dialog/showcase-dialog.component';
import { ShowcaseStandardDialog } from './components/dialog/standard-dialog/showcase-standard-dialog.component';
import { ShowcaseStandardComponent } from './components/dialog/standard-dialog/showcase-standard.component';
import { ShowcaseSpinnerComponent } from './components/spinner/showcase-spinner.component';
import { ShowcaseComponentsComponent } from './components/showcase-components.component';
import { ShowcaseCheckboxComponent } from './components/checkbox/showcase-checkbox.component';
import { ShowcaseRadioComponent } from './components/radio/showcase-radio.component';
import { ShowcaseTooltipComponent } from './components/tooltip/showcase-tooltip.component';
import { ShowcaseSliderComponent } from './components/slider/showcase-slider.component';
import { ShowcaseTextareaComponent } from './components/textarea/showcase-textarea.component';
import { ShowcaseDatepickerComponent } from './components/datepicker/showcase-datepicker.component';
import { ShowcaseComboboxComponent } from './components/combobox/showcase-combobox.component';
import { ShowcaseInputComponent } from './components/input/showcase-input.component';
import { ShowcaseTableComponent } from './components/table/showcase-table.component';
import { ShowcaseGridComponent } from './components/grid/showcase-grid.component';
import { ShowcaseInnerGridComponent } from './components/grid/showcase-inner-grid.component';
import { ShowcaseIconComponent } from './components/icon/showcase-icon.component';
import { ShowcaseTwoListComponent } from './components/two-list/showcase-two-list.component';
import { ShowcaseApplicationFrameComponent } from './components/application-frame/showcase-application-frame.component';
import { ShowcaseApplicationFrameDialog } from './components/application-frame/application-frame-dialog/showcase-application-frame-dialog.component';
import { ShowcasePieComponent } from './components/pie/showcase-pie.component';
import { ShowcaseMessagePopupComponent } from './components/message-popup/showcase-message-popup.component';
import { ShowcaseTitleComponent } from './components/showcase-title.component';
import { ShowcaseProgressBarComponent } from './components/progress-bars/showcase-progress-bar.component';
import { ShowcaseButtonComponent } from './components/button/showcase-button.component';
import { ShowcaseHeadingsComponent } from './components/headings/showcase-headings.component';
import { ShowcaseAlertComponent } from './components/alert/showcase-alert.component';
import { ShowcaseTextComponent } from './components/text/showcase-text.component';
import { ShowcaseTabsComponent } from './components/tabs/showcase-tabs.component';
import { ShowcaseSearcherComponent } from './components/searcher/showcase-searcher.component';
import { InnerSearcherComponent } from './components/searcher/inner-searcher.component';
import { ShowcaseLoadingComponent } from './components/loading/showcase-loading.component';
import { ShowcaseLoadingDialog } from './components/loading/loading-dialog/showcase-loading-dialog.component';
import { ShowcaseFileSelectorComponent } from './components/file-selector/showcase-file-selector.component';
import { ShowcaseTimelineComponent } from './components/timeline/showcase-timeline.component';
import { ShowcaseTimelineDialog } from './components/timeline/timeline-dialog/showcase-timeline-dialog.component';
import { ShowcaseNavsComponent } from './components/navs/showcase-navs.component';

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
		ShowcaseTwoTabsComponent,
		ShowcaseLowerFlexComponent,
		ShowcaseTwoColumnsComponent,
		ShowcaseFullFlexComponent,
		ShowcaseDialogComponent,
		ShowcaseComponentsComponent,
		ShowcaseSpinnerComponent,
		ShowcaseCheckboxComponent,
		ShowcaseRadioComponent,
		ShowcaseSliderComponent,
		ShowcaseTooltipComponent,
		ShowcaseInputComponent,
		ShowcaseButtonComponent,
		ShowcaseIconComponent,
		ShowcaseComboboxComponent,
		ShowcaseDatepickerComponent,
		ShowcaseTextareaComponent,
		ShowcaseTableComponent,
		ShowcaseGridComponent,
		ShowcaseTwoListComponent,
		ShowcaseApplicationFrameComponent,
		ShowcaseMessagePopupComponent,
		ShowcaseTitleComponent,
		ShowcasePieComponent,
		ShowcaseProgressBarComponent,
		ShowcaseHeadingsComponent,
		ShowcaseAlertComponent,
		ShowcaseTextComponent,
		ShowcaseTabsComponent,
		ShowcaseSearcherComponent,
		InnerSearcherComponent,
		ShowcaseLoadingComponent,
		ShowcaseTwoTabsDialog,
		ShowcaseLowerFlexDialog,
		ShowcaseTwoColumnsDialog,
		ShowcaseFullFlexDialog,
		ShowcaseSplitDialog,
		ShowcaseInnerGridComponent,
		ShowcaseStandardDialog,
		SampleRouteComponent,
		ShowcaseStandardComponent,
		ShowcaseFileSelectorComponent,
		ShowcaseProgressBarDialog,
		ShowcaseApplicationFrameDialog,
		ShowcaseLoadingDialog,
		ShowcaseTimelineDialog,
		ShowcaseTimelineComponent,
		ShowcaseNavsComponent
	],
	entryComponents: [
		ShowcaseTwoTabsDialog,
		ShowcaseLowerFlexDialog,
		ShowcaseTwoColumnsDialog,
		ShowcaseFullFlexDialog,
		ShowcaseStandardDialog,
		ShowcaseSplitDialog,
		ShowcaseProgressBarDialog,
		ShowcaseApplicationFrameDialog,
		ShowcaseLoadingDialog,
		ShowcaseTimelineDialog
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

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
import { ShowcaseUpperFlexComponent } from './components/dialog/upper-flex/showcase-upper-flex.component';
import { ShowcaseLowerFlexComponent } from './components/dialog/lower-flex/showcase-lower-flex.component';
import { ShowcaseTwoColumnsComponent } from './components/dialog/two-columns/showcase-two-columns.component';
import { ShowcaseFullFlexComponent } from './components/dialog/full-flex/showcase-full-flex.component';
import { ShowcaseUpperFlexDialog } from './components/dialog/upper-flex/showcase-upper-flex-dialog.component';
import { ShowcaseLowerFlexDialog } from './components/dialog/lower-flex/showcase-lower-flex-dialog.component';
import { ShowcaseTwoColumnsDialog } from './components/dialog/two-columns/showcase-two-columns-dialog.component';
import { ShowcaseFullFlexDialog } from './components/dialog/full-flex/showcase-full-flex-dialog.component';
import { SampleRouteComponent } from './components/sample-route/sample-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowcaseProgressBarDialog } from './components/dialog/progressbar-dialog/showcase-progressbar-dialog.component';
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
import { ShowcaseComboboxComponent } from './components/combo/showcase-combobox.component';
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
		ShowcaseUpperFlexDialog,
		ShowcaseLowerFlexDialog,
		ShowcaseTwoColumnsDialog,
		ShowcaseFullFlexDialog,
		ShowcaseSplitDialog,
		ShowcaseInnerGridComponent,
		ShowcaseStandardDialog,
		SampleRouteComponent,
		ShowcaseStandardComponent,
		ShowcaseProgressBarDialog,
		ShowcaseApplicationFrameDialog
	],
	entryComponents: [
		ShowcaseUpperFlexDialog,
		ShowcaseLowerFlexDialog,
		ShowcaseTwoColumnsDialog,
		ShowcaseFullFlexDialog,
		ShowcaseStandardDialog,
		ShowcaseSplitDialog,
		ShowcaseProgressBarDialog,
		ShowcaseApplicationFrameDialog
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

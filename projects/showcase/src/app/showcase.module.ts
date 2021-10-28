import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShowcaseComponent } from './showcase.component';
import { GridContextMenuCellRendererComponent, GridHeaderContextMenuComponent, SystelabComponentsModule } from 'systelab-components';
import { FormsModule } from '@angular/forms';
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
import { ShowcaseInnerApiGridComponent } from './components/grid/showcase-inner-api-grid.component';
import { ShowcaseIconComponent } from './components/icon/showcase-icon.component';
import { ShowcaseTwoListComponent } from './components/two-list/showcase-two-list.component';
import { ShowcaseApplicationFrameComponent } from './components/application-frame/showcase-application-frame.component';
import { ShowcaseApplicationFrameDialog } from './components/application-frame/application-frame-dialog/showcase-application-frame-dialog.component';
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
import { ShowcaseNavbarComponent } from './components/navbar/showcase-navbar.component';
import { ShowcaseBreadcrumbComponent } from './components/breadcrumb/showcase-breadcrumb.component';
import { ShowcaseSignatureCanvasComponent } from './components/signature-canvas/showcase-signature-canvas.component';
import { ShowcaseInnerTreeComponent } from './components/tree/showcase-inner-tree.component';
import { ShowcaseTreeComponent } from './components/tree/showcase-tree.component';
import { ShowcasePercentageCircleComponent } from './components/percentage-circle/showcase-percentage-circle.component';
import { ShowcaseInlineComponent } from './components/inline/showcase-inline.component';
import { AgGridModule } from 'ag-grid-angular';
import { ShowcaseWizardStepsComponent } from './components/wizard-steps/showcase-wizard-steps.component';
import { ShowcaseSortableListComponent } from './components/sortable-list/showcase-sortable-list.component';
import { ShowcaseInnerSortableListComponent } from './components/sortable-list/showcase-inner-sortable-list.component';
import { ShowcaseAddRemoveListComponent } from './components/add-remove-list/showcase-add-remove-list.component';
import { ShowcaseInnerAddRemoveListComponent } from './components/add-remove-list/showcase-inner-add-remove-list.component';
import { ShowcaseContextMenu } from './components/context-menu/showcase-context-menu.component';
import { ShowcaseListBoxComponent } from './components/listbox/showcase-listbox.component';
import { ShowcaseInnerTreeListBox } from './components/listbox/showcase-inner-tree-listbox.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ShowcaseAutocomplete } from './components/combobox/showcase-autocomplete-combobox.component';
import { ShowcaseInnerGridComponent } from './components/grid/showcase-inner-grid.component';
import { ShowcaseContextPanel } from './components/context-panel/showcase-context-panel.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ShowcasePaginatorComponent } from './components/paginator/showcase-paginator-component';
import { TreeModule } from 'primeng/tree';
import { ShowcaseBarsGridComponent } from './components/grid/showcase-inner-bars-grid.component';
import { A11yModule } from '@angular/cdk/a11y';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ShowcaseInnerTreeComboBox } from './components/combobox/showcase-inner-tree-combobox.component';
import { ShowcaseToastComponent } from './components/toast/showcase-toast.component';
import { ShowcaseSpyMenuComponent } from './components/spy-menu/showcase-spy-menu.component';
import { ShowcaseSpyMenuDialog } from './components/spy-menu/showcase-spy-menu-dialog.component';
import { ShowcaseVerticaldDialog } from './components/dialog/vertical-dialog/showcase-vertical-dialog.component';
import { ShowcaseVerticalComponent } from './components/dialog/vertical-dialog/showcase-vertical.component';
import { KeyupDebounceDirective } from '../../../systelab-components/src/lib/directives/keyup-debounce.directive';
import { ShowcaseInnerGroupColumnsGridComponent } from './components/grid/showcase-inner-group-columns-grid.component';
import { ShowcaseToggleSelectorComponent } from './components/toggle-selector/showcase-toggle-selector.component';

@NgModule({
	imports:      [
		A11yModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		DragDropModule,
		OverlayModule,
		TreeModule,
		HttpClientModule,
		SystelabComponentsModule,
		SystelabTranslateModule,
		SystelabPreferencesModule,
		AgGridModule.withComponents([
			GridContextMenuCellRendererComponent,
			GridHeaderContextMenuComponent
		]),
		AutoCompleteModule
	],
	declarations: [
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
		ShowcaseInnerTreeComboBox,
		ShowcaseTwoListComponent,
		ShowcaseApplicationFrameComponent,
		ShowcaseMessagePopupComponent,
		ShowcaseTitleComponent,
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
		ShowcaseInnerApiGridComponent,
		ShowcaseInnerGroupColumnsGridComponent,
		ShowcaseStandardDialog,
		SampleRouteComponent,
		ShowcaseStandardComponent,
		ShowcaseFileSelectorComponent,
		ShowcaseProgressBarDialog,
		ShowcaseApplicationFrameDialog,
		ShowcaseLoadingDialog,
		ShowcaseTimelineDialog,
		ShowcaseTimelineComponent,
		ShowcaseNavbarComponent,
		ShowcaseBreadcrumbComponent,
		ShowcaseSignatureCanvasComponent,
		ShowcaseTreeComponent,
		ShowcaseInnerTreeComponent,
		ShowcasePercentageCircleComponent,
		ShowcaseInlineComponent,
		ShowcaseWizardStepsComponent,
		ShowcaseSortableListComponent,
		ShowcaseInnerSortableListComponent,
		ShowcaseAddRemoveListComponent,
		ShowcaseInnerAddRemoveListComponent,
		ShowcaseContextMenu,
		ShowcaseContextPanel,
		ShowcaseListBoxComponent,
		ShowcaseInnerTreeListBox,
		ShowcaseAutocomplete,
		ShowcasePaginatorComponent,
		ShowcaseBarsGridComponent,
		ShowcaseSpyMenuComponent,
		ShowcaseSpyMenuDialog,
		ShowcaseVerticalComponent,
		ShowcaseVerticaldDialog,
		ShowcaseToastComponent,
		ShowcaseToggleSelectorComponent,
		KeyupDebounceDirective
	],
	bootstrap:    [ShowcaseComponent]
})
export class ShowcaseModule {
}

export { ShowcaseComponent } from './showcase.component';

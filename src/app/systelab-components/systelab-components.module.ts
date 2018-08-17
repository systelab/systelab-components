import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SwitchComponent } from './switch/switch.component';
import { CalendarModule, ContextMenuModule, SliderModule, Tree, TreeModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/components/common/shared';
import { FormsModule } from '@angular/forms';
import { SystelabModalModule } from './modal/plugin/custom/systelab-modal.module';
import { DialogComponent } from './modal/dialog/dialog.component';
import { ContextMenuComponent } from './contextmenu/context-menu.component';
import { MessagePopupViewComponent } from './modal/message-popup/message-popup-view.component';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { DataFilterPipe } from './twolist/datafilter.pipe';
import { TwoListComponent } from './twolist/two-list.component';
import { GridContextMenuComponent } from './grid/contextmenu/grid-context-menu.component';
import { GridHeaderContextMenuComponent } from './grid/contextmenu/grid-header-context-menu.component';
import { GridOptionsDialog } from './grid/options/grid-options-dialog.component';
import { AgGridModule, AgGridNg2, BaseComponentFactory, Ng2ComponentFactory } from 'ag-grid-angular';
import { DndModule } from 'ng2-dnd';
import { SystelabTranslateModule } from 'systelab-translate';
import { StylesUtilService } from './utilities/styles.util.service';
import { ColorUtilService } from './utilities/color.util.service';
import { ColorComboBox } from './colorpicker/colorpicker.component';
import { AllYesNoSelect } from './select/all-yes-no-combobox.component';
import { NoYesSelect } from './select/no-yes-combobox-component';
import { PeriodSelect } from './select/period-combobox.component';
import { GenderSelect } from './select/gender-combobox.component';
import { ColorCellRendererComponent } from './colorpicker/color-cell-renderer.component';
import { ApplicationHeaderComponent } from './applicationframe/header/app-header.component';
import { ApplicationSidebarComponent } from './applicationframe/sidebar/app-sidebar.component';
import { Datepicker } from './datepicker/datepicker.component';
import { DatepickerTime } from './datepicker/datepicker-time.component';
import { TouchspinComponent } from './spinner/spinner.component';
import { ModulabSelect } from './select/select.component';
import { ApplicationFrameComponent } from './applicationframe/application-frame.component';
import { AngularSplitModule, SplitAreaDirective, SplitComponent } from 'angular-split';
import { SearcherDialog } from './searcher/searcher.dialog.component';
import { SearcherTableComponent } from './searcher/searcher.table.component';
import { CalendarHeaderComponent } from './calendar/calendar-header.component';
import { CalendarTableComponent } from './calendar/calendar-table.component';
import { CalendarDialog } from './calendar/calendar-dialog.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { DialogHeaderComponent } from './modal/header/dialog-header.component';
import { DialogBottomComponent } from './modal/bottom/dialog-bottom.component';
import { LoadingComponent } from './loading/loading.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { FileSelectorComponent } from './file-selector/file-selector.component';
import { ComboBoxInputRendererComponent } from './combobox/renderer/combobox-input-renderer.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TimelineComponent } from './timeline/timeline.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageWithIconComponent } from './modal/message-popup/message-with-icon.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { WeekSelectorComponent } from './week-selector/week-selector.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { SignatureCanvasComponent } from './signature-canvas/signature-canvas.component';
import { CalendarFooterComponent } from './calendar/calendar-footer.component';
import { PercentageCircleComponent } from './percentage-circle/percentage-circle.component';
import { DOMOutsideEventPlugin, DOMOverlayRenderer } from './modal/base/providers';
import { OverlayRenderer } from './modal/base/models/tokens';
import { LoadingService } from './loading/loading.service';
import { TimeUnitSelectComponent } from './select/time-unit-combobox.component';
import { CheckboxCellRendererComponent } from './grid/custom-cells/checkbox/checkbox-cell-renderer.component';
import { InputCellRendererComponent } from './grid/custom-cells/input/input-cell-renderer.component';
import { DecimalInputCellRendererComponent } from './grid/custom-cells/decimal-input/decimal-input-cell-renderer.component';
import { DragAndDropService } from 'ag-grid';
import { WizardStepsComponent } from './wizard-steps/wizard-steps.component';
import { SpinnerCellEditorComponent } from './grid/custom-cells/spinner/spinner-cell-editor.component';
import { TwoListSortableListComponent } from './twolist/two-list-sortable-list.component';
import { SpinnerCellRendererComponent } from './grid/custom-cells/spinner/spinner-cell-renderer.component';
import { InputCellEditorComponent } from './grid/custom-cells/input/input-cell-editor.component';
import { CheckboxCellEditorComponent } from './grid/custom-cells/checkbox/checkbox-cell-editor.component';
import { DecimalInputCellEditorComponent } from './grid/custom-cells/decimal-input/decimal-input-cell-editor.component';
import { AbstractListboxRendererComponent } from './listbox/renderer/abstract-listbox-renderer.component';
import { ContextMenuItemComponent } from './contextmenu/context-menu-item.component';
import { NumPadComponent } from './numpad/numpad.component';
import { NumPadDialog } from './numpad/numpad.dialog.component';

@NgModule({
	imports:         [
		CommonModule,
		FormsModule,
		SharedModule,
		SliderModule,
		CalendarModule,
		TreeModule,
		SystelabModalModule,
		ContextMenuModule,
		AngularSplitModule,
		SystelabTranslateModule,
		AgGridModule,
		DndModule
	],
	declarations:    [
		SliderComponent,
		SwitchComponent,
		ContextMenuComponent,
		DialogComponent,
		MessagePopupViewComponent,
		DataFilterPipe,
		TwoListComponent,
		GridContextMenuComponent,
		GridHeaderContextMenuComponent,
		GridOptionsDialog,
		ColorCellRendererComponent,
		ColorComboBox,
		ApplicationFrameComponent,
		ApplicationHeaderComponent,
		ApplicationSidebarComponent,
		ToggleButtonComponent,
		AllYesNoSelect,
		NoYesSelect,
		PeriodSelect,
		TimeUnitSelectComponent,
		GenderSelect,
		TouchspinComponent,
		ModulabSelect,
		Datepicker,
		DatepickerTime,
		SearcherDialog,
		CalendarDialog,
		SearcherTableComponent,
		CalendarHeaderComponent,
		CalendarTableComponent,
		CalendarFooterComponent,
		TabsComponent,
		TabComponent,
		DialogHeaderComponent,
		DialogBottomComponent,
		LoadingComponent,
		FileSelectorComponent,
		TimelineComponent,
		MessageWithIconComponent,
		ComboBoxInputRendererComponent,
		TooltipDirective,
		NavbarComponent,
		BreadcrumbComponent,
		WeekSelectorComponent,
		MonthSelectorComponent,
		SignatureCanvasComponent,
		PercentageCircleComponent,
		InputCellRendererComponent,
		DecimalInputCellRendererComponent,
		CheckboxCellRendererComponent,
		SpinnerCellEditorComponent,
		WizardStepsComponent,
		TwoListSortableListComponent,
		SpinnerCellRendererComponent,
		InputCellEditorComponent,
		DecimalInputCellEditorComponent,
		CheckboxCellEditorComponent,
		AbstractListboxRendererComponent,
		ContextMenuItemComponent,
		NumPadComponent,
		NumPadDialog
	],
	exports:         [
		SliderComponent,
		SwitchComponent,
		ContextMenuComponent,
		TwoListComponent,
		GridHeaderContextMenuComponent,
		ColorCellRendererComponent,
		ColorComboBox,
		ApplicationHeaderComponent,
		ApplicationSidebarComponent,
		ApplicationFrameComponent,
		AllYesNoSelect,
		NoYesSelect,
		PeriodSelect,
		TimeUnitSelectComponent,
		GenderSelect,
		Datepicker,
		TouchspinComponent,
		ModulabSelect,
		DatepickerTime,
		SearcherDialog,
		CalendarDialog,
		ToggleButtonComponent,
		SearcherTableComponent,
		CalendarHeaderComponent,
		CalendarTableComponent,
		CalendarFooterComponent,
		TabsComponent,
		TabComponent,
		DialogHeaderComponent,
		DialogBottomComponent,
		LoadingComponent,
		FileSelectorComponent,
		TimelineComponent,
		NavbarComponent,
		MessageWithIconComponent,
		BreadcrumbComponent,
		WeekSelectorComponent,
		MonthSelectorComponent,
		SignatureCanvasComponent,
		PercentageCircleComponent,
		AgGridNg2,
		Tree,
		SplitComponent,
		SplitAreaDirective,
		ComboBoxInputRendererComponent,
		TooltipDirective,
		InputCellRendererComponent,
		DecimalInputCellRendererComponent,
		CheckboxCellRendererComponent,
		SpinnerCellEditorComponent,
		WizardStepsComponent,
		TwoListSortableListComponent,
		DataFilterPipe,
		SpinnerCellRendererComponent,
		InputCellEditorComponent,
		DecimalInputCellEditorComponent,
		CheckboxCellEditorComponent,
		AbstractListboxRendererComponent,
		ContextMenuItemComponent,
		NumPadComponent,
		NumPadDialog
	],
	entryComponents: [
		MessagePopupViewComponent,
		GridOptionsDialog,
		SearcherDialog,
		CalendarDialog,
		ColorCellRendererComponent,
		InputCellRendererComponent,
		DecimalInputCellRendererComponent,
		CheckboxCellRendererComponent,
		SpinnerCellEditorComponent,
		SpinnerCellRendererComponent,
		InputCellEditorComponent,
		DecimalInputCellEditorComponent,
		CheckboxCellEditorComponent,
		AbstractListboxRendererComponent,
		NumPadDialog
	],
	providers:       [
		StylesUtilService,
		ColorUtilService,
		LoadingService
	]
})
export class SystelabComponentsModule {
	static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders {
		return {
			ngModule:  SystelabComponentsModule,
			providers: [
				{provide: OverlayRenderer, useClass: DOMOverlayRenderer},
				{provide: EVENT_MANAGER_PLUGINS, useClass: DOMOutsideEventPlugin, multi: true},
				{provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents || [], multi: true},
				Ng2ComponentFactory,
				{provide: BaseComponentFactory, useExisting: Ng2ComponentFactory},
				{provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents, multi: true}
			]
		};
	}
}

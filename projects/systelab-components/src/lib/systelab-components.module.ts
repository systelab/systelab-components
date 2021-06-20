import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SwitchComponent } from './switch/switch.component';
import { FormsModule } from '@angular/forms';
import { ContextMenuComponent } from './contextmenu/context-menu.component';
import { DataFilterPipe } from './twolist/datafilter.pipe';
import { TwoListComponent } from './twolist/two-list.component';
import { GridContextMenuCellRendererComponent } from './grid/contextmenu/grid-context-menu-cell-renderer.component';
import { GridHeaderContextMenuComponent } from './grid/contextmenu/grid-header-context-menu-renderer.component';
import { GridColumnOptionsDialog } from './grid/options/grid-column-options-dialog.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
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
import { ApplicationSidebarLargeComponent } from './applicationframe/sidebar/app-sidebar-large.component';
import { Datepicker } from './datepicker/datepicker.component';
import { DatepickerTimeComponent } from './datepicker/datepicker-time.component';
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
import { LoadingService } from './loading/loading.service';
import { TimeUnitSelectComponent } from './select/time-unit-combobox.component';
import { CheckboxCellRendererComponent } from './grid/custom-cells/checkbox/checkbox-cell-renderer.component';
import { WizardStepsComponent } from './wizard-steps/wizard-steps.component';
import { SpinnerCellEditorComponent } from './grid/custom-cells/spinner/spinner-cell-editor.component';
import { TwoListSortableListComponent } from './twolist/two-list-sortable-list.component';
import { SpinnerCellRendererComponent } from './grid/custom-cells/spinner/spinner-cell-renderer.component';
import { InputCellEditorComponent } from './grid/custom-cells/input/input-cell-editor.component';
import { CheckboxCellEditorComponent } from './grid/custom-cells/checkbox/checkbox-cell-editor.component';
import { DecimalInputCellEditorComponent } from './grid/custom-cells/decimal-input/decimal-input-cell-editor.component';
import { AbstractTreeListboxRendererComponent } from './listbox/renderer/abstract-tree-listbox-renderer.component';
import { ContextMenuItemComponent } from './contextmenu/context-menu-item.component';
import { SystelabGenderListBox } from './listbox/gender-listbox.component';
import { NumPadComponent } from './numpad/numpad.component';
import { NumPadDialog } from './numpad/numpad.dialog.component';
import { ComboboxFavouriteRendererComponent } from './combobox/renderer/combobox-favourite-renderer.component';
import { ModulabListBox } from './listbox/listbox.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GridContextMenuComponent } from './grid/contextmenu/grid-context-menu-component';
import { ContextPanelComponent } from './contextpanel/context-panel.component';
import { DateRangepicker } from './date-range-picker/date-range-picker.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MessagePopupViewComponent } from './modal/message-popup/message-popup-view.component';
import { ApplicationSidebarSmallComponent } from './applicationframe/sidebar/app-sidebar-small.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginatorPageComponent } from './paginator/paginator-page.component';
import { CalendarModule } from 'primeng/calendar';
import { Tree, TreeModule } from 'primeng/tree';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ChipButtonComponent } from './chip-button/chip-button.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { StackedBarCellRendererComponent } from './grid/custom-cells/stacked-bar/stacked-bar-cell-renderer.component';
import { DialogHeaderComponent } from './modal/header/dialog-header.component';
import { ChipsComponent } from './chips/chips.component';
import { ContextMenuSubmenuItemComponent } from './contextmenu/context-menu-submenu-item.component';
import { GridHeaderContextMenu } from './grid/contextmenu/grid-header-context-menu.component';
import { SharedModule } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastComponent } from './toast/toast.component';

@NgModule({
	imports:      [
		CommonModule,
		FormsModule,
		SharedModule,
		CalendarModule,
		TreeModule,
		AutoCompleteModule,
		DragDropModule,
		OverlayModule,
		ContextMenuModule,
		AngularSplitModule,
		SystelabTranslateModule,
		AgGridModule],
	declarations: [
		SliderComponent,
		SwitchComponent,
		ContextMenuComponent,
		ContextMenuSubmenuItemComponent,
		ContextPanelComponent,
		MessagePopupViewComponent,
		DataFilterPipe,
		TwoListComponent,
		GridContextMenuComponent,
		GridContextMenuCellRendererComponent,
		GridHeaderContextMenuComponent,
		GridHeaderContextMenu,
		GridColumnOptionsDialog,
		ColorCellRendererComponent,
		ColorComboBox,
		ApplicationFrameComponent,
		ApplicationHeaderComponent,
		ApplicationSidebarLargeComponent,
		ApplicationSidebarSmallComponent,
		ToggleButtonComponent,
		AllYesNoSelect,
		NoYesSelect,
		PeriodSelect,
		TimeUnitSelectComponent,
		GenderSelect,
		TouchspinComponent,
		ModulabSelect,
		Datepicker,
		DatepickerTimeComponent,
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
		CheckboxCellRendererComponent,
		SpinnerCellEditorComponent,
		WizardStepsComponent,
		TwoListSortableListComponent,
		SpinnerCellRendererComponent,
		InputCellEditorComponent,
		DecimalInputCellEditorComponent,
		CheckboxCellEditorComponent,
		AbstractTreeListboxRendererComponent,
		ContextMenuItemComponent,
		NumPadComponent,
		NumPadDialog,
		SystelabGenderListBox,
		ComboboxFavouriteRendererComponent,
		ModulabListBox,
		DateRangepicker,
		PaginatorComponent,
		PaginatorPageComponent,
		ChipButtonComponent,
		AutofocusDirective,
		StackedBarCellRendererComponent,
		ChipsComponent,
		ToastComponent,
	],
	exports:      [
		SliderComponent,
		SwitchComponent,
		ContextMenuComponent,
		ContextPanelComponent,
		TwoListComponent,
		GridHeaderContextMenuComponent,
		GridHeaderContextMenu,
		ColorCellRendererComponent,
		ColorComboBox,
		ApplicationHeaderComponent,
		ApplicationSidebarLargeComponent,
		ApplicationSidebarSmallComponent,
		ApplicationFrameComponent,
		AllYesNoSelect,
		NoYesSelect,
		PeriodSelect,
		TimeUnitSelectComponent,
		GenderSelect,
		Datepicker,
		TouchspinComponent,
		ModulabSelect,
		DatepickerTimeComponent,
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
		Tree,
		SplitComponent,
		SplitAreaDirective,
		ComboBoxInputRendererComponent,
		TooltipDirective,
		CheckboxCellRendererComponent,
		SpinnerCellEditorComponent,
		WizardStepsComponent,
		TwoListSortableListComponent,
		DataFilterPipe,
		SpinnerCellRendererComponent,
		InputCellEditorComponent,
		DecimalInputCellEditorComponent,
		CheckboxCellEditorComponent,
		AbstractTreeListboxRendererComponent,
		ContextMenuItemComponent,
		NumPadComponent,
		NumPadDialog,
		SystelabGenderListBox,
		ComboboxFavouriteRendererComponent,
		ModulabListBox,
		GridContextMenuComponent,
		DateRangepicker,
		PaginatorComponent,
		AgGridAngular,
		ChipButtonComponent,
		AutofocusDirective,
		StackedBarCellRendererComponent,
		ChipsComponent,
		ToastComponent
	],
	providers:    [
		StylesUtilService,
		ColorUtilService,
		LoadingService
	]
})
export class SystelabComponentsModule {
}

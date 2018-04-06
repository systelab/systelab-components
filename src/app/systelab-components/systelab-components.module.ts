import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { PieComponent } from './piechart/pie.component';
import { SwitchComponent } from './switch/switch.component';
import { CalendarModule, ContextMenuModule, SliderModule, Tree, TreeModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/components/common/shared';
import { FormsModule } from '@angular/forms';
import { SystelabModalModule } from './modal/plugin/custom/systelab-modal.module';
import { DialogComponent } from './modal/dialog/dialog.component';
import { ContextMenuComponent } from './contextmenu/context-menu.component';
import { MessagePopupViewComponent } from './modal/message-popup/message-popup-view.component';
import { DOMOverlayRenderer, OverlayRenderer } from 'ngx-modialog';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { DOMOutsideEventPlugin } from 'ngx-modialog/src/providers';
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
import { AngularSplitModule, SplitAreaDirective, SplitComponent, SplitGutterDirective } from 'angular-split';
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
import { ChartComponent } from './chart/chart.component';
import { CalendarFooterComponent } from './calendar/calendar-footer.component';
import { PercentageCircleComponent } from './percentage-circle/percentage-circle.component';
import {LoadingService} from "./loading/loading.service";


@NgModule({
	imports: [
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
		DndModule.forRoot(),
		AgGridModule.withComponents([
			GridContextMenuComponent,
			GridHeaderContextMenuComponent
		]),
	],
	declarations: [
		SliderComponent,
		PieComponent,
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
		PieComponent,
		AllYesNoSelect,
		NoYesSelect,
		PeriodSelect,
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
		ChartComponent,
		PercentageCircleComponent
	],
	exports: [
		SliderComponent,
		PieComponent,
		SwitchComponent,
		ContextMenuComponent,
		TwoListComponent,
		GridHeaderContextMenuComponent,
		ColorCellRendererComponent,
		ColorComboBox,
		ApplicationHeaderComponent,
		ApplicationSidebarComponent,
		ApplicationFrameComponent,
		PieComponent,
		AllYesNoSelect,
		NoYesSelect,
		PeriodSelect,
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
		ChartComponent,
		PercentageCircleComponent,
		AgGridNg2,
		Tree,
		SplitComponent,
		SplitAreaDirective,
		SplitGutterDirective,
		ComboBoxInputRendererComponent,
		TooltipDirective
	],
	entryComponents: [
		MessagePopupViewComponent,
		GridOptionsDialog,
		SearcherDialog,
		CalendarDialog,
		ColorCellRendererComponent,
	],
	providers: [
		StylesUtilService,
		ColorUtilService,
        LoadingService
	]
})
export class SystelabComponentsModule {
	static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders {
		return {
			ngModule: SystelabComponentsModule,
			providers: [
				{ provide: OverlayRenderer, useClass: DOMOverlayRenderer },
				{ provide: EVENT_MANAGER_PLUGINS, useClass: DOMOutsideEventPlugin, multi: true },
				{ provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents || [], multi: true },
				Ng2ComponentFactory,
				{ provide: BaseComponentFactory, useExisting: Ng2ComponentFactory },
				{ provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents, multi: true }
			]
		};
	}
}

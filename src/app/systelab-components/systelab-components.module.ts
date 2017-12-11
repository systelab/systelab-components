import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { PieComponent } from './piechart/pie.component';
import { SwitchComponent } from './switch/switch.component';
import { CalendarModule, ContextMenuModule, SliderModule, Tree, TreeModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/components/common/shared';
import { FormsModule } from '@angular/forms';
import { ModulabModalModule } from './modal/plugin/modulab/modulab.module';
import { DialogComponent } from './modal/dialog/dialog.component';
import { ContextMenuComponent } from './contextmenu/context-menu.component';
import { MessagePopupComponent } from './modal/message-popup/message-popup.component';
import { MessagePopupViewComponent } from './modal/message-popup/message-popup-view.component';
import { DOMOverlayRenderer, ModalModule, OverlayRenderer } from 'ngx-modialog';
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
import { DatepickerTime } from './datepicker/datepiker-time.component';
import { TouchspinComponent } from './spinner/touchspin.component';
import { ModulabSelect } from './select/select.component';
import { ApplicationFrameComponent } from './applicationframe/application-frame.component';
import { MDatepicker } from './datepicker/mdatepiker.component';
import { AngularSplitModule, SplitAreaDirective, SplitComponent, SplitGutterDirective } from 'angular-split';
import { FillerComponent } from './filler/filler.component';
import { SearcherDialog } from './searcher/searcher.dialog.component';
import { SearcherTableComponent } from './searcher/searcher.table.component';
import { CalendarHeaderComponent } from './calendar/calendar-header.component';
import { CalendarTableComponent } from './calendar/calendar-table.component';
import { CalendarDialog } from './calendar/calendar-dialog.component';
import { DecoratedDialogComponent } from './modal/dialog/decorated-dialog.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';


@NgModule({
	imports:         [
		CommonModule,
		FormsModule,
		SharedModule,
		SliderModule,
		CalendarModule,
		TreeModule,
		ModulabModalModule,
		ContextMenuModule,
		AngularSplitModule,
		SystelabTranslateModule,
		DndModule.forRoot(),
		AgGridModule.withComponents([
			GridContextMenuComponent,
			GridHeaderContextMenuComponent
		]),
	],
	declarations:    [
		SliderComponent,
		PieComponent,
		SwitchComponent,
		ContextMenuComponent,
		DecoratedDialogComponent,
		DialogComponent,
		MessagePopupComponent,
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
		PieComponent,
		AllYesNoSelect,
		NoYesSelect,
		PeriodSelect,
		GenderSelect,
		TouchspinComponent,
		ModulabSelect,
		Datepicker,
		MDatepicker,
		DatepickerTime,
		FillerComponent,
		SearcherDialog,
		CalendarDialog,
		SearcherTableComponent,
		CalendarHeaderComponent,
		CalendarTableComponent,
		TabsComponent,
		TabComponent
	],
	exports:         [
		SliderComponent,
		PieComponent,
		SwitchComponent,
		MessagePopupComponent,
		DecoratedDialogComponent,
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
		MDatepicker,
		TouchspinComponent,
		ModulabSelect,
		DatepickerTime,
		FillerComponent,
		SearcherDialog,
		CalendarDialog,
		SearcherTableComponent,
		CalendarHeaderComponent,
		CalendarTableComponent,
		TabsComponent,
		TabComponent,
		AgGridNg2,
		Tree,
		SplitComponent,
		SplitAreaDirective,
		SplitGutterDirective
	],
	entryComponents: [
		MessagePopupViewComponent,
		GridOptionsDialog,
		SearcherDialog,
		CalendarDialog,
		ColorCellRendererComponent
	],
	providers:       [
		StylesUtilService,
		ColorUtilService
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

import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { PieComponent } from './pie-chart/pie.component';
import { SwitchComponent } from './switch/switch.component';
import { ContextMenuModule, SliderModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/components/common/shared';
import { FormsModule } from '@angular/forms';
import { ModulabModalModule } from './modal/plugin/modulab/modulab.module';
import { DialogComponent } from './modal/dialog/dialog.component';
import { AbstractDialogComponent } from './modal/dialog/abstract-dialog.component';
import { ContextMenuComponent } from './contextmenu/context-menu.component';
import { ButtonsDialogComponent } from './modal/dialog/buttons-dialog.component';
import { MessagePopupComponent } from './modal/message-popup/message-popup.component';
import { MessagePopupViewComponent } from './modal/message-popup/message-popup-view.component';
import { DOMOverlayRenderer, ModalModule, OverlayRenderer } from 'angular2-modal';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { DOMOutsideEventPlugin } from 'angular2-modal/src/providers';
import { DataFilterPipe } from './twolist/datafilter.pipe';
import { TwoListComponent } from './twolist/two-list.component';
import { GridContextMenuComponent } from './grid/contextmenu/grid-context-menu.component';
import { GridHeaderContextMenuComponent } from './grid/contextmenu/grid-header-context-menu.component';
import { GridOptionsDialog } from './grid/options/grid-options-dialog.component';
import { AgGridModule, AgGridNg2, BaseComponentFactory, Ng2ComponentFactory } from 'ag-grid-angular';
import { DndModule } from 'ng2-dnd';
import { SystelabTranslateModule } from 'systelab-translate';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SliderModule,
    ModulabModalModule,
    ContextMenuModule,
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
    AbstractDialogComponent,
    DialogComponent,
    ButtonsDialogComponent,
    MessagePopupComponent,
    MessagePopupViewComponent,
    DataFilterPipe,
    TwoListComponent,
    GridContextMenuComponent,
    GridHeaderContextMenuComponent,
    GridOptionsDialog,
  ],
  exports: [
    SliderComponent,
    PieComponent,
    SwitchComponent,
    MessagePopupComponent,
    AbstractDialogComponent,
    ButtonsDialogComponent,
    ContextMenuComponent,
    GridHeaderContextMenuComponent,
    AgGridNg2
  ],
  entryComponents: [
    MessagePopupViewComponent,
    GridOptionsDialog
  ]
})
export class SystelabComponentsModule {
  static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders {
    return {
      ngModule: SystelabComponentsModule,
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

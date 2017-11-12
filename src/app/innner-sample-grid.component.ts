import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractGrid } from './systelab-components/grid/abstract-grid.component';
import { DialogService } from './systelab-components/modal/dialog/dialog.service';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';

export class QCControlValueData {
  constructor(public observationDate: string, public value: string, public errorWestgardOpinion: string) {

  }

}

@Component({
  selector: 'inner-sample-grid',
  template: `
              <div #hidden class="height-hidden"></div>
              <ag-grid-angular id="agGrid" #agGrid
                               style="position:absolute; top:0; bottom:0; left:0; right:0; overflow: hidden;"
                               class="ag-fresh"
                               [gridOptions]="gridOptions"
                               (gridReady)="doGridReady($event)"
                               (gridSizeChanged)="doGridSizeChanged($event)"
                               (cellClicked)="doClick($event)"
                               (columnResized)="doColumnResized($event)"
                               (viewportChanged)="doViewportChanged()"
                               (modelUpdated)="onModelUpdated($event)">
              </ag-grid-angular>`
})
export class InnerSampleGrid extends AbstractGrid<QCControlValueData> implements AfterViewInit {

  public values: QCControlValueData[] = [];

  constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService, protected dialogService: DialogService) {

    super(preferencesService, i18nService, dialogService);
    this.values.push(new QCControlValueData('12/12/2017', '12', '10x'));
    this.values.push(new QCControlValueData('12/12/2017', '12', '10x'));
  }

  public ngAfterViewInit() {
    this.gridOptions.api.setRowData(this.values);
  }

  protected getColumnDefs(): Array<any> {

    // TODO Translate column names
    const columnDefs: Array<any> = [
      {
        colId: 'date', headerName: 'Date', field: 'observationDate', width: 300
      },
      {colId: 'value', headerName: 'Value (%)', field: 'value', width: 120},
      {colId: 'flags', headerName: 'Flags', field: 'errorWestgardOpinion', width: 220}];
    return columnDefs;
  }

}

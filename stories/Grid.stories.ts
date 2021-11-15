import { Meta, Story } from '@storybook/angular/types-6-0';
import GridDocumentation from './docs/grid.mdx';
import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { MessagePopupService } from '../projects/systelab-components/src/lib/modal/message-popup/message-popup.service';
import { I18nService, SystelabTranslateModule } from 'systelab-translate';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { AbstractGrid } from '../projects/systelab-components/src/lib/grid/abstract-grid.component';
import { DialogService } from '../projects/systelab-components/src/lib/modal/dialog/dialog.service';
import { PreferencesService } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';
import { GridContextMenuCellRendererComponent, GridHeaderContextMenuComponent, SystelabComponentsModule } from 'systelab-components';

import $ from 'jquery';


window.jQuery = $;
window.$ = $;

import pako from 'pako';

class ShowcaseData {

	constructor(public colOne: string, public colTwo: string, public colThree: string, public colFour: string) {
	}
}

@Component({
	selector:    'showcase-inner-grid',
	templateUrl: '../projects/systelab-components/src/lib/grid/abstract-grid.component.html'
})
class ShowcaseInnerGridComponent extends AbstractGrid<ShowcaseData> implements OnInit {

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService,
	            protected dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	public ngOnInit() {
		super.ngOnInit();
		this.gridOptions.suppressCellSelection = false;
	}

	protected getColumnDefs(): Array<any> {
		return [
			{colId: 'colOne', headerName: 'Col One', field: 'colOne', width: 300, rowDrag: true, pinned: 'left'},
			{colId: 'colTwo', headerName: 'Col Two', field: 'colTwo', width: 100, rowDrag: true},
			{colId: 'colThree', headerName: 'Col Three', field: 'colThree', width: 100, rowDrag: true},
			{colId: 'colFour', headerName: 'Col Four', field: 'colFour', width: 100, rowDrag: true},
		];
	}

}

@Component({
	selector: "app-grid-story",
	template: `
                <form class="position-relative border rounded slab-remove-top-header" style="width: 600px; height: 200px;">
                    <showcase-inner-grid #grid [rowData]="gridData"
                                         [showChecks]="true" [multipleSelection]="true" (clickRow)="doSelect($event)"></showcase-inner-grid>
                </form>
	          `
})
class GridStory {
	@Input() public gridData: ShowcaseData[] = [];

	constructor(protected messagePopupService: MessagePopupService) {
	}

	public doSelect(showcaseData: ShowcaseData): void {
		console.log(showcaseData);
	}
}

class USMockI18nService {
	public get(key: string) {
		return of(key);
	}

	public instant(key: string) {
		switch (key) {
			case 'COMMON_YES':
				return 'Yes';
			case 'COMMON_NO':
				return 'No';
			default:
				return key;
		}
	}
}

export default {
	title:      'Components/Grid',
	component:  GridStory,
	decorators: [
		moduleMetadata({
			declarations: [GridStory, ShowcaseInnerGridComponent],
			imports:      [CommonModule, OverlayModule, SystelabTranslateModule, SystelabComponentsModule, HttpClientModule, AgGridModule.withComponents([
				GridContextMenuCellRendererComponent,
				GridHeaderContextMenuComponent
			])],
			providers:    [{provide: APP_BASE_HREF, useValue: '/'}, {provide: I18nService, useClass: USMockI18nService}]
		}),
	],
	parameters: {
		docs: {
			page: GridDocumentation,
		}
	},
} as Meta;

const Template: Story<GridStory> = (args: GridStory) => ({
	props:    args,
	template: `
    <div class="container">
    <app-grid-story [gridData]="gridData"></app-grid-story>
    </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
	gridData: [{colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'},
		{colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'},
		{colOne:   'a', colTwo:   'b', colThree: 'c', colFour:  'd'
	}]
};


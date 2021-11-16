import { Meta, Story } from '@storybook/angular/types-6-0';
import GridDocumentation from './docs/grid.mdx';
import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { MessagePopupService } from '../projects/systelab-components/src/lib/modal/message-popup/message-popup.service';
import { SystelabTranslateModule } from 'systelab-translate';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { GridContextMenuCellRendererComponent, GridContextMenuComponent, GridHeaderContextMenu, GridHeaderContextMenuComponent } from 'systelab-components';
import { ShowcaseData, ShowcaseInnerGridComponent } from './components/grid/showcase-inner-grid';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;


@Component({
	selector: "app-grid-story",
	template: `
                <form class="position-relative border rounded slab-remove-top-header" style="height: 200px;">
                    <showcase-inner-grid #grid [rowData]="gridData"
                                         [showChecks]="showChecks" [multipleSelection]="multipleSelection" [columns]="columns" (clickRow)="doSelect($event)"></showcase-inner-grid>
                </form>
	          `
})
class GridStory {
	@Input() public gridData: ShowcaseData[] = [];
	@Input() public showChecks: boolean;
	@Input() public multipleSelection: boolean;
	@Input() public columns: Array<any> = [];

	constructor(protected messagePopupService: MessagePopupService) {
	}

	public doSelect(showcaseData: ShowcaseData): void {
	}
}

export default {
	title:      'Components/Grid',
	component:  GridStory,
	argTypes:{
		doSelect: { action: 'selected' },
		showChecks:{
			table:{
				disable:true
			}
		},
		multipleSelection:{
			table:{
				disable:true
			}
		}
	},
	decorators: [
		moduleMetadata({
			declarations: [GridStory, ShowcaseInnerGridComponent, GridHeaderContextMenu, GridContextMenuComponent],
			imports:      [CommonModule, OverlayModule, SystelabTranslateModule, HttpClientModule, AgGridModule.withComponents([
				GridContextMenuCellRendererComponent,
				GridHeaderContextMenuComponent
			])],
			providers:    [{provide: APP_BASE_HREF, useValue: '/'}]
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
    <div class="container" style="width: 1200px;">
    <app-grid-story [gridData]="gridData" [showChecks]="showChecks" [multipleSelection]="multipleSelection" [columns]="columns"></app-grid-story>
    </div>
    `,
});

export const WithSelection = Template.bind({});
WithSelection.args = {
	gridData:          [{colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'},
		{colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'},
		{
			colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'
		}],
	multipleSelection: true,
	showChecks:        true,
	columns:           [
		{colId: 'colOne', headerName: 'Col One', field: 'colOne', width: 300, rowDrag: true, pinned: 'left'},
		{colId: 'colTwo', headerName: 'Col Two', field: 'colTwo', width: 100, rowDrag: true},
		{colId: 'colThree', headerName: 'Col Three', field: 'colThree', width: 100, rowDrag: true},
		{colId: 'colFour', headerName: 'Col Four', field: 'colFour', width: 100, rowDrag: true},
	]
};

export const ColumnGroup = Template.bind({});
ColumnGroup.args = {
	gridData:          [{colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'},
		{colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'},
		{
			colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'
		}],
	multipleSelection: true,
	showChecks:        true,
	columns:           [
		{colId: 'colOne', headerName: 'Col One', field: 'colOne', width: 300, rowDrag: true, pinned: 'left'},
		{colId: 'colTwo', headerName: 'Col Two', field: 'colTwo', width: 100, rowDrag: true},
		{
			headerName: 'Col Group', width: 200, children: [{colId: 'colThree', headerName: 'Col Three', field: 'colThree', width: 100, rowDrag: true},
				{colId: 'colFour', headerName: 'Col Four', field: 'colFour', width: 100, rowDrag: true}]
		},
		{colId: 'colFour', headerName: 'Col Four', field: 'colFour', width: 100, rowDrag: true},
	]
};

export const WithOutSelection = Template.bind({});
WithOutSelection.args = {
	gridData:          [{colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'},
		{colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'},
		{
			colOne: 'a', colTwo: 'b', colThree: 'c', colFour: 'd'
		}],
	multipleSelection: false,
	showChecks:        false,
	columns:           [
		{colId: 'colOne', headerName: 'Col One', field: 'colOne', width: 300, rowDrag: true, pinned: 'left'},
		{colId: 'colTwo', headerName: 'Col Two', field: 'colTwo', width: 100, rowDrag: true},
		{colId: 'colThree', headerName: 'Col Three', field: 'colThree', width: 100, rowDrag: true},
		{colId: 'colFour', headerName: 'Col Four', field: 'colFour', width: 100, rowDrag: true},
	]
};


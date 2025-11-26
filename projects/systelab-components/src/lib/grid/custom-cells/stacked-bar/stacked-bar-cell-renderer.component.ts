import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

export interface IStackedBar {
	id: string | number;
	value: number;
	color?: string;
	colorClass?: string;
	tooltipText?: string;
}

@Component({
    selector: 'systelab-stacked-bar-cell',
    templateUrl: 'stacked-bar-cell-renderer.component.html',
    styleUrls: ['stacked-bar-cell-renderer.component.scss'],
    standalone: false
})
export class StackedBarCellRendererComponent implements AgRendererComponent {
	public params: any;
	public barClick: (rowData: any, id: string | number) => void;
	public total: number;
	public width: number;
	public stackedBars: Array<IStackedBar> = [];

	public agInit(params: any): void {
		this.params = params;
		if (params.data) {
			this.initModel();
			this.total = this.getTotal();
			this.width = this.getWidth();
			this.barClick = (<any>this.params).barClick;
		}
	}

	public refresh(params: any): boolean {
		return true;
	}

	public doBarClick(event: MouseEvent, stackedBar: IStackedBar): void {
		if (this.barClick) {
			event.stopPropagation();
			this.barClick(this.params.data, stackedBar.id);
		}
	}

	private initModel(): void {
		this.stackedBars = (<any>this.params).value;
	}

	private getMaxValue(): number {
		return this.params.colDef.getMaxValue();
	}

	private getTotal(): number {
		return this.stackedBars
			.map(bar => bar.value)
			.reduce((total, curr) => total + curr, 0);
	}

	private getWidth(): number {
		return this.total / this.getMaxValue();
	}

}

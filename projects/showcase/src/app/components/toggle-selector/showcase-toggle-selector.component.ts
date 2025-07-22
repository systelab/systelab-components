import { Component, OnInit } from '@angular/core';
import { ToggleSelectorOption } from '../../../../../systelab-components/src/lib/toggle-selector/toggle-selector.component';

@Component({
    selector: 'showcase-toggle-selector',
    templateUrl: './showcase-toggle-selector.component.html',
    standalone: false
})
export class ShowcaseToggleSelectorComponent implements OnInit {

	public options: Array<ToggleSelectorOption> = [];
	public currentOption = '1';


	public ngOnInit(): void {
		this.options.push({ id: '1', name: 'All' });
		this.options.push({ id: '2', name: 'Only A' });
		this.options.push({ id: '3', name: 'Only B' });
		this.currentOption = '1';
	}

	public doSomething(option: ToggleSelectorOption): void {
		this.currentOption = option.id;
	}
}

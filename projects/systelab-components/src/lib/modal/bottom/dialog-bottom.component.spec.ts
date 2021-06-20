import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';

import { DialogBottomComponent } from './dialog-bottom.component';

@Component({
	selector: 'systelab-dialog-bottom-test',
	template: `
                <div>
                    <systelab-dialog-bottom></systelab-dialog-bottom>
                </div>
	          `,
	styles:   []
})
export class DialogBottomTestComponent {

}

describe('Systelab Dialog Bottom', () => {
	let fixture: ComponentFixture<DialogBottomTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [DialogBottomComponent, DialogBottomTestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DialogBottomTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});
});


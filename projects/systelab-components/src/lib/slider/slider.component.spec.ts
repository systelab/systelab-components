import { Component, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from './slider.component';

@Component({
    template: `
                <div>
                    <systelab-slider [min]="min" [max]="max" [step]="step" [(value)]="value"></systelab-slider>
                    <label class="label-value">{{value}}</label>
                </div>
	          `,
    standalone: false
})
export class SliderTestComponent {
	public min = 0;
	public max = 100;
	public step = 1;
	public value = 30;
}

describe('Systelab Slider', () => {
	let fixture: ComponentFixture<SliderTestComponent>;
	let component: SliderTestComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
    		declarations: [SliderComponent, SliderTestComponent],
			providers: [provideZoneChangeDetection()],
		});
		fixture = TestBed.createComponent(SliderTestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should have an initial value', () => {
		expect(queryLabelElement().textContent).toContain(30);
	});

	it('should have the changed value if there is a change', () => {
		component.value = 90;
		fixture.detectChanges();

		expect(queryLabelElement().textContent).toContain(90);
	});

	function queryLabelElement(): HTMLElement {
		return fixture.debugElement.nativeElement.querySelector('.label-value');
	}
});

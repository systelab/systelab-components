import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToggleSelectorOption } from './toggle-selector.component';
import { ToggleSelectorComponent } from 'systelab-components';

@Component({
    selector: 'systelab-toggle-selector-test',
    template: `
                <div>
                    <systelab-toggle-selector [options]="options" [currentOption]="currentOption"
											  (select)="doSomething($event)"></systelab-toggle-selector>
                    <label class="label-value">{{currentOption}}</label>
                </div>
	          `,
    styles: [],
    standalone: false
})
export class ToggleSelectorTestComponent {
	public options: Array<ToggleSelectorOption> = [{ id: '1', name: 'A' },{ id: '2', name: 'B' },{ id: '3', name: 'C' }];
	public currentOption = '1';

	public doSomething(option: ToggleSelectorOption): void {
		this.currentOption = option.id;
	}
}

const checkHasValue = (fixture: ComponentFixture<ToggleSelectorTestComponent>, value: string) => {
	const label = fixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML)
		.toContain(value);
};


const clickOption = (fixture: ComponentFixture<ToggleSelectorTestComponent>, id: string) => {
	const button = fixture.debugElement.query(By.css('#id'+id)).nativeElement;
	button.click();
	fixture.detectChanges();
};

describe('Systelab Toggle Selector', () => {
	let fixture: ComponentFixture<ToggleSelectorTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [ToggleSelectorComponent, ToggleSelectorTestComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DragDropModule,
        OverlayModule,
        TreeModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ToggleSelectorTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should have an initial value', () => {
		checkHasValue(fixture, '1');
	});

	it('should change value if is clicked', () => {
		clickOption(fixture,'2');
		checkHasValue(fixture, '2');
	});

	it('should change value if is clicked', () => {
		clickOption(fixture,'3');
		checkHasValue(fixture, '3');
	});

    it('should call onChange, emit select and currentOptionChange when selectOption is called', () => {
        const toggleCmp = fixture.debugElement.query(By.directive(ToggleSelectorComponent)).componentInstance as ToggleSelectorComponent;
        const option = { id: '2', name: 'B' };

        // Spy on all emitters and onChange callback
        spyOn(toggleCmp.select, 'emit');
        spyOn(toggleCmp.currentOptionChange, 'emit');
        toggleCmp['onChange'] = jasmine.createSpy('onChange');

        // Call the method
        toggleCmp.selectOption(option);

        // Should emit select event with the option object
        expect(toggleCmp.select.emit).toHaveBeenCalledWith(option);

        // Should emit currentOptionChange with the option id
        expect(toggleCmp.currentOptionChange.emit).toHaveBeenCalledWith('2');

        // Should notify Angular forms of the change
        expect(toggleCmp['onChange']).toHaveBeenCalledWith('2');

        // Internal currentOption should be updated
        expect(toggleCmp.currentOption).toBe('2');
    });

    it('should call base writeValue and emit currentOptionChange when writeValue is called', () => {
        const toggleCmp = fixture.debugElement.query(By.directive(ToggleSelectorComponent)).componentInstance as ToggleSelectorComponent;

        // Spy on the base class method
        const basePrototype = Object.getPrototypeOf(toggleCmp);
        const writeSpy = spyOn(basePrototype, 'writeValue').and.callThrough();

        // Spy on emitter
        spyOn(toggleCmp.currentOptionChange, 'emit');

        // Call the method
        toggleCmp.writeValue('3');

        // Should call base writeValue
        expect(writeSpy).toHaveBeenCalledWith('3');

        // Should emit the change
        expect(toggleCmp.currentOptionChange.emit).toHaveBeenCalledWith('3');

        // Should update the internal state
        expect(toggleCmp.currentOption).toBe('3');
    });

    it('should call base setDisabledState when setDisabledState is called', () => {
        const toggleCmp = fixture.debugElement.query(By.directive(ToggleSelectorComponent)).componentInstance as ToggleSelectorComponent;

        // Spy on the base class method
        const basePrototype = Object.getPrototypeOf(toggleCmp);
        const disabledSpy = spyOn(basePrototype, 'setDisabledState').and.callThrough();

        // Call the method
        toggleCmp.setDisabledState(true);

        // Should call the base implementation
        expect(disabledSpy).toHaveBeenCalledWith(true);
    });

});


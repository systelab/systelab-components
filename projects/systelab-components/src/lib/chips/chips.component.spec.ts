import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ChipsComponent } from './chips.component';
import { AutoComplete, AutoCompleteModule } from 'primeng/autocomplete';

@Component({
    template: `
                <systelab-chips [texts]="texts" [disabled]="disabled" [readonly]="readonly"></systelab-chips>`,
    standalone: false
})
export class ChipsTestComponent {

	public readonly = false;
	public disabled = false;
	public texts: Array<string> = [
		'New York',
		'Rome',
		'London',
		'Barcelona',
		'París',
		'Berlín',
		'Oslo',
		'Atenas',
		'Lisboa',
		'Amsterdam',
		'St Petersburgo'
	];
}

const setArrayValue = (fixture: ComponentFixture<ChipsTestComponent>, values: Array<string>) => {
	fixture.componentInstance.texts = values;
	fixture.detectChanges();
};

describe('Systelab Chips', () => {

	let fixture: ComponentFixture<ChipsTestComponent>;
	let chips: ChipsComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports:      [
				NoopAnimationsModule,
				FormsModule,
				BrowserDynamicTestingModule,
				ButtonModule,
				AutoCompleteModule,
			],
			declarations: [
				ChipsComponent,
				ChipsTestComponent,
			]
		});

		fixture = TestBed.createComponent(ChipsTestComponent);
		chips = fixture.debugElement.children[0].componentInstance;
	});

	it('should be disabled', async () => {
		setArrayValue(fixture, fixture.componentInstance.texts);
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		await fixture.whenStable();
		const inputDefaultEl = fixture.debugElement.query(By.css('input')).nativeElement;
		expect(inputDefaultEl.disabled).toBeTrue();
		const inputMultipleEl = fixture.debugElement.query(By.css('ul input'));
		expect(inputMultipleEl.nativeElement.disabled).toBeTrue();
		const multiContainer = fixture.debugElement.query(By.css('p-autocomplete'));
		console.log(multiContainer);
		expect(multiContainer.nativeElement.children[0].className).toContain('p-disabled');
	});

	it('should be readonly', () => {
		setArrayValue(fixture, fixture.componentInstance.texts);
		fixture.componentInstance.readonly = true;
		fixture.detectChanges();

		const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
		expect(inputEl.readOnly)
			.toEqual(true);
	});

	it('should be multiple', () => {
		setArrayValue(fixture, fixture.componentInstance.texts);
		const autoComplete = fixture.debugElement.query(By.css('p-autoComplete')).componentInstance;
		expect(autoComplete.multiple).toBeTrue();
		expect(fixture.componentInstance.texts.length).toBeGreaterThan(1);
	});

	it('filtered list is correct', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		const inputEl = fixture.debugElement.query(By.css('input'));
		inputEl.nativeElement.dispatchEvent(new Event('focus'));
		inputEl.nativeElement.click();
		fixture.detectChanges();

		inputEl.nativeElement.value = 'b';
		inputEl.nativeElement.dispatchEvent(new Event('keydown'));
		inputEl.nativeElement.dispatchEvent(new Event('input'));
		inputEl.nativeElement.dispatchEvent(new Event('keyup'));
		tick(300);
		fixture.detectChanges();

		const listItems = fixture.debugElement.queryAll(By.css('li > span'));

		expect(listItems[0].nativeElement.innerText)
			.toEqual('Barcelona');
		expect(listItems[1].nativeElement.innerText)
			.toEqual('Berlín');
		expect(listItems[2].nativeElement.innerText)
			.toEqual('Lisboa');
		expect(listItems[3].nativeElement.innerText)
			.toEqual('St Petersburgo');
		
		flush();
	}));

	it('should select item', async () => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
		inputEl.dispatchEvent(new Event('focus'));
		inputEl.dispatchEvent(new Event('click'));
		fixture.detectChanges();
		await fixture.whenStable();

		// Simulamos el valor de entrada
		inputEl.value = 'New';
		inputEl.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		await fixture.whenStable();

		// Esperamos que la lista se haya filtrado
		const listItems = fixture.debugElement.queryAll(By.css('li'));
		const firstItemEl = listItems[0].nativeElement; // Seleccionamos el primer ítem
		firstItemEl.click(); // Simulamos el click en el primer ítem
		fixture.detectChanges();

		await fixture.whenStable();

		// Verificamos que el valor de autocompletado esté correctamente seleccionado
		expect(fixture.componentInstance.texts[0]).toEqual('New York');
		expect(fixture.componentInstance.texts.length).toEqual(11);
	});

	it('should handle enter key press', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		// Simulate user input
		const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
		inputEl.value = 'TestValue';

		// Create a KeyboardEvent
		const event = new KeyboardEvent('keydown', { key: 'Enter' });

		// Manually assign the target property
		Object.defineProperty(event, 'target', { value: inputEl, writable: true });

		// Explicitly call the onKeyEnter method
		chips.onKeyEnter(event);
		fixture.detectChanges();

		// Verify that the value was added to the filter
		expect(chips.filter).toContain('TestValue');

		// Verify that the input was cleared
		expect(inputEl.value).toEqual('');

		// Verify that the filtered event was emitted
		const emitSpy = spyOn(chips.filtered, 'emit');
		chips.onKeyEnter(event);
		expect(emitSpy).toHaveBeenCalledWith(chips.filter);

		// Verify that the hide() method was called
		const hideSpy = spyOn(chips.autoComplete, 'hide');
		chips.onKeyEnter(event);
		expect(hideSpy).toHaveBeenCalled();
	}));
});

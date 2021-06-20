import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ChipsComponent } from './chips.component';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
	template: `
                <systelab-chips [texts]="texts" [disabled]="disabled" [readonly]="readonly"></systelab-chips>`
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

describe('Systelab Chips', () => {

	let fixture: ComponentFixture<ChipsTestComponent>;
	let chips: ChipsComponent;
	let testComponent: ChipsTestComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({

			imports:      [
				NoopAnimationsModule,
				FormsModule,
				BrowserDynamicTestingModule,
				ButtonModule
			],
			declarations: [
				AutoComplete,
				ChipsComponent,
				ChipsTestComponent
			]
		});

		fixture = TestBed.createComponent(ChipsTestComponent);
		chips = fixture.debugElement.children[0].componentInstance;
		testComponent = fixture.debugElement.componentInstance;
	});

	it('should be disabled', () => {
		setArrayValue(fixture, fixture.componentInstance.texts);
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();

		const inputDefaultEl = fixture.debugElement.query(By.css('input')).nativeElement;
		expect(inputDefaultEl.disabled)
			.toEqual(true);
		fixture.detectChanges();
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();

		const inputMultipleEl = fixture.debugElement.query(By.css('ul'))
			.query(By.css('input'));
		const multiContainer = fixture.debugElement.query(By.css('ul'));
		expect(inputMultipleEl.properties.disabled)
			.toEqual(true);
		expect(multiContainer.nativeElement.className)
			.toContain('p-disabled');
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
		const spanEl = fixture.debugElement.query(By.css('span'));
		const listEl = fixture.debugElement.query(By.css('ul'));
		expect(spanEl.nativeElement.className)
			.toContain('p-autocomplete-multiple');
		expect(listEl.nativeElement.className)
			.toContain('p-autocomplete-multiple-container');
	});

	it('should select item', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		const inputEl = fixture.debugElement.query(By.css('input'));
		inputEl.nativeElement.dispatchEvent(new Event('focus'));
		inputEl.nativeElement.click();
		fixture.detectChanges();

		const selectItemSpy = spyOn(chips.autoComplete, 'selectItem')
			.and
			.callThrough();
		inputEl.nativeElement.value = 'New';
		inputEl.nativeElement.dispatchEvent(new Event('keydown'));
		inputEl.nativeElement.dispatchEvent(new Event('input'));
		inputEl.nativeElement.dispatchEvent(new Event('keyup'));
		tick(300);
		fixture.detectChanges();

		const firstItemEl = fixture.debugElement.queryAll(By.css('li'))[1].nativeElement;
		firstItemEl.click();
		fixture.detectChanges();

		expect(chips.autoComplete.value[0])
			.toEqual('New York');
		expect(chips.autoComplete.value.length)
			.toEqual(1);
		expect(selectItemSpy)
			.toHaveBeenCalled();
	}));

	xit('should select new item', fakeAsync(() => {
		setArrayValue(fixture, fixture.componentInstance.texts);

		const inputEl = fixture.debugElement.query(By.css('input'));
		inputEl.nativeElement.dispatchEvent(new Event('focus'));
		inputEl.nativeElement.click();
		fixture.detectChanges();
		chips.autoComplete.value = ['NewItem'];
		const event = {
			'which': 13, preventDefault() {
			}
		};
		chips.autoComplete.onKeydown(event);
		fixture.detectChanges();

		expect(chips.autoComplete.value[0])
			.toEqual(fixture.debugElement.nativeElement.querySelectorAll('.p-autocomplete-token-label')[0].textContent);
		expect(chips.autoComplete.value.length)
			.toEqual(fixture.debugElement.nativeElement.querySelectorAll('.p-autocomplete-token-label').length);
	}));

});

function setArrayValue(fixture: ComponentFixture<ChipsTestComponent>, array: Array<string>) {
	fixture.componentInstance.texts = array;
	fixture.detectChanges();
}

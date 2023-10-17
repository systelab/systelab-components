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
				AutoComplete,
				ChipsComponent,
				ChipsTestComponent,
			]
		});

		fixture = TestBed.createComponent(ChipsTestComponent);
		chips = fixture.debugElement.children[0].componentInstance;
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

		flush();
	}));
});

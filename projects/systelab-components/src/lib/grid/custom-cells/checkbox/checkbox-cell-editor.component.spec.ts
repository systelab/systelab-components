import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CheckboxCellEditorComponent } from './checkbox-cell-editor.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CheckboxCellEditorComponent', () => {
	let fixture: ComponentFixture<CheckboxCellEditorComponent>;
	let component: CheckboxCellEditorComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CheckboxCellEditorComponent],
			imports: [],
			providers: [],
			schemas: [NO_ERRORS_SCHEMA]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CheckboxCellEditorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should toggle checkbox value if singleClickEdit is enabled', fakeAsync(() => {
		const params = {
			stopEditing: jasmine.createSpy('stopEditing'),
			column: { colDef: { singleClickEdit: true } },
			node: { data: {} },
			value: true
		};

		component.agInit(params);
		component.ngAfterViewInit();

		tick();
		expect(component.isCheckboxActive).toBe(false);
		expect(params.stopEditing).toHaveBeenCalled();
	}));

	it('should not toggle checkbox value if singleClickEdit is enabled', fakeAsync(() => {
		const params = {
			stopEditing: jasmine.createSpy('stopEditing'),
			column: { colDef: { singleClickEdit: false } },
			node: { data: {} },
			value: true
		};

		component.agInit(params);
		component.ngAfterViewInit();

		tick();
		expect(component.isCheckboxActive).toBe(true);
		expect(params.stopEditing).not.toHaveBeenCalled();
	}));
});
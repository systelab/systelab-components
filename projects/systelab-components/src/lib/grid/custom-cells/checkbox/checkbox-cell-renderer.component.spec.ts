import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxCellRendererComponent } from './checkbox-cell-renderer.component';
import { provideZoneChangeDetection } from '@angular/core';

describe('CheckboxCellRendererComponent', () => {
    let component: CheckboxCellRendererComponent;
    let fixture: ComponentFixture<CheckboxCellRendererComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CheckboxCellRendererComponent],
            providers: [ provideZoneChangeDetection() ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckboxCellRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize with parameters from agInit', () => {
        const params = {
            data: { field1: true, field2: 'value' },
            colDef: {
                field: 'field1',
                elementID: 'field2'
            },
            showDisabled: true,
        };

        component.agInit(params);
        expect(component.id).toBe('value');
        expect(component.isCheckboxActive).toBe(true);
        expect(component.hideCheckbox).toBe(false);
        expect(component.showDisabled).toBe(true);
    });

    it('should refresh and update isCheckboxActive correctly', () => {
        const params = { value: false };
        component.isCheckboxActive = true;
        const refreshResult = component.refresh(params);

        expect(refreshResult).toBe(true);
        expect(component.isCheckboxActive).toBe(false);
    });

    it('should handle agInit when no data is passed', () => {
        const params = {
            data: null,
            colDef: { field: 'field1', elementID: 'field2' },
            showDisabled: false,
        };

        component.agInit(params);
        expect(component.id).toBeUndefined();
        expect(component.isCheckboxActive).toBeUndefined();
        expect(component.hideCheckbox).toBe(false);
        expect(component.showDisabled).toBe(false);
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PositiveIntegerInputCellEditorComponent } from './positive-integer-input-cell-editor.component';
import { provideZoneChangeDetection } from '@angular/core';

describe('PositiveIntegerInputCellEditorComponent', () => {
    let component: PositiveIntegerInputCellEditorComponent;
    let fixture: ComponentFixture<PositiveIntegerInputCellEditorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PositiveIntegerInputCellEditorComponent],
            providers: [ provideZoneChangeDetection() ],
        });

        fixture = TestBed.createComponent(PositiveIntegerInputCellEditorComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize value and isEditable from params', () => {
        const params = { value: '42' };
        component.agInit(params);

        expect(component.params).toBe(params);
        expect(component.value).toBe(params.value);
    });

    it('should return the value in getValue()', () => {
        component.value = '123';
        const result = component.getValue();

        expect(result).toBe('123');
    });

    it('should allow only digits and certain keys in onKeyDown()', () => {
        const event1 = new KeyboardEvent('keydown', { key: '1' });
        const event2 = new KeyboardEvent('keydown', { key: 'A' });
        const event3 = new KeyboardEvent('keydown', { key: 'Enter' });

        spyOn(event1, 'preventDefault');
        spyOn(event2, 'preventDefault');
        spyOn(event3, 'preventDefault');

        component.onKeyDown(event1);
        component.onKeyDown(event2);
        component.onKeyDown(event3);

        expect(event1.preventDefault).not.toHaveBeenCalled();
        expect(event2.preventDefault).toHaveBeenCalled();
        expect(event3.preventDefault).not.toHaveBeenCalled();
    });

    it ('refresh should return true', () => {
        expect(component.refresh({})).toBeTrue();
    });
});

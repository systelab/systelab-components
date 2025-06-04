import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulabSelect } from './select.component';
import { ChangeDetectorRef, Renderer2 } from '@angular/core';
import { PreferencesService } from 'systelab-preferences';

describe('ModulabSelect', () => {
    let component: ModulabSelect;
    let fixture: ComponentFixture<ModulabSelect>;
    let mockRenderer: Renderer2;
    let mockChangeDetectorRef: ChangeDetectorRef;
    let mockPreferencesService: PreferencesService;

    beforeEach(async () => {
        mockRenderer = jasmine.createSpyObj('Renderer2', ['setAttribute', 'removeAttribute']);
        mockChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);
        mockPreferencesService = jasmine.createSpyObj('PreferencesService', ['get', 'set']);

        await TestBed.configureTestingModule({
            declarations: [ModulabSelect],
            providers: [
                { provide: Renderer2, useValue: mockRenderer },
                { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef },
                { provide: PreferencesService, useValue: mockPreferencesService }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModulabSelect);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should return a new instance of Element', () => {
        const instance = component.getInstance();
        expect(instance).toEqual(jasmine.any(Object));
        expect(instance.id).toBe('');
        expect(instance.description).toBe('');
    });

    it('should return the correct description field', () => {
        expect(component.getDescriptionField()).toBe('description');
    });

    it('should return the correct code field', () => {
        expect(component.getCodeField()).toBe('code');
    });

    it('should return the correct id field', () => {
        expect(component.getIdField()).toBe('id');
    });
});
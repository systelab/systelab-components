import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, provideZoneChangeDetection } from '@angular/core';
import { I18nService } from 'systelab-translate';
import { SystelabGenderListBox } from './gender-listbox.component';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

describe('SystelabGenderListBox', () => {
    let component: SystelabGenderListBox;
    let fixture: ComponentFixture<SystelabGenderListBox>;
    let i18nServiceMock: jasmine.SpyObj<I18nService>;

    beforeEach(async () => {
        const i18nServiceSpy = jasmine.createSpyObj('I18nService', ['instant']);
        ModuleRegistry.registerModules([AllCommunityModule]);
        await TestBed.configureTestingModule({
            declarations: [SystelabGenderListBox],
            providers: [
                { provide: I18nService, useValue: i18nServiceSpy },
                provideZoneChangeDetection(),
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        i18nServiceMock = TestBed.inject(I18nService) as jasmine.SpyObj<I18nService>;
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SystelabGenderListBox);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call ngAfterViewInit with showAll true', () => {
        component.showAll = true;
        i18nServiceMock.instant.and.returnValue('Test');

        component.ngOnInit();

        expect(component.values.length).toBe(4);
        expect(component.values[0].id).toBe('A');
        expect(component.values[1].id).toBe('U');
        expect(component.values[2].id).toBe('F');
        expect(component.values[3].id).toBe('M');
    });

    it('should call ngOnInit with showAll false', () => {
        // Arrange
        component.showAll = false;
        i18nServiceMock.instant.and.returnValue('Test');

        component.ngOnInit();

        expect(component.values.length).toBe(3);
        expect(component.values[0].id).toBe('U');
        expect(component.values[1].id).toBe('F');
        expect(component.values[2].id).toBe('M');
    });

    it('should return the correct id field', () => {
        const idField = component.getIdField();
        expect(idField).toBe('id');
    });

    it('should return the correct description field', () => {
        const descriptionField = component.getDescriptionField();
        expect(descriptionField).toBe('description');
    });

    it('should return a new instance of Element', () => {
        const newInstance = component.getInstance();
        expect(newInstance).toBeTruthy();
    });

    it('should return the correct description for gender', () => {
        // Arrange
        i18nServiceMock.instant.withArgs('COMMON_UNKNOWN').and.returnValue('Unknown');
        i18nServiceMock.instant.withArgs('COMMON_MALE').and.returnValue('Male');
        i18nServiceMock.instant.withArgs('COMMON_FEMALE').and.returnValue('Female');

        // Act & Assert
        expect(component.getDescriptionForGender('U')).toBe('Unknown');
        expect(component.getDescriptionForGender('M')).toBe('Male');
        expect(component.getDescriptionForGender('F')).toBe('Female');
        expect(component.getDescriptionForGender('X')).toBe('Unknown');
    });
});

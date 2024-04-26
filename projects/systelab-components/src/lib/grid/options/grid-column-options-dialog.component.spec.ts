import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {I18nService, SystelabTranslateModule} from 'systelab-translate';
import { DialogRef } from '../../modal/dialog/dialog-ref';
import { GridColumnOptionsDialog } from './grid-column-options-dialog.component';
import { GridColumnOptionsDialogParameters } from './grid-column-options-dialog.component';
import { TwoListItem } from '../../twolist/two-list-utilities';
import { GridColumnsOptions } from './grid-column-options';
import {HttpClientModule} from "@angular/common/http";

describe('GridColumnOptionsDialog', () => {
    let component: GridColumnOptionsDialog;
    let fixture: ComponentFixture<GridColumnOptionsDialog>;
    const gridColumnOptionsDialogParameters = new GridColumnOptionsDialogParameters();
    gridColumnOptionsDialogParameters.columnOptions = new GridColumnsOptions();
    gridColumnOptionsDialogParameters.canHideAllColumns = true;

    const dialogMock = {
        context: gridColumnOptionsDialogParameters,
        close: jasmine.createSpy('close')
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GridColumnOptionsDialog],
            imports: [
                HttpClientModule,
                SystelabTranslateModule
            ],
            providers: [
                { provide: DialogRef, useValue: dialogMock },
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GridColumnOptionsDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize correctly', () => {
        expect(component.availableColumns).toEqual([]);
        expect(component.visibleColumns).toEqual([]);
        expect(component.initialAvailableColumns).toEqual([]);
        expect(component['canHideAllColumns']).toBe(true);
    });

    it('should check if submit is disabled', () => {
        component.visibleColumns = [new TwoListItem('name', 'colId', false, true)];
        expect(component.isSubmitDisabled()).toBe(false);
    });

    it('should close on submit', () => {
        component.submit();
        expect(dialogMock.close).toHaveBeenCalled();
    });

    it('should close', () => {
        component.close();

        expect(dialogMock.close).toHaveBeenCalled();
    });

    it('should get tab title', () => {
        const i18nServiceMock = TestBed.inject(I18nService);
        spyOn(i18nServiceMock, 'instant').and.returnValue('Test Title');

        const result = component.getTabTitle('TEST_CODE');

        expect(result).toBe('Test Title');
        expect(i18nServiceMock.instant).toHaveBeenCalledWith('TEST_CODE');
    });
});

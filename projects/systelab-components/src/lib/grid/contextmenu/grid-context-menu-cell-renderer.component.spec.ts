import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GridContextMenuCellRendererComponent } from "./grid-context-menu-cell-renderer.component"
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgGridModule } from "ag-grid-angular";
import { ButtonModule } from "primeng/button";
import { OverlayModule } from "primeng/overlay";
import { SystelabPreferencesModule } from "systelab-preferences";
import { SystelabTranslateModule } from "systelab-translate";
import { Component, provideZoneChangeDetection } from "@angular/core";
import { AbstractGrid } from "systelab-components";


interface TestData {
    id: number;
    row: number;
}

@Component({
    selector: 'systelab-grid-context-menu-cell-renderer-mock',
    templateUrl: 'grid-context-menu-cell-renderer.component.html',
    standalone: false
})
class GridContextMenuCellRendererMock extends GridContextMenuCellRendererComponent<TestData> {
    constructor() {
        super()
    }

    public agInit(params: any): void {
        super.agInit(params)
    }

    public dotsClicked(event: MouseEvent): void {
        super.dotsClicked(event)
    }

    public refresh(params: any): boolean {
        return super.refresh(params)
    }

}

describe('GridContextMenuCellRendererComponent', () => {
    let component: GridContextMenuCellRendererMock;
    let fixture: ComponentFixture<GridContextMenuCellRendererMock>

    const containerMock = {
        removeSelectionOnOpenContextMenu: false,
        getSelectedRows: () => [{id: 16, row: 0}],
        dotsClicked: (rowIndex, selectedRows, event) => {
        },
        gridApi: {
            getRowNode: (id: string | number) => ({
                setSelected: (isSelected: boolean) => ({})
            }),
            deselectAll: () => {
            },
            selectIndex: (rowIndex, tryMulti, supressEvents) => {
            },
            getDisplayedRowAtIndex: (index: number) => {
 return {
                setSelected: (select: boolean) => true
            } as any
}
        }
    } as unknown as AbstractGrid<TestData>

    const paramsMock = {
        context: {
            componentParent: containerMock,
        },
        rowIndex: 2,
        data: {id: 33, row: 3} as TestData
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GridContextMenuCellRendererMock],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                OverlayModule,
                ButtonModule,
                SystelabTranslateModule,
                SystelabPreferencesModule,
                AgGridModule,
            ],
            providers: [
                provideHttpClient(withInterceptorsFromDi()),
                provideZoneChangeDetection(),
            ],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(GridContextMenuCellRendererMock)
        component = fixture.componentInstance;
        fixture.detectChanges()
    })

    it('Should create', () => {

        expect(fixture).toBeTruthy()
    })

    describe('agInit', () => {
        it('Should set the properties container, rowIndex & data to the values passed on the params', () => {

            component.agInit(paramsMock);

            expect(component['container']).toBe(paramsMock.context.componentParent)
            expect(component.rowIndex).toBe(paramsMock.rowIndex)
            expect(component.data).toEqual(paramsMock.data)
        })
    })

    describe('dotsClicked', () => {
        beforeEach(() => {
            spyOn(containerMock, 'dotsClicked');
        })
        const eventMock = {
            ctrlKey: true,
        } as unknown as MouseEvent;

        it('should call setSelected(false) if removeSelectionOnOpenContextMenu is true and ctrlKey is true', () => {
            component.agInit(paramsMock);
            const event = { ctrlKey: true } as MouseEvent;
            component.dotsClicked(event);
            expect(component['container'].dotsClicked).toHaveBeenCalledWith(component.rowIndex, jasmine.anything(), jasmine.anything());
        });

        it('Should call dotsClicked if event.ctrlKey is true & removeSelectionOnOpenContextMenu is false', () => {
            component.agInit(paramsMock);
            component.dotsClicked(eventMock);

            expect(component['container'].dotsClicked)
                .toHaveBeenCalled()
        })

        it('Should call gridApi.deselectAll if removeSelectionOnOpenContextMenu is true & call gridApi.selectIndex if ctrlKey is true', () => {
            spyOn(containerMock.gridApi, 'deselectAll');
            spyOn(containerMock.gridApi as any, 'selectIndex');

            component.agInit(paramsMock);

            containerMock.removeSelectionOnOpenContextMenu = true;
            (eventMock as any).ctrlKey = true;
            component.dotsClicked(eventMock);

            expect(component['container'].dotsClicked).toHaveBeenCalled()
            expect(containerMock.gridApi.deselectAll).toHaveBeenCalled()
        })
    })

    it('should deselect all and specific row when removeSelectionOnOpenContextMenu is true and Ctrl key is pressed', () => {
        const mockRowNode = { setSelected: jasmine.createSpy('setSelected') };
        const mockContainer = {
            popupmenu: { closeDropDown: jasmine.createSpy('closeDropDown') },
            removeSelectionOnOpenContextMenu: true, // Activamos la bandera de deselección
            gridApi: {
                deselectAll: jasmine.createSpy('deselectAll'),
                getDisplayedRowAtIndex: jasmine.createSpy('getDisplayedRowAtIndex').and.returnValue(mockRowNode)
            },
            dotsClicked: jasmine.createSpy('dotsClicked')
        };

        component.data = { id: 123, row: 2 };
        (component as any).container = mockContainer;
        component.rowIndex = 10;

        const mouseEvent = { ctrlKey: true } as MouseEvent;
        component.dotsClicked(mouseEvent);

        expect(mockContainer.popupmenu.closeDropDown).toHaveBeenCalled();
        expect(mockContainer.gridApi.deselectAll).toHaveBeenCalled();
        expect(mockContainer.gridApi.getDisplayedRowAtIndex).toHaveBeenCalledWith(10);
        expect(mockRowNode.setSelected).toHaveBeenCalledWith(false);
        expect(mockContainer.dotsClicked).toHaveBeenCalledWith(10, component.data, mouseEvent);
    });

    describe('refresh', () => {
        it('Should', () => {

            expect(component.refresh(paramsMock)).toBeTrue()
        })
    })
})

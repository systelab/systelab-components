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
import { Component } from "@angular/core";
import { AbstractGrid } from "systelab-components";


interface TestData {
    id: number;
    row: number;
}

@Component({
    selector: 'systelab-grid-context-menu-cell-renderer-mock',
    templateUrl: 'grid-context-menu-cell-renderer.component.html'
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
        gridOptions: {
            api: {
                deselectAll: () => {
                },
                selectIndex: (rowIndex, tryMulti, supressEvents) => {
                }
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
            imports: [BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                OverlayModule,
                ButtonModule,
                SystelabTranslateModule,
                SystelabPreferencesModule,
                AgGridModule],
            providers: [provideHttpClient(withInterceptorsFromDi())]
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

        it('Should call dotsClicked if event.ctrlKey is true & removeSelectionOnOpenContextMenu is false', () => {
            component.agInit(paramsMock);

            component.dotsClicked(eventMock);

            expect(component['container'].dotsClicked)
                .toHaveBeenCalled()
        })

        it('Should call gridOptions.api.deselectAll if removeSelectionOnOpenContextMenu is true & call gridOptions.api.selectIndex if ctrlKey is true', () => {
            spyOn(containerMock.gridOptions.api, 'deselectAll');
            spyOn(containerMock.gridOptions.api, 'selectIndex');
            component.agInit(paramsMock);


            containerMock.removeSelectionOnOpenContextMenu = true;

            component.dotsClicked(eventMock);

            expect(component['container'].dotsClicked).toHaveBeenCalled()
            expect(containerMock.gridOptions.api.selectIndex).toHaveBeenCalled()
            expect(containerMock.gridOptions.api.deselectAll).toHaveBeenCalled()

        })
    })

    describe('refresh', () => {
        it('Should', () => {

            expect(component.refresh(paramsMock)).toBeTrue()
        })
    })
})

import {
    AbstractColDef,
    ColDef,
    ColumnGroup,
    ColumnGroupShowType,
    ColumnPinnedType,
    GridApi,
    IAggFunc,
    IRowNode,
    ProvidedColumnGroup,
    SortDirection
} from 'ag-grid-community';
import { AutosizeGridHelper, initializeCalculatedGridState } from './autosize-grid-helper';

describe('AutosizeGridHelper', () => {
    let gridApiMock: jasmine.SpyObj<GridApi>;
    let gridState: any;

    beforeEach(() => {
        gridApiMock = jasmine.createSpyObj('GridApi', [
            'getLastDisplayedRowIndex',
            'getAllDisplayedColumns',
            'getColumns',
            'isDestroyed',
            'autoSizeColumns',
            'sizeColumnsToFit',
            'setColumnWidths'
        ]);
        gridApiMock.getLastDisplayedRowIndex.and.returnValue(0);
        gridApiMock.getAllDisplayedColumns.and.returnValue([
            {
                getColId: () => 'col1', getColDef: () => ({}), getActualWidth: () => 100,
                getUserProvidedColDef: function (): ColDef<any, any> {
                    throw new Error('Function not implemented.');
                },
                isRowGroupDisplayed: function (colId: string): boolean {
                    throw new Error('Function not implemented.');
                },
                isPrimary: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isFilterAllowed: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isFieldContainsDots: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isTooltipEnabled: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isTooltipFieldContainsDots: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                addEventListener: function (eventType: string, userListener: (params: any) => void): void {
                    throw new Error('Function not implemented.');
                },
                removeEventListener: function (eventType: string, userListener: (params: any) => void): void {
                    throw new Error('Function not implemented.');
                },
                isSuppressNavigable: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isCellEditable: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isSuppressFillHandle: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAutoHeight: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAutoHeaderHeight: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isRowDrag: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isDndSource: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isCellCheckboxSelection: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isSuppressPaste: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isMenuVisible: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                getSort: function (): SortDirection | undefined {
                    throw new Error('Function not implemented.');
                },
                isSortable: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isSortAscending: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isSortDescending: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isSortNone: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isSorting: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                getSortIndex: function (): number | null | undefined {
                    throw new Error('Function not implemented.');
                },
                getAggFunc: function (): string | IAggFunc | null | undefined {
                    throw new Error('Function not implemented.');
                },
                getRight: function (): number {
                    throw new Error('Function not implemented.');
                },
                isFilterActive: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isHovered: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isFirstRightPinned: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isLastLeftPinned: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isPinned: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isPinnedLeft: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isPinnedRight: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isSpanHeaderHeight: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                getColumnGroupPaddingInfo: function (): { numberOfParents: number; isSpanningTotal: boolean; } {
                    throw new Error('Function not implemented.');
                },
                getAutoHeaderHeight: function (): number | null {
                    throw new Error('Function not implemented.');
                },
                getColSpan: function (rowNode: IRowNode): number {
                    throw new Error('Function not implemented.');
                },
                getRowSpan: function (rowNode: IRowNode): number {
                    throw new Error('Function not implemented.');
                },
                isGreaterThanMax: function (width: number): boolean {
                    throw new Error('Function not implemented.');
                },
                getMaxWidth: function (): number {
                    throw new Error('Function not implemented.');
                },
                getFlex: function (): number | null {
                    throw new Error('Function not implemented.');
                },
                isRowGroupActive: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isPivotActive: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAnyFunctionActive: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAnyFunctionAllowed: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isValueActive: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAllowPivot: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAllowValue: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAllowRowGroup: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isColumn: true,
                getUniqueId: function (): any {
                    throw new Error('Function not implemented.');
                },
                getMinWidth: function (): number {
                    throw new Error('Function not implemented.');
                },
                getLeft: function (): number | null {
                    throw new Error('Function not implemented.');
                },
                getDefinition: function (): AbstractColDef<any, any> {
                    throw new Error('Function not implemented.');
                },
                getColumnGroupShow: function (): ColumnGroupShowType | undefined {
                    throw new Error('Function not implemented.');
                },
                getParent: function (): ColumnGroup | null {
                    throw new Error('Function not implemented.');
                },
                isResizable: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isEmptyGroup: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isMoving: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                getPinned: function (): ColumnPinnedType {
                    throw new Error('Function not implemented.');
                },
                isVisible: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                getInstanceId: function (): any {
                    throw new Error('Function not implemented.');
                },
                getOriginalParent: function (): ProvidedColumnGroup | null {
                    throw new Error('Function not implemented.');
                },
                getId: function (): string {
                    throw new Error('Function not implemented.');
                }
            }
        ]);
        gridApiMock.getColumns.and.returnValue([
            {
                getColDef: () => ({}), getActualWidth: () => 100,
                getUserProvidedColDef: function (): ColDef<any, any> {
                    throw new Error('Function not implemented.');
                },
                isRowGroupDisplayed: function (colId: string): boolean {
                    throw new Error('Function not implemented.');
                },
                isPrimary: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isFilterAllowed: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isFieldContainsDots: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isTooltipEnabled: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isTooltipFieldContainsDots: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                addEventListener: function (eventType: string, userListener: (params: any) => void): void {
                    throw new Error('Function not implemented.');
                },
                removeEventListener: function (eventType: string, userListener: (params: any) => void): void {
                    throw new Error('Function not implemented.');
                },
                isSuppressNavigable: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isCellEditable: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isSuppressFillHandle: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAutoHeight: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAutoHeaderHeight: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isRowDrag: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isDndSource: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isCellCheckboxSelection: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isSuppressPaste: function (rowNode: IRowNode): boolean {
                    throw new Error('Function not implemented.');
                },
                isMenuVisible: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                getSort: function (): SortDirection | undefined {
                    throw new Error('Function not implemented.');
                },
                isSortable: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isSortAscending: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isSortDescending: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isSortNone: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isSorting: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                getSortIndex: function (): number | null | undefined {
                    throw new Error('Function not implemented.');
                },
                getAggFunc: function (): string | IAggFunc | null | undefined {
                    throw new Error('Function not implemented.');
                },
                getRight: function (): number {
                    throw new Error('Function not implemented.');
                },
                isFilterActive: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isHovered: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isFirstRightPinned: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isLastLeftPinned: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isPinned: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isPinnedLeft: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isPinnedRight: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isSpanHeaderHeight: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                getColumnGroupPaddingInfo: function (): { numberOfParents: number; isSpanningTotal: boolean; } {
                    throw new Error('Function not implemented.');
                },
                getColId: function (): string {
                    throw new Error('Function not implemented.');
                },
                getAutoHeaderHeight: function (): number | null {
                    throw new Error('Function not implemented.');
                },
                getColSpan: function (rowNode: IRowNode): number {
                    throw new Error('Function not implemented.');
                },
                getRowSpan: function (rowNode: IRowNode): number {
                    throw new Error('Function not implemented.');
                },
                isGreaterThanMax: function (width: number): boolean {
                    throw new Error('Function not implemented.');
                },
                getMaxWidth: function (): number {
                    throw new Error('Function not implemented.');
                },
                getFlex: function (): number | null {
                    throw new Error('Function not implemented.');
                },
                isRowGroupActive: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isPivotActive: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAnyFunctionActive: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAnyFunctionAllowed: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isValueActive: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAllowPivot: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAllowValue: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isAllowRowGroup: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isColumn: true,
                getUniqueId: function (): any {
                    throw new Error('Function not implemented.');
                },
                getMinWidth: function (): number {
                    throw new Error('Function not implemented.');
                },
                getLeft: function (): number | null {
                    throw new Error('Function not implemented.');
                },
                getDefinition: function (): AbstractColDef<any, any> {
                    throw new Error('Function not implemented.');
                },
                getColumnGroupShow: function (): ColumnGroupShowType | undefined {
                    throw new Error('Function not implemented.');
                },
                getParent: function (): ColumnGroup | null {
                    throw new Error('Function not implemented.');
                },
                isResizable: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isEmptyGroup: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                isMoving: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                getPinned: function (): ColumnPinnedType {
                    throw new Error('Function not implemented.');
                },
                isVisible: function (): boolean {
                    throw new Error('Function not implemented.');
                },
                getInstanceId: function (): any {
                    throw new Error('Function not implemented.');
                },
                getOriginalParent: function (): ProvidedColumnGroup | null {
                    throw new Error('Function not implemented.');
                },
                getId: function (): string {
                    throw new Error('Function not implemented.');
                }
            }
        ]);
        gridApiMock.isDestroyed.and.returnValue(false);
        gridState = initializeCalculatedGridState();
    });

    it('should handle vertical direction', () => {
        const event = { direction: 'vertical', top: 0 };
        const result = AutosizeGridHelper['itWasPreviouslyCalculated'](event, gridState, gridApiMock);
        expect(typeof result).toBe('boolean');
    });

    it('should handle horizontal direction', () => {
        const event = { direction: 'horizontal' };
        const result = AutosizeGridHelper['itWasPreviouslyCalculated'](event, gridState, gridApiMock);
        expect(typeof result).toBe('boolean');
    });

    it('should handle undefined event', () => {
        const result = AutosizeGridHelper['itWasPreviouslyCalculated'](undefined, gridState, gridApiMock);
        expect(result).toBe(false);
    });
});

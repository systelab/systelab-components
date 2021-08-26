export class TwoListItem {
  constructor(public displayName: string, public colId: string, public isSelected: boolean, public isVisible: boolean) {
  }
}

export class CurrentSelectionStatus {
  constructor(public available: Array<TwoListItem>, public visible: Array<TwoListItem>) {
  }

  public selectAvailable(element: TwoListItem, filteredList: Array<TwoListItem>, isShiftKey: boolean, isControlKey: boolean): void {
    this.clear(this.visible);
    this.select(this.available, element, filteredList, isShiftKey, isControlKey);
  }

  public selectVisible(element: TwoListItem, filteredList: Array<TwoListItem>, isShiftKey: boolean, isControlKey: boolean): void {
    this.clear(this.available);
    this.select(this.visible, element, filteredList, isShiftKey, isControlKey);
  }

  public clearAll(): void {
    this.clear(this.available);
    this.clear(this.visible);
  }

  private select(
    selectedList: Array<TwoListItem>,
    element: TwoListItem,
    filteredList: Array<TwoListItem>,
    isShiftKey: boolean,
    isControlKey: boolean
  ): void {
    if (selectedList.length > 0 && isShiftKey) {
      this.selectRange(selectedList, element, filteredList);
    } else {
      this.selectSingle(selectedList, element, isControlKey);
    }
  }

  private selectRange(selectedList: Array<TwoListItem>, element: TwoListItem, filteredList: Array<TwoListItem>) {
    const indexOfLastSelected = filteredList.indexOf(selectedList[0]);
    const indexOfSelected = filteredList.indexOf(element);

    this.clear(selectedList);

    if (indexOfLastSelected < indexOfSelected) {
      for (let i = indexOfLastSelected; i <= indexOfSelected; i++) {
        filteredList[i].isSelected = true;
        selectedList.push(filteredList[i]);
      }
    } else {
      for (let i = indexOfLastSelected; i >= indexOfSelected; i--) {
        filteredList[i].isSelected = true;
        selectedList.push(filteredList[i]);
      }
    }
  }

  private selectSingle(selectedList: Array<TwoListItem>, element: TwoListItem, isControlKey: boolean) {
    element.isSelected = !element.isSelected;
    if (selectedList.length === 0 || (selectedList.length > 0 && isControlKey)) {
      if (element.isSelected) {
        selectedList.push(element);
      } else {
        selectedList.splice(selectedList.indexOf(element), 1);
      }
    } else {
      this.clear(selectedList);
      if (element.isSelected) {
        selectedList.push(element);
      }
    }
  }

  private clear(list: Array<TwoListItem>) {
    list.forEach(element => element.isSelected = false);
    list.splice(0);
  }
}

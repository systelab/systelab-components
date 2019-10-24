import { AbstractContextComponent } from '../contextmenu/abstract-context.component';

export abstract class AbstractContextPanelComponent<T> extends AbstractContextComponent<T> {

	protected checkTargetAndClose(target: any) {
		if (!this.checkIfNgContent(target)) {
			if (target !== this.scrollableList.nativeElement && this.isDropDownOpened()) {
				this.closeDropDown();
			}
		}
	}
}


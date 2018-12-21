import { AbstractContextComponent } from '../contextmenu/abstract-context.component';

declare var jQuery: any;

export abstract class AbstractContextPanelComponent<T> extends AbstractContextComponent<T> {

	public dotsClicked(event: MouseEvent) {
		if (!this.isDropDownOpened()) {
			// hide the div until is positioned in event x y position to avoid flick
			this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'visibility', 'hidden');
			this.isOpened = true;
			this.cdr.detectChanges();
			this.showDropDown(event.clientX, event.clientY);
		}
	}

	public open(event: MouseEvent) {

		jQuery('#' + this.elementID)
			.dropdown('toggle');

		if (!this.isDropDownOpened()) {
			// Add class manually because is not set when jquery.dropdwon toogle is executed
			this.myRenderer.addClass(this.dropdownParent.nativeElement, 'show');
			// hide the div until is positioned in event x y position to avoid flick
			this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'visibility', 'hidden');
			this.isOpened = true;
			this.cdr.detectChanges();
			this.showDropDown(event.clientX, event.clientY);
		}

	}

	protected checkTargetAndClose(target: any) {
		const isNgContent = this.checkIfNgContent(target);
		if (isNgContent) {
			return;
		}
		if (target !== this.scrollableList.nativeElement && this.isDropDownOpened()) {
			this.closeDropDown();
		}
	}
}


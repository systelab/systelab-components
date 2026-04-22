import { Component } from '@angular/core';
import { ToastService } from 'systelab-components';
import { ToastConfig, ToastSize, ToastPosition } from "../../../../../systelab-components/src/lib/toast/toast-config";

@Component({
    selector: 'showcase-toast',
    templateUrl: 'showcase-toast.component.html',
    standalone: false
})
export class ShowcaseToastComponent {
	private readonly _defaultConfig: ToastConfig;

	constructor(private readonly toastService: ToastService) {
		this._defaultConfig = this.toastService.getConfig();
	}

	public showErrorToast(): void {
		this.toastService.showError('This is an error toast');
	}

	public showWarningToast(): void {
		this.toastService.showWarning('This is a warning toast');
	}

	public showSuccessToast(): void {
		this.toastService.showSuccess('This is a successful action toast');
	}

	public showInformationToast(): void {
		this.toastService.showInformation('This is an informational toast');
	}

	public showToastWithBody(): void {
		this.toastService.showSuccessMessage({
			title: 'File Uploaded',
			body: 'Your document has been successfully uploaded.',
		});
	}

	public showToastWithAction(): void {
		this.toastService.showInformationMessage({
			title: 'New message received',
			action: {
				label: 'View',
				callback: () => alert('Action clicked!')
			},
			config: {
				showCloseButton: true,
			}
		});
	}

	public showSuccessLargeToast(): void {
		this.toastService.setConfig({
			...this._defaultConfig,
			fixedSize: ToastSize.large
		});
		this.toastService.showSuccess('This is a large toast');
	}

	public showSuccessAutoWidthToast(): void {
		this.toastService.setConfig({
			...this._defaultConfig,
			autoWidth: true,
		});
		this.toastService.showSuccess('This is an auto width toast that grows with content');
	}

	public showSuccessWithCloseButtonToast(): void {
		this.toastService.setConfig({
			...this._defaultConfig,
			showCloseButton: true,
		});
		this.toastService.showSuccess('Toast with close button');
	}

	public showToastTopEnd(): void {
		this.toastService.showSuccessMessage({
			title: 'Top End Position',
			config: {
				position: ToastPosition.topEnd,
			}
		});
	}
}

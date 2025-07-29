import { Component } from '@angular/core';
import { ToastService } from 'systelab-components';
import { ToastConfig, ToastSize } from "../../../../../systelab-components/src/lib/toast/toast-config";

@Component({
    selector: 'showcase-toast',
    templateUrl: 'showcase-toast.component.html',
    standalone: false
})
export class ShowcaseToastComponent {
	private readonly _defaultConfig: ToastConfig;

	constructor(private toastService: ToastService) {
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

	public showSuccessLargeToast(): void {
		this.toastService.setConfig({
			...this._defaultConfig,
			fixedSize: ToastSize.large
		})
		this.toastService.showSuccess('This is a successful large action toast');
	}

	public showSuccessAutoWidthToast(): void {
		this.toastService.setConfig({
			...this._defaultConfig,
			autoWidth: true,
		})
		this.toastService.showSuccess('This is a successful auto width action toast. It grows according to its content');
	}

	public showSuccessWithCloseButtonToast(): void {
		this.toastService.setConfig({
			...this._defaultConfig,
			showCloseButton: true,
		})
		this.toastService.showSuccess('This is a successful with close button toast');
	}

	public showSuccessShortTimeoutToast(): void {
		this.toastService.setConfig({
			...this._defaultConfig,
			timeout: 1000,
		})
		this.toastService.showSuccess('Success with timeout of 1 second toast');
	}
}

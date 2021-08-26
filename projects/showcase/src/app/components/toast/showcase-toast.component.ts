import { Component } from '@angular/core';
import { ToastService } from 'systelab-components';

@Component({
	selector:    'showcase-toast',
	templateUrl: 'showcase-toast.component.html'
})
export class ShowcaseToastComponent {

	constructor(private toastService: ToastService) {
	}

	public showErrorToast(): void {
		this.toastService.showError('This is an error toast');
	}

	public showWarningToast(): void {
		this.toastService.showWarning('This is a warning toast');
	}

	public showSuccessToast(): void {
		this.toastService.showSuccess('This is a successfull action toast');
	}

	public showInformationToast(): void {
		this.toastService.showInformation('This is an informational toast');
	}
}

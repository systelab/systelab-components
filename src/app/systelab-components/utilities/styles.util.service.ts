import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class StylesUtilService {
	constructor() {
	}

	public static getStyleValue(elementRef: ElementRef, styleAttribute: string): string {
		if (elementRef && elementRef.nativeElement) {
			const aux = window.getComputedStyle(elementRef.nativeElement, null)
				.getPropertyValue(styleAttribute);
			if (aux.indexOf('px') > -1) {
				return aux.substr(0, aux.indexOf('px'));
			} else {
				return aux;
			}
		} else {
			return '';
		}
	}
}

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { THEMES } from './theme.config';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	constructor(@Inject(DOCUMENT) private document: Document) {}

	public setTheme(name = 'default') {
		const theme = THEMES[name];
		Object.keys(theme).forEach((key) => {
			this.document.documentElement.style.setProperty(`--${key}`, theme[key]);
		});
	}

	public getThemes():Array<string> {
		return ['default','dark'];
	}
}

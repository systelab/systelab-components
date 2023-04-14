import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { THEMES } from './theme.config';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	constructor(@Inject(DOCUMENT) private document: Document) {}

	public setTheme(name = 'default'): void {
		const theme = THEMES[name];
		Object.keys(theme).forEach((key) => {
			this.document.documentElement.style.setProperty(`--${key}`, theme[key]);
		});

		if (name==='default') {
			this.document.styleSheets[0].deleteRule(1);
		} else {
			this.document.styleSheets[0].insertRule('::-webkit-scrollbar { width: var(--slab_scrollbar_width); height: var(--slab_scrollbar_height);}',1);
		}
	}

	public getThemes(): Array<string> {
		return ['default','dark'];
	}
}

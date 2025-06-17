import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { THEMES } from './theme.config';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	constructor(@Inject(DOCUMENT) private document: Document) {}

	public setTheme(name = 'default', agGridTheme = 'ag-theme-alpine'): void {
		const theme = THEMES[name];
		const gridVars: string[] = [];
		Object.keys(theme).forEach((key) => {
			if(key.startsWith('ag')) {
				gridVars.push(key);
			} else {
				this.document.documentElement.style.setProperty(`--${key}`, theme[key]);
			}
		});

		this.setGridTheme(theme, agGridTheme, gridVars);

		if (name==='default') {
			this.document.styleSheets[0].deleteRule(1);
		} else {
			this.document.styleSheets[0].insertRule('::-webkit-scrollbar { width: var(--slab_scrollbar_width); height: var(--slab_scrollbar_height);}',1);
		}
	}

	public getThemes(): Array<string> {
		return ['default','dark'];
	}

	private setGridTheme(systelabTheme, agGridTheme: string, agGridVars: string[]): void {
		const oldStyle = this.document.getElementById(`${agGridTheme}-vars`);
		!!oldStyle && oldStyle.remove();
		const style = this.document.createElement('style');
		style.id = `${agGridTheme}-vars`;

		let css = `.${agGridTheme} {\n`;
		agGridVars.forEach((agGridVar) => {
			css += `  --${agGridVar}: ${systelabTheme[agGridVar]};\n`;
		});
		css += `}`;

		style.innerHTML = css;
		this.document.head.appendChild(style);
	}
}

import { Injectable } from '@angular/core';

@Injectable()
export class ColorUtilService {

	public generateColorArray(colorValues: Array<any>, withBorder?: boolean): Array<any> {
		const colorList = new Array();

		for (const colorR of colorValues) {
			for (const colorG of colorValues) {
				for (const colorB of colorValues) {
					const newColorElement: any = {};
					newColorElement.color = '#' + this.rgbToHex(colorR, colorG, colorB);
					if (withBorder) {
						newColorElement.border = '#' + this.darkColor(colorR, colorG, colorB);
					}
					newColorElement.id = newColorElement.color;
					newColorElement.value = newColorElement.color;
					colorList.push(newColorElement);
				}
			}
		}
		return colorList;
	}

	public rgbToHex(R: any, G: any, B: any) {
		return this.toHex(R) + this.toHex(G) + this.toHex(B);
	}

	private toHex(n: any) {
		n = parseInt(n, 10);
		if (isNaN(n)) {
			return '00';
		}
		n = Math.max(0, Math.min(n, 255));
		return '0123456789ABCDEF'.charAt((n - n % 16) / 16) + '0123456789ABCDEF'.charAt(n % 16);
	}

	public darkColor(R: any, G: any, B: any) {
		return this.rgbToHex(R * 0.7, G * 0.7, B * 0.7);
	}

}

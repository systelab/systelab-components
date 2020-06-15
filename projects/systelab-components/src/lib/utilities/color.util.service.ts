import { Injectable } from '@angular/core';

export interface RGB {
	r: number;
	g: number;
	b: number;
}

@Injectable()
export class ColorUtilService {

	public static generateColorArray(colorValues: Array<any>, withBorder?: boolean): Array<any> {
		const colorList = [];

		for (const colorR of colorValues) {
			for (const colorG of colorValues) {
				for (const colorB of colorValues) {
					const newColorElement: any = {};
					newColorElement.color = '#' + this.rgbToHex(colorR, colorG, colorB);
					if (withBorder) {
						newColorElement.border = '#' + this.rgbToHex(colorR * 0.7, colorG * 0.7, colorB * 0.7);
					}
					newColorElement.id = newColorElement.color;
					newColorElement.value = newColorElement.color;
					colorList.push(newColorElement);
				}
			}
		}
		return colorList;
	}

	public static rgbToHex(R: number, G: number, B: number): string {
		return this.toHex(R) + this.toHex(G) + this.toHex(B);
	}

	private static toHex(num: number): string {
		if (isNaN(num)) {
			return '00';
		}
		num = Math.max(0, Math.min(num, 255));
		return '0123456789ABCDEF'.charAt((num - num % 16) / 16) + '0123456789ABCDEF'.charAt(num % 16);
	}

	public static hexToRGB(hex: string): RGB {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	public static darkColorFromHex(hex: string): string {
		const rgbColor = this.hexToRGB(hex);
		return this.rgbToHex(rgbColor.r * 0.7, rgbColor.g * 0.7, rgbColor.b * 0.7);
	}
}

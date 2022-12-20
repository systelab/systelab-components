import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class UnitTestHelper {


	public static dispatchKeyboardEvent(fixture: ComponentFixture<any>, selectorId: string, eventName: string,
										keyCode: string, keyName: string): void {
		const elm = fixture.debugElement.query(By.css('#number')).nativeElement;
		const event = new KeyboardEvent(eventName, {'key': keyName, 'code': keyCode});

		elm.dispatchEvent(event);
	}

	public static hasText(fixture: ComponentFixture<any>, selectorId: string, text: string): void {
		const inputComponent = fixture.debugElement.query(By.css(selectorId)).nativeElement;
		expect(inputComponent.value)
			.toBe(text);
	}

	public static dispatchEventKeyAndVerifyExpectedText(fixture: ComponentFixture<any>,
														selectorId: string, eventName: string, parameter: any): void {
		UnitTestHelper.dispatchKeyboardEvent(fixture, selectorId, eventName, parameter.code, parameter.key);
		fixture.detectChanges();
		fixture.whenStable()
			.then(() => {
				UnitTestHelper.hasText(fixture, selectorId, parameter.expected);
			});
	}

}

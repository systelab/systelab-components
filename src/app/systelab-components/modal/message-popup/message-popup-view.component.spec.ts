import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { MessagePopupViewComponent, MessagePopupViewContext } from './message-popup-view.component';
import { DialogRef, MessagePopupButton } from '..';
import { SystelabComponentsModule } from '../../systelab-components.module';
import { MessageWithIconComponent } from './message-with-icon.component';


describe('Systelab MessagePopupViewComponent', () => {
	let component: MessagePopupViewComponent;
	let fixture: ComponentFixture<MessagePopupViewComponent>;
	let spyDialogRef;
	const parameters: MessagePopupViewContext = new MessagePopupViewContext();


	beforeEach(async(() => {
		spyDialogRef = jasmine.createSpyObj('DialogRef', ['context']);
		TestBed.configureTestingModule({
			imports:      [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				HttpClientModule,
				SystelabTranslateModule,
				SystelabComponentsModule
			],
			declarations: [],
			providers:    [{provide: DialogRef, useValue: spyDialogRef}]
		})
			.compileComponents();
	}));

	beforeEach(async(() => {
		spyDialogRef.context.and.returnValue(parameters);
	}));


	it('should be instantiated with default parameters', () => {
		spyDialogRef.context = parameters;
		fixture = TestBed.createComponent(MessagePopupViewComponent);
		component = fixture.componentInstance;
		component.parameters = parameters;
		fixture.detectChanges();

		expect(component)
			.toBeTruthy();
	});

	it('should be instantiated with more than one button', () => {
		parameters.buttons.push(new MessagePopupButton('YES', true));
		parameters.buttons.push(new MessagePopupButton('NO', false));

		spyDialogRef.context = parameters;
		fixture = TestBed.createComponent(MessagePopupViewComponent);
		component = fixture.componentInstance;
		component.parameters = parameters;
		fixture.detectChanges();

		expect(component)
			.toBeTruthy();
	});

});

import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { DialogRef, DialogService } from "systelab-components";
import { I18nService, SystelabTranslateModule } from 'systelab-translate';
import { MessagePopupButton, MessagePopupService } from './message-popup.service';
import { MessageWithIconComponent } from './message-with-icon.component';

const yesNoNoTemplate = {
    titleDescription: 'Test',
    messageDescription: 'Yes/No message popup example',
    modalClass: null,
    width: 600,
    height: 500,
    template: null,
}

const yesNoNoOutlineWarningTemplate = {
    titleDescription: 'Test',
    messageDescription: 'Yes/No message popup example',
    modalClass: null,
    width: 600,
    height: 500,
    template: 'outline-warning',
}

const commonParams = {
	titleDescription: 'Test',
	messageDescription: 'Are you sure?',
	modalClass: null,
	width: 600,
	height: 500,
	button: null,
	icon: null,
	msgAskAgain: 'Don\'t ask again'
}

const expectedButtonsWithNoTemplate = [
    new MessagePopupButton('COMMON_NO', false, 'btn-link'),
    new MessagePopupButton('COMMON_YES', true, 'btn-outline-primary')
];

const expectedButtonsWithWarningTemplate = [
    new MessagePopupButton('COMMON_NO', false, 'btn-link'),
    new MessagePopupButton('COMMON_YES', true, 'btn-outline-warning')
];

describe('MessagePopupService', () => {
    let service: MessagePopupService;
    let spyDialogRef: jasmine.SpyObj<MessagePopupService>;
    beforeEach(() => {
        spyDialogRef = jasmine.createSpyObj('MessagePopupService', ['showYesNoQuestionPopup']);
		TestBed.configureTestingModule({
            imports: [
                OverlayModule,
				HttpClientModule,
				SystelabTranslateModule
			],
			providers: [
                DialogService,
                {provide: DialogRef, useValue: spyDialogRef},
                {provide: I18nService, useClass: I18nService}
			]
		});
		service = TestBed.inject(MessagePopupService);
	});

    it('should be created', () => {
		expect(service).toBeTruthy();
	});

    it('should return buttons with template when getButtonsTemplate is called', ()=>{
        expect(service['getButtonsTemplate'](yesNoNoTemplate.template)).toEqual(expectedButtonsWithNoTemplate);
    });

    it('should return buttons with template when getButtonsTemplate is called', ()=>{
        expect(service['getButtonsTemplate'](yesNoNoOutlineWarningTemplate.template)).toEqual(expectedButtonsWithWarningTemplate);
    });

    it('it should show a YesNo dialog',()=>{
        spyOn<any>(service, 'showPopup').and.callThrough();
        service.showYesNoQuestionPopup(yesNoNoTemplate.titleDescription, yesNoNoTemplate.messageDescription, yesNoNoTemplate.modalClass, yesNoNoTemplate.width , yesNoNoTemplate.height, yesNoNoTemplate.template)
        const buttons: MessagePopupButton[] = service['getButtonsTemplate'](yesNoNoTemplate.template);
        expect(service['showPopup']).toHaveBeenCalledWith(
            yesNoNoTemplate.titleDescription,
            MessageWithIconComponent.MESSAGE_QUESTION,
            yesNoNoTemplate.messageDescription,
            yesNoNoTemplate.modalClass,
            yesNoNoTemplate.width,
            yesNoNoTemplate.height,
            buttons
        );
    });

	it('it should show an Error dialog', () => {
		spyOn<any>(service, 'showPopup').and.callThrough();
		service.showErrorPopup(commonParams.titleDescription, commonParams.messageDescription, commonParams.modalClass, commonParams.width, commonParams.height)
		expect(service['showPopup']).toHaveBeenCalledWith(
			commonParams.titleDescription,
			MessageWithIconComponent.MESSAGE_ERROR,
			commonParams.messageDescription,
			commonParams.modalClass,
			commonParams.width,
			commonParams.height,
			[]
		);
	});

	it('it should show a warning dialog', () => {
		spyOn<any>(service, 'showPopup').and.callThrough();
		service.showWarningPopup(commonParams.titleDescription, commonParams.messageDescription, commonParams.modalClass, commonParams.width, commonParams.height)
		expect(service['showPopup']).toHaveBeenCalledWith(
			commonParams.titleDescription,
			MessageWithIconComponent.MESSAGE_WARNING,
			commonParams.messageDescription,
			commonParams.modalClass,
			commonParams.width,
			commonParams.height,
			[]
		);
	});

	it('it should show an Information dialog', () => {
		spyOn<any>(service, 'showPopup').and.callThrough();
		service.showInformationPopup(commonParams.titleDescription, commonParams.messageDescription, commonParams.modalClass, commonParams.width, commonParams.height)
		expect(service['showPopup']).toHaveBeenCalledWith(
			commonParams.titleDescription,
			MessageWithIconComponent.MESSAGE_INFO,
			commonParams.messageDescription,
			commonParams.modalClass,
			commonParams.width,
			commonParams.height,
			[]
		);
	});

	it('it should show an CustomQuestion dialog', () => {
		spyOn<any>(service, 'showPopup').and.callThrough();
		service.showCustomQuestionPopup(commonParams.titleDescription, commonParams.messageDescription, commonParams.modalClass, commonParams.width, commonParams.height, commonParams.button, commonParams.icon)
		expect(service['showPopup']).toHaveBeenCalledWith(
			commonParams.titleDescription,
			MessageWithIconComponent.MESSAGE_QUESTION,
			commonParams.messageDescription,
			commonParams.modalClass,
			commonParams.width,
			commonParams.height,
			commonParams.button,
			commonParams.icon
		);
	});

	it('it should show an AskAgain dialog', () => {
		spyOn<any>(service, 'showPopup').and.callThrough();
		service.showAskAgainPopup(commonParams.titleDescription, commonParams.messageDescription, commonParams.modalClass, commonParams.width, commonParams.height, commonParams.button, commonParams.icon, commonParams.msgAskAgain)
		expect(service['showPopup']).toHaveBeenCalledWith(
				commonParams.titleDescription,
				MessageWithIconComponent.MESSAGE_QUESTION,
				commonParams.messageDescription,
				commonParams.modalClass,
				commonParams.width,
				commonParams.height,
				commonParams.button,
				commonParams.icon,
				commonParams.msgAskAgain
			);
	});
});
# systelab-message-popup

Classes to show a popup

## Using the service

This is not a component by itself, it is a service that lets you show a popup.

In order to do that, you must inject an instance of MessagePopupService and use it to call the method you want.

```javascript
constructor(protected messagePopupService:MessagePopupService) {
}

public showError() {
  this.messagePopupService.showErrorPopup('Test', 'Error message popup example')
    .subscribe((v) => {
        console.log('closing');
    });
}
```

Use showErrorPopup to show a popup with an error icon.

```javascript
public showErrorPopup(titleDescription: string, errorDescription: string, modalClass?: string, width?: number, height?: number): Observable<any>
```

Use showWarningPopup to show a popup with a warning icon.

```javascript
public showWarningPopup(titleDescription: string, warningDescription: string, modalClass?: string, width?: number, height?: number): Observable<any>
```

Use showInformationPopup to show a popup with an information icon.

```javascript
public showInformationPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any>
```

Use showYesNoQuestionPopup to show a yes/no popup with a question icon.

```javascript
public showYesNoQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number, template?: string): Observable<any>
```
Current available templates are the following:

| Template | String value | Example |
| ---- |:----------:| ------------|
| No template | ```null``` | ![image](https://user-images.githubusercontent.com/5593621/148924691-09aed4e2-ae37-4a07-95a8-a03bfbf479b9.png) |
| Primary | ```primary``` | ![image](https://user-images.githubusercontent.com/5593621/148924854-bdf0765c-7f55-4782-bad6-9094bf722a6e.png) |
| Outline primary | ```outline-primary``` | ![image](https://user-images.githubusercontent.com/5593621/148924973-e221d2ca-438d-406c-818d-4d4116092767.png) |
| Warning | ```warning``` | ![image](https://user-images.githubusercontent.com/5593621/148925148-abb303d1-174a-49d6-a8a0-523151c5e0b0.png) |
| Outline warning | ```outline-warning```  | ![image](https://user-images.githubusercontent.com/5593621/148925187-87e0be42-4a37-483c-819b-438ca2cef24b.png) |
| Danger | ```danger``` | ![image](https://user-images.githubusercontent.com/5593621/148925237-7af6c3a0-9769-4bdf-8d28-0affa801587a.png) |
| Outline Danger | ```outline-danger``` | ![image](https://user-images.githubusercontent.com/5593621/148925269-b9a80e61-acc4-41f8-b9dc-e91ce656dda1.png) |

Use showCustomQuestionPopup to show a popup with custom buttons and a question icon.

```javascript
public showCustomQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number, buttons?: MessagePopupButton[], icon?: MessagePopupIcon): Observable<any>
```

Use showAskAgainPopup to show a popup with a check. Closing the popup will send an array with the button value and the check status.

```javascript
public showAskAgainPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number, buttons?: MessagePopupButton[], icon?: MessagePopupIcon, messageAskAgain?: string): Observable<any>
```

MessagePopupButton is a class that represent a button. The different properties and its meaning are:


| Name | Type | Description |
| ---- |:----------:| ------------|
| title | string | Text displayed in button |
| returnValue | any | Returned value after clicking the button and closing popup |
| cssClass | string | Css class to apply to the button |
| focus | boolean | Button has window focus. Default value is false |


MessagePopupIcon is a class that represent a icon in the message popup. The different properties and its meaning are:


| Name | Type | Description |
| ---- |:----------:| ------------|
| cssClass | string | Css of the icon class |
| cssPropertiesClass | string | Css of the properties of the icon (e.g. define the color, the font size...) |


The modal class is a css class that lets you define the width and the height as a percentage (w-33 w-50 h-33 h-75 ...)

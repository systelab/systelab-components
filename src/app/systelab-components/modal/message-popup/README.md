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
public showYesNoQuestionPopup(titleDescription: string, messageDescription: string, modalClass?: string, width?: number, height?: number): Observable<any>
```

The modal class is a css class that lets you define the width and the height as a percentage (w-33 w-50 h-33 h-75 ...)
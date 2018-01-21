# systelab-message-popup

Classes to show a popup

## Using the class

This is not a component by itself, it is a service that lets you show a popup.

In order to do that, you must inject an instance of MessagePopupService and use it:

```javascript
constructor(protected messagePopupService:MessagePopupService) {
}
public showError() {
  this.messagePopupService.showErrorPopup('Test', 'Error message popup example', null, 800, 600)
    .subscribe((v) => {
        console.log('closing');
    });
}

public showWarning() {
  this.messagePopupService.showWarningPopup('Test', 'Warning message popup example', 'w-33 h-33');
}

public showInfo() {
  this.messagePopupService.showInformationPopup('Test', 'Info message popup example');
}

public showQuestion() {
  this.messagePopupService.showQuestionPopup('Test', 'Are you sure?')
    .subscribe((v) => {
        console.log('closing');
  });
}
```

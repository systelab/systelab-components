# systelab-message-popup

Clases to show a popup

## Using the class

This is not a component by itself, it is a class that lets you show a popup.

In order to do that, you must inject the and instance of MessagePopupService and use it:
```
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
  this.messagePopupService.showQuestionPopup('Test', 'Estás seguro?')
    .subscribe((v) => {
        console.log('closing');
  });
}
```

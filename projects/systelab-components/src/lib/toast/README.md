# systelab-toast

Classes to show a toast

## Using the service

This is not a component by itself, it is a service that lets you show a toast.

In order to do that, you must inject an instance of ToastService and use it to call the method you want.

```javascript
constructor(protected toastService:ToastService) {
}

public showError() {
  this.toastService.showError('Test');

}
```

# systelab-toast

Service to show toast notifications with different types, styles, and configurations.

## Using the service

Inject an instance of `ToastService` in your component:

```typescript
constructor(private toastService: ToastService) {}
```

## Basic Usage (Legacy API)

Simple toasts with a single text message:

```typescript
this.toastService.showError('An error occurred');
this.toastService.showWarning('This is a warning');
this.toastService.showSuccess('Operation successful');
this.toastService.showInformation('Informational message');
```

## Enhanced API

The new API supports title, body, action buttons, and custom configuration:

```typescript
// Toast with title and body
this.toastService.showSuccessMessage({
  title: 'File Uploaded',
  body: 'Your document has been uploaded successfully.',
});

// Toast with action button
this.toastService.showInformationMessage({
  title: 'New message received',
  action: {
    label: 'View',
    callback: () => {
      // Handle action
      console.log('Action clicked');
    }
  },
  config: {
    showCloseButton: true,
    timeout: 10000
  }
});

// Available methods
this.toastService.showErrorMessage(options);
this.toastService.showWarningMessage(options);
this.toastService.showSuccessMessage(options);
this.toastService.showInformationMessage(options);
```

## Configuration Options

```typescript
interface ToastConfig {
  autoWidth?: boolean;              // Toast grows based on content
  fixedSize?: ToastSize;            // small | large - Fixed width
  showCloseButton?: boolean;        // Show manual close button
  timeout: number;                  // Auto-dismiss delay in ms (default: 5000)
  position?: ToastPosition;         // topCenter | topEnd | bottomCenter | bottomEnd
  maxSimultaneousToasts?: number;   // Max toasts shown at once (default: 5)
}

enum ToastSize {
  small = 'small',
  large = 'large'
}

enum ToastPosition {
  topCenter = 'top-center',
  bottomCenter = 'bottom-center',
  topEnd = 'top-end',
  bottomEnd = 'bottom-end'
}
```

### Setting global configuration

```typescript
this.toastService.setConfig({
  autoWidth: true,
  showCloseButton: true,
  timeout: 8000,
  position: ToastPosition.topEnd
});
```

### Per-toast configuration

```typescript
this.toastService.showSuccessMessage({
  title: 'Success',
  config: {
    timeout: 3000,
    position: ToastPosition.bottomEnd
  }
});
```

## Toast Management

```typescript
// Get all active toasts
const activeToasts = this.toastService.getActiveToasts();

// Dismiss all toasts
this.toastService.dismissAll();

// Dismiss specific toast
const toastRef = this.toastService.showSuccess('Message');
this.toastService.dismiss(toastRef.id);
```

## Examples

### Error with body
```typescript
this.toastService.showErrorMessage({
  title: 'Upload Failed',
  body: 'Unable to connect to server. Please check your connection.'
});
```

### Large toast
```typescript
this.toastService.showSuccessMessage({
  title: 'Success',
  config: {
    fixedSize: ToastSize.large
  }
});
```

### Auto-width toast
```typescript
this.toastService.showInformationMessage({
  title: 'Long message that needs auto width',
  config: {
    autoWidth: true
  }
});
```

### Toast with long timeout
```typescript
this.toastService.showWarningMessage({
  title: 'Important Notice',
  body: 'Please review this carefully.',
  config: {
    timeout: 15000,
    showCloseButton: true
  }
});
```


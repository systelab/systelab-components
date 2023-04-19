# Directives

## Draggable

```html
<div (finalPosition)="doUpdateModel($event)" [draggableOptions]="{restrictParent: true}" draggable></div>

```

### Draggable Properties

| Name | Value | Default | Description |
| ---- |:----:|:-------:| ----------- |
| draggableOptions | {restrictParent: true} | false | indicates if the element can be dragged outside the parent div|

### Draggable Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| finalPosition | Events | Emits an event everytime the drag actions is finished.|

## Resizable

```html
<div (finalSize)="doUpdateSizeModel($event)"  [resizableOptions]="{edges: { right: true, bottom: true, top: false, left: true } }" resizable></div>
```

### Resizable Properties

| Name | Value | Default | Description |
| ---- |:----:|:-------:| ----------- |
| resizableOptions | {edges: { right: true, bottom: true, top: false, left: true } } | false | indicates the edge resizable |

### Resizable Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| finalSize | Events | Emits an event everytime the element is resized.|


## numpadDecimalNumeric

In an input field, if we use this directive, when clicking on the '.' key in the numpad, it will change the '.' to the localized decimal character.
i.e: when locale is spanish, if we click the '.' key it translates the '.' to ','.

```html
<input type="text" id="ID_DOSE"  systelabNumPadDecimalNumericDirective/>
```

## testId

This directive adds an HTML data-test-id attribute if the configuration is not set to production. This data field can be used
to select the element for testing purpose.

This directive also avoids to have non needed code when the
application is in production.

```html
<div systelabTestId="people"></div>
```

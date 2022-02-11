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

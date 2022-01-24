# Directives

## Draggable

```html
<div (finalPosition)="doUpdateModel($event)" [draggableOptions]="{restrictParent: true}" draggable></div>

```

### Properties

| Name | Value | Default | Description |
| ---- |:----:|:-------:| ----------- |
| draggableOptions | {restrictParent: true} | false | indicates if the element can be dragged outside the parent div|


### Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| finalPosition | Events | Emits an event everytime the drag actions is finished.|

## Resizable

```html
<div (finalSize)="doUpdateSizeModel($event)"  [resizableOptions]="{edges: { right: true, bottom: true, top: false, left: true } }" resizable></div>
```


### Properties

| Name | Value | Default | Description |
| ---- |:----:|:-------:| ----------- |
| resizableOptions | {edges: { right: true, bottom: true, top: false, left: true } } | false | indicates the edge resizable |


### Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| finalSize | Events | Emits an event everytime the element is resized.|


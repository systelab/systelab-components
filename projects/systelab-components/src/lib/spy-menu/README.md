# systelab-spy-menu

Component to display a spy menu and a directive to update menu position.

## Using the component

```html
<systelab-spy-menu [items]="menuItems" [sectionSelected]="sectionSelected"></systelab-spy-menu>
```
## Using the directive with the component

```html
<div scrollSpy [spiedTags]="['div']">
    <div id="section1">
    ...
    </div>
    <div id="section2">
    ...
    </div>
    <div id="section3">
    ...
    </div>
    <div class="d-flex flex-column ms-2 overflow-hidden d-print-none slab-spy-menu-example" style="width: 300px">
        <systelab-spy-menu [items]="menuItems" [sectionSelected]="sectionSelected"></systelab-spy-menu>
    </div>
</div>
```

## systelab-spy-menu Component Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| items | Array<SpyMenuItem> | | Menu entry list |
| sectionSelected | string | | Initial section html id selected

## scrollSpy Directive Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| spiedTags | Array<string> | ['div'] | List of html tags spied |
| querySelector | string | '[id^="section"]' | Pattern of menu section id selectors

#### Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| sectionChange | | scrollSpy directive emits this event when section visible in scroll is changed

The styles for the spy-menu are defined in the spy-menu.scss Saas file.

## SpyMenuItem

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| id | string | | html id of the item |
| text | string | | Text label of the item |
| hidden | boolean &#124; () => boolean | | Value or arrow function to hide menu item.  |
| disabled | boolean &#124; () => boolean | | Value or arrow function to display menu item disabled.  |

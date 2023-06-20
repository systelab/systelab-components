# systelab-breadcrumb

Component to show a Breadcrumb.

## Using the component

```html
<systelab-breadcrumb [items]="items" [backgroundColor]="backgroundColor" [fontColor]="fontColor" [itemMaxWidth]="'90px'" [subItemMaxWidth]="'120px'"></systelab-breadcrumb>
```

The parameters **backgroundColor**, **fontColor**, **itemMaxWidth** and **subItemMaxWidth** are optionals.

How to add a breadcrumb item with an action:

```javascript
this.items.push(new BreadcrumbItem('2', 'Holidays', false, () => this.showModal()));
```

How to add a breadcrumb item with an url redirection:

```javascript
this.items.push(new BreadcrumbItem('2', 'Holidays', false, null, null, 'http://www.google.com'));
```

Use **action** for navigating internally in the application and use the **url** external navigations.

## Properties
| Name | Type | Default | Description                                              |
| ---- |:----:|:-------:|----------------------------------------------------------|
| backgroundColor | string |  | Breadcrumb background color                              |
| fontColor | string | | The font color of the text in the breadcrumb             |
| itemMaxWidth | string | | The max width of the item text in the breadcrumb         |
| subItemMaxWidth | string | | The max width of the sub-item text in the breadcrumb     |
| items | Array<BreadcrumbItem> | | An array with the elements to be shownmin the breadcrumb |

#### BreadcrumbItem

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| id | number |  | Breadcrumb item id |
| text | string | | Breadcrumb item label |
| isActive | boolean | false | Defines if the element is selected or not |
| action | any |  | An arrow function to execute (the url parameter should be set as blank if you want your arrow function to be called)|
| url | string |  |Url to redirection|
| subItems | Array<SubItems> |  |An array with the sub-elements to be shownmin the breadcrumb|


#### SubItems

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| id | number |  | Breadcrumb sub-item id |
| text | string | | Breadcrumb sub-item label |
| action | any |  | An arrow function to execute (the url parameter should be set as blank if you want your arrow function to be called)|
| url | string |  |Url to redirection|












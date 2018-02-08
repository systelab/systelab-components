# systelab-breadcrumb

Component to show a Breadcrumb.

## Using the template

```html
<systelab-breadcrumb [items]="items" [backgroundColor]="backgroundColor" [fontColor]="fontColor"></systelab-breadcrumb>
```

It is optional to set a **backgroundColor**, and a **fontColor**for the elements of the Breadcrumb.


### Items

Items is an array with the elements of the breadcrumb.

Each item has the following structure (BreadcrumbItem):

```javascript
    public id: number,
    public text: string,
    public isActive:boolean,
    public url: string,
    public subItems?: Array<BreadcrumbSubItem>,
    public action?: any
```

The following example shows how to add an item to the Breadcrum:

```javascript

    this.items.push(new BreadcrumbItem('1', 'Home', false,'https://google.com'));
    

```

In this case, **id** is the id of the item, **text** is the text of the item, **isActive** defines if the nav item is selected or not, and **url** is the url to link to.

The **subItems** attribute, lets you define a sub menu. It is an array of BreadcrumbSubItem elements that have the following structure:

```javascript
    public id: string,
    public text: string,
    public url: string,
    public action?: any
```

Finally, **action** is the arrow function to execute (the url parameter should be set as blank if you want your arrow function to be called). For example:

```javascript
this.items.push(new BreadcrumbItem('2', 'Holidays', false,'',null,() => this.showModal()));

```








# systelab-breadcrumb

Component to show a Breadcrumb.

## Using the component

```html
<systelab-breadcrumb [items]="items" [backgroundColor]="backgroundColor" [fontColor]="fontColor"></systelab-breadcrumb>
```

It is optional to set a **backgroundColor**, and a **fontColor** for the elements of the Breadcrumb.


### Items

Items is an array with the elements to be shownmin the breadcrumb.

Each item has the following structure (BreadcrumbItem):

```javascript
    public id: number,
    public text: string,
    public isActive:boolean,
    public action?: any,
    public subItems?: Array<BreadcrumbSubItem>,
    public url?: string
```

Apart from the **id** and **text**, **isActive** defines if the element is selected or not, and **action** is an arrow function to execute (the url parameter should be set as blank if you want your arrow function to be called).

```javascript
this.items.push(new BreadcrumbItem('2', 'Holidays', false, () => this.showModal()));
```

The **subItems** attribute, lets you define a sub menu. It is an array of BreadcrumbSubItem elements, that have the following structure:

```javascript
    public id: string,
    public text: string,
    public action: any,
    public url?: string

```

Finally, **url** is the url to link to. For example:

```javascript
this.items.push(new BreadcrumbItem('2', 'Holidays', false, null, null, 'http://www.google.com'));

```

Use **action** for navigating intenally in the application and use the **url** external navigations.







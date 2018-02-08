# systelab-breadcrumb

Component to show a Breadcrumb

## Using the template

```html
<systelab-breadcrumb [items]="items" [backgroundColor]="backgroundColor" [activeFontColor]="activeFontColor" [fontColor]="fontColor"></systelab-breadcrumb>
```

### Properties

#### Colors: BackgroundColor and fontColor

The component requests three colors:

**BackgroundColor**, is the color of the background of the breadcrumb.

**FontColor**, is the color of the text and icon in the breadcrumb item.

Do not use color names. Use the old hex codes or rgb mode to define the colors.

#### Data: items

Items is an array with the items which will compose the breadcrumb.

Each item has the follow structure (BreadcrumbItem):

```javascript
    public id: number,
    public text: string,
    public isActive:boolean,
    public url: string,
    public subItems?: Array<BreadcrumbSubItem>,
    public action?: any
```

Examples to how to add nav items to the list:
```javascript

    this.items.push(new BreadcrumbItem('1', 'Home', false,'https://google.com'));
    

```

**id** is the id of the item.

**text** is the text of the item.

**isActive** define if the nav item is selected or not.

**url** is the url link of the nav item.

**subItems** you can configure a sub menu in the level you want of the breadcrumb, you should fill the subItems with other items following the structure of BreadcrumbSubItem
```javascript
    public id: string,
    public text: string,
    public url: string,
    public action?: any
```

**action** you can configure the action you want or set in blank. The url parameter should be set as blank and the action parameter.
```javascript

this.items.push(new BreadcrumbItem('2', 'Holidays', false,'',null,() => this.showModal()));

```








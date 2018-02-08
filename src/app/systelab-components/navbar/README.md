# systelab-navbar

Component to show a Navbar

## Using the component

```html
    <systelab-navbar [id]="id" [isVertical]="isVertical" [backgroundColor]="color" [backgroundHoverColor]="color"
        [items]="items" [fontColor]="color" [align]="'center'"></systelab-navbar>
```

Set **isVertical=true**, if you want a vertical Navbar, set to false in any other case.

Set the alignment by specifying **align** to 'center', 'left' or 'right':

Set the **backgroundColor**, the **backgroundHoverColor** (color for the navbar items when they are hovered), and the **fontColor**
(color of the text and icon iof the elements).

Items is an array with the elements of the Navbar.

Each item has the follow structure:

```javascript
    public id: number,
    public text: string,
    public image: string,
    public floatImage: boolean,
    public isActive:boolean,
    public isEnabled:boolean,
    public target:string,
    public url: string,
    public action?: any
```

Here is an example:

```javascript
    this.items.push(new NavbarItem(5,'Blank Link','',false,false,true,'_blank','https://werfen.com'));
    this.items.push(new NavbarItem(1,'Option 1','slab-icon-medium icon-home',false,true,true,'_self','https://google.com'));
```

The following attributes will help you define the elements:

- **id** is the id of the item.
- **text** is the text of the item.
- **image** is a string with the class of the icon, this is not mandatory.
- **floatImage** define if you want the icon in the same line (set to true) as teh text or not.
- **isActive** define if the nav item is selected or not.
- **isEnabled** define if the nav item is disabled or not.
- **target** define if you want to open the link in the same tab or not, you have these values as possible ('_blank' or '_self')
- **url** is the url link of the nav item.
- **action** you can configure the action you want or set in blank. The url parameter should be set as blank and the action parameter.

```javascript
this.items.push(new NavbarItem(3,'Open Modal','slab-icon-medium icon-calendar',true,false,true,'','',() => this.showModal()));
```








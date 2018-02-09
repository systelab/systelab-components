# systelab-navbar

Component to show a Navbar

## Using the component

```html
    <systelab-navbar [id]="id" [isVertical]="isVertical" [backgroundColor]="color" [backgroundHoverColor]="color"
        [items]="items" [fontColor]="color" [align]="'center'"></systelab-navbar>
```

Set **isVertical** to true, if you want a vertical Navbar, set to false if you want an horizontal Navbar.

Set the alignment by specifying **align** to 'center', 'left' or 'right'.

In order to define the color, you are able to set the **backgroundColor**, the **backgroundHoverColor** (color for the navbar items when they are hovered), and the **fontColor**
(color of the text and icon iof the elements).

Items is an array with the elements of the Navbar. Each element has the follow structure:

```javascript
    public id: number,
    public text: string,
    public image: string,
    public floatImage: boolean,
    public isActive:boolean,
    public isEnabled:boolean,
    public action: any,
    public target?:string,
    public url?: string

```

Here is an example:

```javascript
    this.items.push(new NavbarItem(3,'Option 1','slab-icon-medium icon-calendar',true,false,true,() => this.showModal()));
    this.items.push(new NavbarItem(5,'Option 2','',false,false,true,null,'_blank','https://werfen.com'));
    this.items.push(new NavbarItem(1,'OPtion 3','slab-icon-medium icon-home',false,true,true,null,'_self','https://google.com'));
```

The following attributes will help you define the elements:

- **id** is the id of the item.
- **text** is the text of the item.
- **image** is a string with the class of the icon.
- **floatImage** defines if you want the icon in the same line (set to true) as the text or not.
- **isActive** defines if the item is selected or not.
- **isEnabled** defines if the item is disabled or not.
- **action** is the arrow function to execute (the url parameter should be set as blank if you want your arrow function to be called). For example:
- **target** defines if you want to open the link in the same tab or not. Two values are possible '_blank' and '_self'.
- **url** is the url to link to.




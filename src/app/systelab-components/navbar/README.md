# systelab-navbar

Component to show a Navbar

## Using the template

```html
    <systelab-navbar [id]="id" [isVertical]="isVertical" [backgroundColor]="backgroundColor" [backgroundHoverColor]="backgroundHoverColor"
        [items]="items" [fontColor]="fontColor" [alignNavbar]="alignNavbar"></systelab-navbar>
```

### Properties

#### Orientation: isVertical

You can configure the navbar as a vertical orientation or in a horizontal orientation.

To set as vertical set **isVertical=true**, and if you want in horizontal orientation set **isVertical=false**

#### Align of the nav items: alignNavbar

You can configure the alignaments of the nav items as three different ways:

 Define **alignNavbar = 'center'** to display the navbar items align in the center.

 Define **alignNavbar = 'left'** to display the navbar items align to the left.

 Define **alignNavbar = 'right'** to display the navbar items align to the right.

#### Colors: BackgroundColor, BackgroundHoverColor and fontColor

The component requests three colors:

**BackgroundColor**, is the color of the background of the navbar.

**BackgroundHoverColor**, is the color for the navbar items when they are hovered.

**FontColor**, is the color of the text and icon in the navbar item.

Do not use color names. Use the old hex codes or rgb mode to define the colors.

#### Data: items

Items is an array with the items which will compose the navbar.

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

Examples to how to add nav items to the list:
```javascript

    this.items.push(new NavbarItem(5,'Blank Link','',false,false,true,'_blank','https://werfen.com'));
    this.items.push(new NavbarItem(1,'Option 1','slab-icon-medium icon-home',false,true,true,'_self','https://google.com'));

```


**id** is the id of the item.

**text** is the text of the item.

**image** is a string with the class of the icon, this is not mandatory.

**floatImage** define if you want the icon in the same line (set to true) as teh text or not.

**isisActive** define if the nav item is selected or not.

**isEnabled** define if the nav item is disabled or not.

**target** define if you want to open the link in the same tab or not, you have these values as possible ('_blank' or '_self')

**url** is the url link of the nav item.

**action** you can configure the action you want or set in blank. The url parameter should be set as blank and the action parameter.
```javascript

this.items.push(new NavbarItem(3,'Open Modal','slab-icon-medium icon-calendar',true,false,true,'','',() => this.showModal()));

```








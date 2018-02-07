# systelab-pie

Component to show a Nav

## Using the template

```html
<systelab-navs [isVertical]="isVertical" [backgroundColor]="backgroundColor" [backgroundHoverItemColor]="backgroundHoverItemColor"
        [navsItems]="navsItems" [fontColor]="fontColor" [alignNavs]="alignNavs"></systelab-navs>
```

### Properties

#### Orientation: isVertical

You can configure the nav as a vertical orientation or in a horizontal orientation.

To set as vertical set **isVertical=true**, and if you want in horizontal orientation set **isVertical=false**

#### Align of the nav items: alignNavs

You can configure the alignaments of the nav items as three different ways:

 Define **alignNavs = 'center'** to display the nav items in the center.

 Define **alignNavs = 'left'** to display the nav items in the left.

 Define **alignNavs = 'right'** to display the nav items in the right.

#### Colors: BackgroundColor, backgroundHoverItemColor and fontColor

The component requests three colors:

**BackgroundColor**, is the color of the background of the nav.

**BackgroundHoverItemColor**, is the color for the nav items when they are hovered.

**FontColor**, is the color of the text and icon in the nav item.

Do not use color names. Use the old hex codes or rgb mode to define the colors.

#### Data: navsItems

navsItems is an array with the items which will compose the nav.

Each item has the follow structure:

```javascript
    public navId: number,
    public navText: string,
    public icon: string,
    public floatImage: boolean,
    public isActive:boolean,
    public isEnabled:boolean,
    public target:string,
    public url: string
```
**navId** is the id of the item.

**navText** is the text of the item.

**icon** is a string with the class of the icon, this is not mandatory.

**floatImage** define if you want the icon in the same line (set to true) as teh text or not.

**isisActive** define if the nav item is selected or not.

**isEnabled** define if the nav item is disabled or not.

**target** define if you want to open the link in the same tab or not, you have these values as possible ('_blank' or '_self')

**url** is the url link of the nav item.






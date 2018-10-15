# systelab-navbar

Component to show a Navbar

## Using the component

```html
    <systelab-navbar [id]="id" [isVertical]="isVertical" [backgroundColor]="color" [backgroundHoverColor]="color"
        [items]="items" [fontColor]="color" [align]="'center'"></systelab-navbar>
```

Here is an example:

```javascript
    this.items.push(new NavbarItem(3,'Option 1','slab-icon-medium icon-calendar',true,false,true,() => this.showModal()));
    this.items.push(new NavbarItem(5,'Option 2','',false,false,true,null,'_blank','https://werfen.com'));
    this.items.push(new NavbarItem(1,'OPtion 3','slab-icon-medium icon-home',false,true,true,null,'_self','https://google.com'));
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| isVertical | boolean |false | Define the orientation of the navbar |
| align | string | | The values can be: 'center', 'left' or 'right' |
| backgroundColor | string | | Bacground color for the navbar|
| backgroundHoverColor | string | | Background color for a hovered navItem|
| borderColor | string | | Border color |
| activeColor | string | 'white' | Background color for active NavItem|
| activeFontColor | string | 'black'| Font color for active NavItem |
| hideBottomBorder | string | | Hide NavItem bottom border |
| hideTopBorder | boolean | | Hide NavItem top border |
| hideRightBorder | boolean | | Hide NavItem right border |
| hideLeftBorder | boolean | | Hide NavItem left border |
| padding | string | | The padding for the NavItem|
| fontColor | string |'white' | Color for the text in the NavItem |
| items | Array<NavbarItem> | false | Array with the elements of the Navbar|

### NavbarItem

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| id | number | | id of the item |
| text | string | | Label of the item |
| image | string | | The class of the icon|
| floatImage | boolean | false | Define if you want the icon in the same line (set to true) as the text or not|
| isActive | boolean | false | Define if the item is selected or not |
| isEnabled | boolean | false | Define if the item is disabled or not.|
| target | string | | Two values are possible '_blank' and '_self' |
| action | any | | The arrow function to execute (the url parameter should be set as blank if you want your arrow function to be called).  |
| url | string | | Url for the redirection |

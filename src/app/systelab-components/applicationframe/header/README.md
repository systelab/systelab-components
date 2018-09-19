# systelab-app-header

Component to create an application header.

## Using the template

```html
<systelab-app-header [userName]="userName" [userFullName]="userFullName" [hospitalName]="hospitalName" [menu]="menu" [logoIcon]="logoIcon"
    [menuBars]="menuBars">
</systelab-app-header>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| userName | string || User name |
| userFullName | string || User full name |
| hospitalName | string || Main title |
| logoIcon | string || The css class of the logo|
| menuBars | boolean | false | Set to true to replace the user icon and the name (default behaviour) by an standard three horizontal bars menu icon|
| menu | Array<ApplicationHeaderMenuEntry> || An array of menu items that will appear in a menu under the user icon|

ApplicationHeaderMenuEntry is a class to represent a Menu Item. The first parameter is the name of the menu item, the second parameter a boolean to set if the item should be render as a separator,
and the third parameter is the lambda function to execute once the menu item is selected.

Menu example:

```javascript
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_SETUP'), false, () => this.doShowSettings()));
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_CHANGE_PASSWORD'), false, () => this.doChangePassword()));
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_CHANGE_USER'), false, () => this.doLogout()));
this.menu.push(new ApplicationHeaderMenuEntry('', true));
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_ABOUT'), false, () => this.doShowAbout()));
```



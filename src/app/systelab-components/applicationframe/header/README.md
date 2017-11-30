# systelab-application-header

Component to create an application bar.

## Using the template

```
<systelab-app-header [userName]="userName" [userFullName]="userFullName" [hospitalName]="hospitalName" [menu]="menu">
</systelab-app-header>
```
A user name (alias), a full name and a Institution name will be rendered in the bar. 

The menu input represents the different menu items that will apear under the user icon.

For example:
```
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_SETUP'), false, () => this.showSettings()));
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_CHANGE_PASSWORD'), false, () => this.doChangePassword()));
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_CHANGE_USER'), false, () => this.doLogout()));
this.menu.push(new ApplicationHeaderMenuEntry('', true));
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_ABOUT'), false, () => this.showAbout()));
```
If the second parameter in the ApplicationHeaderMenuEntry constructor method is set to true, the component will render a separator.
The third parameter is the lambda function to execute once the menu item is selected.

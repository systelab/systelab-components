# systelab-application-hesader

Component to create an application bar.

## Using the templates

```
<systelab-application-header [userName]="userName" [userFullName]="userFullName" [hospitalName]="hospitalName" [menu]="menu">
</systelab-application-header>
```
A user name (alias), a full name and a Institution name will be rendered in the bar. 

The menu input represents the different menu items that will apear under the user.

For example:
```
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_SETUP'), false, () => this.showSettings()));
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_CHANGE_PASSWORD'), false, () => this.doChangePassword()));
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_CHANGE_USER'), false, () => this.doLogout()));
this.menu.push(new ApplicationHeaderMenuEntry('', true));
this.menu.push(new ApplicationHeaderMenuEntry(this.i18nService.instant('COMMON_ABOUT'), false, () => this.showAbout()));
```

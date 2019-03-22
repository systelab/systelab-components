# systelab-app-sidebar

Component to create an application sidebar (left), with different tabs and some buttons in the bottom. Two options are available, for small and large sidebars.
Use systelab-app-sidebar-small or systelab-app-sidebar-large

## Using the template

```
<systelab-app-sidebar-small [actions]="actions" [tabs]="tabs" (selected)="doTabSelected($event)">
</systelab-app-sidebar-small>
```

or

```
<systelab-app-sidebar-large [actions]="actions" [tabs]="tabs" (selected)="doTabSelected($event)">
</systelab-app-sidebar-large>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| actions | Array&lt;ApplicationSidebarAction&gt; || An array of ApplicationSidebarAction objects representing the buttons at the left-bottom corner. |
| tabs | Array&lt;ApplicationSidebarTab&gt; || An array of ApplicationSidebarTab objects representing the tabs to show. |

*ApplicationSidebarTab* is a class with three mandatory properties and three optional properties.

| Name | Type | Mandatory | Description |
| ---- |:----:|:-------:| ----------- |
| id | string | yes | Tab id |
| name | string | yes | Tab label |
| isSelected | boolean | yes | Define if the tab is selected |
| subMenu | Array&lt;ApplicationSidebarTab&gt; | no | An array of ApplicationSidebarTab objects representing the sub-tabs to show.  |
| action | any | no | Tab action. |
| icon | string | no | Tab icon. |

> For small sidebars, icons are mandatory

For example:

```javascript
this.tabs.push(new ApplicationSidebarTab('id1', this.i18nService.instant('COMMON_TAB1'), true, null, null, 'icon-home'));
this.tabs.push(new ApplicationSidebarTab('id2', this.i18nService.instant('COMMON_TAB2'), false));
this.tabs.push(new ApplicationSidebarTab('id3', this.i18nService.instant('COMMON_TAB3'), false, []));
this.tabs.push(new ApplicationSidebarTab('id4', this.i18nService.instant('COMMON_TAB4'), false, [], () => this.action(id4)));
```


*ApplicationSidebarAction* is a class with two mandatory properties and one optional property.

| Name | Type | Mandatory | Description |
| ---- |:----:|:-------:| ----------- |
| name | string | yes | Button label |
| action | any | yes | Button action. |
| icon | string | no | Button icon. |


> For small sidebars, icons are mandatory

For example:

```javascript
this.actions.push(new ApplicationSidebarAction(this.i18nService.instant('COMMON_DOCUMENTATION'), () => this.showDocumentation(),'icon-print'));
```


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| selected | string |The selected Tab Id. See ApplicationSidebarTab Id.|




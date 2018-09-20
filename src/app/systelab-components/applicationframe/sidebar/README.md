# systelab-app-sidebar

Component to create an application sidebar (left), with different tabs and some buttons in the bottom.

## Using the template

```
<systelab-app-sidebar [actions]="actions" [tabs]="tabs" (selected)="doTabSelected($event)">
</systelab-app-sidebar>
```


## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| actions | Array&lt;ApplicationSidebarAction&gt; || An array of ApplicationSidebarAction objects representing the buttons at the left-bottom corner. |
| tabs | Array&lt;ApplicationSidebarTab&gt; || An array of ApplicationSidebarTab objects representing the tabs to show. |

ApplicationSidebarTab is a class with three properties. The first one is the Tab id (to be received on selected), the second one the Tab name and the third one is a boolean to set if the tab is selected.

ApplicationSidebarAction is a class with two properties. The first one is the button name and the second one the Arrow function to run when the button is clicked.

For example:
```
this.tabs.push(new ApplicationSidebarTab('id1', this.i18nService.instant('COMMON_TAB1'), true));
this.tabs.push(new ApplicationSidebarTab('id2', this.i18nService.instant('COMMON_TAB2'), false));
this.tabs.push(new ApplicationSidebarTab('id3', this.i18nService.instant('COMMON_TAB3'), false));
this.tabs.push(new ApplicationSidebarTab('id4', this.i18nService.instant('COMMON_TAB4'), false));
```


```
this.actions.push(new ApplicationSidebarAction(this.i18nService.instant('COMMON_DOCUMENTATION'), () => this.showDocumentation()));
```


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| selected | string |The selected Tab Id. See ApplicationSidebarTab Id.|




# systelab-app-sidebar

Component to create an application sidebar (left), with different tabs and some buttons in the bottom.

## Using the template

```
<systelab-app-sidebar [actions]="actions" [tabs]="tabs" (selected)="doTabSelected($event)">
</systelab-app-sidebar>
```
The tabs input is an array of ApplicationSidebarTab objects, and represent the different tabs to show. The constructor, has three parameters.
The first one is the Tab id (to be received on selected)), the second one the Tab name and the third one is true if the tab is selected.

For example:
```
this.tabs.push(new ApplicationSidebarTab('id1', this.i18nService.instant('COMMON_TAB1'), true));
this.tabs.push(new ApplicationSidebarTab('id2', this.i18nService.instant('COMMON_TAB2'), false));
this.tabs.push(new ApplicationSidebarTab('id3', this.i18nService.instant('COMMON_TAB3'), false));
this.tabs.push(new ApplicationSidebarTab('id4', this.i18nService.instant('COMMON_TAB4'), false));
```

The actions input is an array of ApplicationSidebarAction objects, and represent the different buttons at the bottom.
```
this.actions.push(new ApplicationSidebarAction(this.i18nService.instant('COMMON_DOCUMENTATION'), () => this.showDocumentation()));
```

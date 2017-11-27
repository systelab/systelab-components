# systelab-application-sidebar

Component to create an application sidebar (left), with different tabs and some buttons in the bottom.

## Using the template

```
<systelab-application-sidebar [actions]="actions" [tabs]="tabs" (selected)="doTabSelected($event)">
</systelab-application-sidebar>
```
The tabs input is an array of ApplicationSidebarTab objects, and represent the different tabs to show. The costructor, has three parameters.
The first one is the Tab id, the second one the Tab name and the third one is true if the tab is selected.
For example:
```
this.sidetabs.push(new ApplicationSidebarTab('id1', this.i18nService.instant('COMMON_TAB1'), true));
this.sidetabs.push(new ApplicationSidebarTab('id2', this.i18nService.instant('COMMON_TAB2'), false));
this.sidetabs.push(new ApplicationSidebarTab('id3', this.i18nService.instant('COMMON_TAB3'), false));
this.sidetabs.push(new ApplicationSidebarTab('id4', this.i18nService.instant('COMMON_TAB4'), false));
```

The actions input is an array of ApplicationSidebarAction objects, and represent the different buttons at the bottom.
```
this.sideactions.push(new ApplicationSidebarAction(this.i18nService.instant('COMMON_DOCUMENTATION'), () => this.showDocumentation()));
```

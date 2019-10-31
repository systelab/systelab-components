# systelab-app-frame

Component to create an application frame, showing a [systelab-app-header](header) at top and a [systelab-app-sidebar](sidebar) at left. 
The Inputs and Outputs are the same defined in this components.

## Using the template

```html
<systelab-app-frame [userName]="userName" [userFullName]="userFullName" [title]="title" [menu]="menu" [actions]="actions" [tabs]="tabs" (selected) ="doTabSelected($event)" [logoIcon]="logoIcon" [menuBars]="menuBars" [showSideBar]="showSideBar" [largeSideBar]="true">
</systelab-app-frame>
```

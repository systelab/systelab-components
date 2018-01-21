# systelab-app-frame

Component to create an application frame, showing a [systelab-app-header](header) at top and a [systelab-app-sidebar](sidebar) at left. 
The Inputs and Outputs are the same defined in this components.

## Using the template

```html
<systelab-app-frame [userName]="userName" [userFullName]="userFullName" [hospitalName]="hospitalName" [menu]="menu" [actions]="actions" [tabs]="tabs" (selected)="doTabSelected($event)">
</systelab-app-frame>
```

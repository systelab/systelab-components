# systelab-switch

Component to select between two values.

## Using the template

```
<systelab-switch [(isChecked)]="check" [disabled]="true"></systelab-switch>
```

The Input disabled is a boolean value in order to make the component disable. By default is false.

If you want the defaults the template will look like:

```
<systelab-switch [(isChecked)]="check"></systelab-switch>
```

The styles for the switch are defined in the switch.scss Saas file.
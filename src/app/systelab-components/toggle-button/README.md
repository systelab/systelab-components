# systelab-toogle-button

Component to select between two values.

## Using the template

```html
<systelab-toogle-button [(isChecked)]="check" [disabled]="true"></systelab-toogle-button>
```

The Input disabled is a boolean value in order to make the component disable. By default is false.

If you want the defaults the template will look like:

```html
<systelab-toogle-button [(isChecked)]="check"></systelab-toogle-button>
```

The styles for the switch are defined in the toggle-button.scss Saas file.
# systelab-accordion

Component to create accordion with internal content.

## Using the template

```html
<systelab-accordion [headerTitle]="'Accordion header'">
    <internal-component></internal-component>
</systelab-accordion>
```
The accordion component wraps the internal component, adding accordion functionality that allows us to expand or collapse its content.

If you want the defaults the template will look like:

```html
<systelab-accordion [headerTitle]="'Accordion header'">
    <internal-component></internal-component>
</systelab-accordion>
```


## Properties

| Name |  Type  |  Default  | Description                                                       |
| ---- |:------:|:---------:|-------------------------------------------------------------------|
| headerTitle | string |    ''     | Sets the header title of the accordion.|
| preferenceName | string | undefined | The preference name where the isCollapsed state will be stored.         |
| contentMaxHeight | number |    300    | The maximum height of the accordion content.                                  |
| withOverflow | number |   false   | When set to true, enables vertical scrolling within the container. |
| headerColor | number | undefined | The background color of the accordion header.                          |
| iconColor | number | undefined | The color of the expand/collapse icon.                                    |

# systelab-select

Component to select a value form a predefined list.

## Using the template
```
<systelab-select [(id)]="id" [(description)]="description" [fontFamily]="fontFamily" 
[fontSize]="fontSize" [fontWeight]="fontWeight" [fontStyle]="fontStyle"
[values]="values" [isDisabled]="false" [filter]="true" [inputHeight]="20" (change)="hasChanged()"></systelab-select>
```

Values is an array of objects that must have and id and a description. For example:

```
this.values = [
  { id: 1, description: this.i18nService.instant('COMMON_YES') },
  { id: 2, description: this.i18nService.instant('COMMON_NO') }
];
```

Apart from the standard select, some predefined selects are provided: systelab-all-yes-no-select, systelab-gender-select, systelab-no-yes-select and systelab-period-select.

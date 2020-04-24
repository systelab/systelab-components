# systelab-chips

Systelab Chips is an input component that provides real-time suggestions when being typed.

## Using the template

```html
<systelab-chips [texts]="texts" [disabled]="disabled" [readonly]="readonly"></systelab-chips>
```
The Input texts is an array string value in order to receive a list of texts to suggest.

The Input disabled is a boolean value in order to make the component disable. By default is false.

The Input readonly is a boolean value in order to make the component readonly. By default is false.

If you want the defaults the template will look like:

```html
<systelab-chips [texts]="texts"></systelab-chips>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| texts | Array  |  | Array structure must have a Array\<string\> |
| disabled | boolean | false | Set to true if it could not be changed. Otherwise set to false |
| readonly | boolean | false | Set to true if it could not be readable. Otherwise set to false |

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| suggestionsResult | | Event emitted with the suggestions result  |


The styles are defined in the chips.scss Saas file.

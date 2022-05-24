# systelab-toggle-selector

Component to show a selector to choose between different options.

## Using the template


```html
<systelab-toggle-selector [options]="options" [currentOption]="currentOption" 
                          (select)="doSomething($event)">
</systelab-toggle-selector>
```

The systelab-toggle-selector component has two Inputs, one with the available options and another one for the selected option, in this case the id.

Options is an array of elements implementing the interface ToggleSelectorOption, that defines two attributes, id and name.

The systelab-toggle-selector component has an Output in order to notify that an option has been selected. In the $event parameter, the selected option id will be sent.



## Properties


| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| options | Array&lt;ToggleSelectorOption&gt; | empty | Array of options. |
| currentOption | string | undefined | Set the id of the option to be highlighted.  |

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| select | string | The selected Option Id |



The styles for the toggle selector are defined in the toggle-selector.scss Saas file.



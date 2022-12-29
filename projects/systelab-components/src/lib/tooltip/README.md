# systelab Tooltip

Directive to show tooltip on hover event. Tooltip can contain a text or HTML

## Using the Directive

```html
    <button type="button" class="btn" systelabTooltip="Tooltip on top">Tooltip on top</button>
    <button type="button" class="btn" systelabTooltip="Tooltip on right" systelabTooltipPlacement="right">Tooltip on right</button>
    <button type="button" class="btn" systelabTooltip="Tooltip on bottom" systelabTooltipPlacement="bottom">Tooltip on bottom</button>
    <button type="button" class="btn" systelabTooltip="Tooltip on left" systelabTooltipPlacement="left">Tooltip on left</button>
    <button type="button" class="btn" systelabTooltipHtml="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>

```

Use systelabTooltip to show a tooltip with a text. 

Use systelabTooltipHtml to show a tooltip with HTML. 

Use systelabTooltipPlacement to indicate the placement of the tooltip. Possible values for placement are: top (default), right, bottom. left.

Use systelabTooltipDelay to indicate delay showing the combo in ms. Default is 1000 ms.

Use systelabTooltipHideDelay to indicate delay hiding the combo in ms. Default is 1000 ms.


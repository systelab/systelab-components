# systelab-chips

Systelab Chips is an input component that provides real-time suggestions when being typed.

It is implemented with plain Angular and TypeScript (it does not use PrimeNG anymore): the state is kept in **signals**
and the component runs with `ChangeDetectionStrategy.OnPush`.

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
| filtered | Array\<string\> | Event emitted with the result  |

## Behaviour

- Typing one character or more shows, after 300 ms without typing, the suggestions of `texts` containing the text
  (case insensitive). The panel is not shown when nothing matches.
- **Enter** adds the highlighted suggestion when the panel has been navigated with the keyboard, and the text typed
  otherwise. **Click** over a suggestion adds it.
- **Arrow down / Arrow up** move the highlighted suggestion, **Escape** closes the panel, and **Backspace** over an empty
  input removes the last chip.
- The `×` of a chip removes it. It is not rendered when the component is disabled or readonly.
- Clicking anywhere in the container gives the focus to the input. Clicking outside the component, losing the focus of
  the input and resizing the window close the panel.

## Public API

| Name | Description |
| ---- | ----------- |
| filter | Array\<string\> with the values of the chips. Assigning it emits `filtered` |
| results | Array\<string\> with the suggestions currently offered |
| search({query}) | Recalculates `results` for a query |
| show() / hide() | Opens / closes the suggestions panel |
| panelVisible, showPanel, highlightedIndex, focus | State of the panel and of the input |

## Styles

The styles are defined in the chips.scss Sass file. The classes are `slab-chips-container` (with the
`slab-chips-focus`, `slab-chips-disabled` and `slab-chips-readonly` modifiers), `slab-chips-chip` (with
`slab-chips-chip-label` and `slab-chips-chip-remove`), `slab-chips-input-chip`, `slab-chips-input`, and
`slab-chips-panel` with `slab-chips-list` and `slab-chips-item` (highlighted with `slab-chips-item-highlighted`).

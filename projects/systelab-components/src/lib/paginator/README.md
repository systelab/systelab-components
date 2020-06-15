# systelab-paginator

Page navigation component

## Using the template

```html
<systelab-paginator [(page)]="currentPage" [pagesToShow]="15" [showFirstLastButtons]="true" [showNextPreviousButtons]="true"
                    [totalPages]="45"></systelab-paginator>
```

Properties page, pagesToShow and totalPages are mandatory.

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **page** | number | 1 | The current page |
| totalPages | number | 1 | Total pages |
| pagesToShow | number | 11 | Window of pages shown in the component |
| showFirstLastButtons | boolean | true | If true first and last button are shown |
| showNextPreviousButtons | boolean | true | If true previous and next button are shown |

In black the Two-Way Data Binding properties.



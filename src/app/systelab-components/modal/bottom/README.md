# systelab-dialog-bottom

Convenient component to create a dialog bottom flex container.

## Using the template

```html
<systelab-dialog-bottom>
...
</systelab-dialog-bottom>
```

Usually, you will place the dialog buttons. For example:

```html
<systelab-dialog-bottom>
    <button type="button" class="btn mr-1" (click)="submit()">Options</button>
    <button type="button" class="btn" (click)="submit()">More</button>
    <button type="button" class="btn ml-auto" (click)="submit()">Submit</button>
</systelab-dialog-bottom>

```

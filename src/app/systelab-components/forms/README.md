# Forms

In order to do a form, it is suggested to use the Bootstrap's grid system and include some specific styles included in the library.

Regarding the Bootstrap's grid system, you must consider:

- Containers provide a means to center your site’s contents. Use .container for fixed width or .container-fluid for full width.
- It’s based on a 12 column layout
- Rows are horizontal groups of columns that ensure your columns are lined up properly. We use the negative margin method on .row to ensure all your content is aligned properly down the left side.
- Content should be placed within columns, and only columns may be immediate children of rows.
- Thanks to flexbox, grid columns without a set width will automatically layout with equal widths. For example, four instances of .col-sm will each automatically be 25% wide for small breakpoints.
- Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns, you can use .col-sm-4.
- Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.
- Columns have horizontal padding to create the gutters between individual columns, however, you can remove the margin from rows and padding from columns with .no-gutters on the .row.
- There are five grid tiers, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.
- Grid tiers are based on minimum widths, meaning they apply to that one tier and all those above it (e.g., .col-sm-4 applies to small, medium, large, and extra large devices).

> Also, please take into account that is very important to put a div with the col size and do not put the class in the input element.

Here is an example:

```html
<div class="container-fluid">
    <form class="p-2">

        <label class="slab-form-title">Section title</label>

        <div class="row mt-1">
            <label for="field-1" class="col-md-2 slab-label">Line 1</label>
            <div class="col-md-10">
                <input type="text" class="form-control" id="field-1" name="field-1">
            </div>
        </div>

        <div class="row mt-1">
            <label for="field-2a" class="col-md-2 slab-label">Line 2.a</label>
            <div class="col-md-4">
                <input type="text" class="form-control" id="field-2a" name="field-2a">
            </div>
            <label for="field-2b" class="col-md-2 slab-label">Line 2.b</label>
            <div class="col-md-4">
                <input type="text" class="form-control" id="field-2b" name="field-2b">
            </div>
        </div>

    </form>
</div>
```

> It is very important to use the class **.slab-label** (or **.slab-label-115** or **.slab-label-165** or **.slab-label-215**) for the labels and the class **.form-control** for the controls.

Use slab-form-title class for the section titles.

It could be useful, but it is not necessary add for each row, the class align-items-center or align-items-top in order to vertically align the label.

## Inline Forms

Use the .form-inline class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.

- Controls are display: flex, collapsing any HTML white space and allowing you to provide alignment control with spacing and flexbox utilities.
- Controls and input groups receive width: auto to override the Bootstrap default width: 100%.
- Controls only appear inline in viewports that are at least 576px wide to account for narrow viewports on mobile devices.

```html
<form class="form-inline ml-auto">
    <label for="valueToSearch" class="mr-2">Find by </label>
    <input type="text" class="form-control" #valueToSearch>
</form>
```

In that case, ml-auto aligns the components on the right.

The styles for the forms are defined in the forms.scss Saas file.



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


Here is an example:

```html
<div class="container-fluid">
    <form class="p-2">

        <label class="slab-form-title">Section title</label>

        <div class="row align-items-center mt-1">
            <label for="field0" class="col-md-2 slab-label slab-label-165 text-truncate">Line 1</label>
            <div class="col-md-10">
                <input type="text" class="form-control" id="field0" name="field0">
            </div>
        </div>

        <div class="row align-items-center mt-1">
            <label for="field1" class="col-md-2 slab-label slab-label-165 text-truncate">Line 2</label>
            <div class="col-md-5">
                <input type="text" class="form-control" id="field1" name="field1">
            </div>
            <label for="field2" class="col-md-1 slab-label text-truncate">Field 2</label>
            <div class="col-md-4">
                <input type="text" class="form-control" id="field2" name="field2">
            </div>
        </div>

        <div class="row align-items-center mt-1">
            <label class="col-md-2 slab-label slab-label-165 text-truncate">Line 7</label>
            <div class="col-md-5">
                <systelab-select></systelab-select>
            </div>
            <label class="col-md-1 slab-label text-truncate">Field 2</label>
            <div class="col-md-4">
                <systelab-select></systelab-select>
            </div>
        </div>
    </form>
</div>
```

Use slab-form-title class for the section titles.
Use slab-label or slab-label-xxx  classes for the labels.

The styles for the forms are defined in the forms.scss Saas file.



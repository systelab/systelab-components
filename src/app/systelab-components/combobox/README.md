# systelab-combobox

Abstract classes that lets you create a Combobox component.

## Using the classes

This is not a component by itself, they are some Abstract classes that lets you define your own comboboxes.

In order to do that, you must create your own components and extend from the abstract classes AbstractComboBox&lt;T&gt;, AbstractApiComboBox&lt;T&gt;, AutocompleteApiComboBox&lt;T&gt; and AbstractApiTreeComboBox&lt;T&gt;.

## Using AbstractComboBox&lt;T&gt;

In order define a simple combobox, you must create your own component and extend from the abstract class AbstractComboBox&lt;T&gt;, implementing the following methods:

```
public abstract getInstance(): T;
public abstract getDescriptionField(): string;
public abstract getCodeField(): string;
public abstract getIdField(): string;
```


For example:

```
class MaritalStatus {
    constructor(public id: string, public description: string) {
    }
}

@Component({
    selector:    'marital-status-combobox',
    templateUrl: '../../../../../node_modules/systelab-components/html/abstract-combobox.component.html'
})

export class MaritalStatusComboBox extends AbstractComboBox<MaritalStatus> {

    constructor(myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService) {
        super(myRenderer, chRef);
        this.values = new Array<MaritalStatus>();
        this.values.push(new MaritalStatus('1', 'Single'));
        this.values.push(new MaritalStatus('2', 'Married'));
        this.values.push(new MaritalStatus('3', 'Widowed'));
        this.values.push(new MaritalStatus('4', 'Divorced'));
        this.values.push(new MaritalStatus('5', 'Separated'));
        this.values.push(new MaritalStatus('6', 'Registered partnership'));
    }

    getInstance(): MaritalStatus {
        return new MaritalStatus('0', 'Unknown');
    }

    getDescriptionField(): string {
        return 'description';
    }

    getCodeField(): string {
        return '';
    }

    getIdField(): string {
        return 'id';
    }
}

```


## Using AbstractApiComboBox&lt;T&gt; and AutocompleteApiComboBox&lt;T&gt;

In order to create a combobox with data coming from a Server API, you must create your own component and extend from the abstract class AbstractApiComboBox&lt;T&gt;, implementing the following methods:

```
public abstract getInstance(): T;
public abstract getDescriptionField(): string;
public abstract getCodeField(): string;
public abstract getIdField(): string;
public abstract getData(page: number, itemsPerPage: number, startsWithParameter: string): Observable<Array<T>>;
public abstract getTotalItems(): number;
```

For example:

```
class Laboratory {
    constructor(public id: string, public description: string) {
    }
}

@Component({
    selector: 'laboratory-combobox',
    templateUrl: '../../../../../node_modules/systelab-components/html/abstract-combobox.component.html'
})

export class LaboratoryComboBox extends AbstractApiComboBox<Laboratory> {

    private totalItems=0;

    constructor(myRenderer: Renderer2, public chref: ChangeDetectorRef, public api: LaboratoryApi) {
        super(myRenderer, chref);
    }

    public getInstance() {
        return new Laboratory('','');
    }

    public getDescriptionField(): string {
        return 'description';
    }

    public getCodeField(): string {
        return null;
    }

    public getIdField(): string {
        return 'id';
    }

    public getData(page: number, itemsPerPage: number): Observable<Array<Laboratory>> {
        return this.api.getLaboratoryList(page,itemsPerPage).pipe(map((value) => {
            this.totalItems = value.totalElements;
            return value.content;
        }));
    }

    public getTotalItems(): number {
        return this.totalItems;
    }
}
```

> Be aware that the first page will be page 1.

## Using AbstractApiTreeComboBox&lt;T&gt;

In order to create a tree-combobox with data coming from a Server API, you must create your own component and extend from the abstract class AbstractApiTreeComboBox&lt;T&gt;, implementing the following methods:

```
public abstract getData(): Observable<Array<T>>;
public abstract getTotalItems(): number;
public abstract getLevelDescriptionField(level: number): string;
public abstract getLevelIdField(level: number): string;
public abstract getAllNodeId(): string | number;
public abstract getAllNodeDescription(): string;
```

## Using a Combo with custom input color
In order to use a combobox with a custom input text color you must set the input property "inputColor" with a string value that must 
represent as a rgb code or hex code the color that must be displayed the text.

## Using a Combo with icons
In order to set an icon at the end of the input text box (similar as favourites), you must use the input property "withIcon" as true 
and set the property "iconClass" with the icon that you want to show (for example, if we want to show an engine icon: 'icon-gear').
This icon will be displayed with the color of the input text by default, but you can set a different color using the
"iconColor" to change the color of the icon.

## Using a Combo with Favourites

In order to create a combobox with favourites you must set the input property "withFavourites" as true, and in your component add 
a new service, "PreferencesService", and set it in the **constructor**, and it's necessary to set a **preferenceName** input.

## Using a Combo with reset combo option
In order to put the combo in blank or with the initial value, you must set the property "withDeleteOption" as true. This option will show a X in the combo just in case that a value is selected. If is defined the params "defaultIdValue", "defaultDescription" or "defaultCode", the id, description and code will be set to this values.
If you are using a multiple selection combobox, all items selected will be deleted.
If you are using a combobox without blank value, the default option will be selected.

## Using AbstractApiTreeComboBox&lt;T&gt; with Favourites

Follow the same steps than in a normal combo, but you must rewrite a function, *getFavouriteText*, to define the text that will be shown in the
favourite elements in the tree.

## Using your component
Once you have your component, you can use it in your templates.

```
<marital-status-combobox #combo [(id)]="value" [(description)]="valueDescription">
</marital-status-combobox>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **id** | string | | Identifier |
| **description** | string | | Description or name that will be shown in the combobox |
| **code** | string | | Short code |
| **fieldToShow** | string | | Description or name for autocomplete combobox|
| **multipleSelectedItemList** | Array<T> | | Array with selected elements for comboboxes with selection multiple|
| customInputRenderer | any | | Class of the component with a custom renderer for the combo input field. This class must extend ComboBoxInputRenderer class|
| initialParams | any | | Class with the initial params of the component defined in customInputRender property |
| filter | boolean | false | If true adds an input field inside dropdown to search elements. Use it only in combos that extends from AbstractComboBox. Do not use with AbstractApi combos|
| multipleSelection | boolean | false | Enable to select multiple elements. A checkbox will be rendered in front of each element. |
| selectDeselectAll | boolean | false | For a multiple selection combobox, set if a 'Select All' and 'Un-select all' should be shown inside the dropdown of the combo. Use it only in combos that extends from AbstractComboBox. Do not use with AbstractApi combos|
| listSelectedValues | boolean | false | Shows the selected values at the bottom of the combobox. Use it only in combos that extends from AbstractComboBox. Do not use with AbstractApi combos|
| fontFamily | string | | Font Family |
| fontSize | string | | Font size in pixels |
| fontWeight | string | | normal, bold, bolder, lighter, number, initial or inherit |
| fontStyle | string | | normal, italic, oblique, initial or inherit |
| values | Array<any> | | Array with the elements of the combobox. Use it only in combos that extends from AbstractComboBox. Do not use with AbstractApi combos|
| isDisabled | boolean | false | If true the combo is disabled|
| expandToParentContainerHeight | boolean | false | If true the combo expands its height to parent container height|
| emptyElement | boolean | false | If true adds and emtpy element at the first position of the elements list in the dropdown. Use it only in combos that extends from AbstractApiComboBox or AbstractApiTreeComboBox. Never use it with multipleSelection property|
| allElement | boolean | false | If true adds an element that represents the "all" element at the first position of the elements list in the dropdown (the second if the emptyElement is also set to true). Use it only in combos that extends from AbstractComboBox or AbstractApiComboBox. It can be used with multipleSelection property. In this last case, if the "all" element is selected no other option will remain selected. Reversely, if the "all" element is selected and the user select any other option, then the "all" element is deselected. |																																																																																																																																								
| withFavourites | boolean | false | Used to activate and deactivate the favourites |
| withDeleteOption | boolean | false | Used to activate and deactivate the reset combo option |
| defaultIdValue | string | | Used to define the default id of the combo |
| defaultDescription | string | | Used to define the default description selected of the combo |
| defaultCode | string | | Used to define the default code selected of the combo |
| preferencesName | string | '' | Preference name over will be saved the preferences |

In black the Two-Way Data Binding properties.


For the Tree-Combobox, consider also the following properties:

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| isParentSelectable | boolean | false | Set if parent nodes are selectable. |
| isAllSelectable | boolean | true | Set if the All node is selectable. |


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| selectedItemChange | T | Emits the selected element of type <T>. Only for combos with multipleSelection=false.|
| change | T | (DEPRECATED) Emits the selected element of type <T>. Only for combos with multipleSelection=false.|
| multipleSelectedIDListChange | Array<string &#124; number> | Emits an array with the ids of selected elements.|
| multipleSelectedItemListChange | Array<T> | Emits an array with selected elements of type <T>.|

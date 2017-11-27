# systelab-combobox

Abstract class that lets you create a Combobox component.

## Using the class

This is not a component by itself, it is an Abstract class that lets you define your own comboboxes.

In order to do that, you must create your own component and extend from the abstract class AbstractApiComboBox&lt;T&gt;. The following methods have to be implemented:
```
public abstract getInstance(): T;
public abstract getDescriptionField(): string;
public abstract getCodeField(): string;
public abstract getIdField(): string;
public abstract getData(page: number, itemsPerPage: number, startsWithParameter: string): Observable<Array<T>>;
public abstract getTotalItems(): number;
```

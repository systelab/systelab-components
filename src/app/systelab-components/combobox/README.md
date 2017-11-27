# systelab-comboboxes

Component to choose between different predefined options.

## Using the component

This is not a component by itself, it is an Abstract classes that lets you define your own comboboxes.

In order to do that, you must create your own component and extend from the abstract class AbstractApiComboBox<T>. The following methods have to be implemented:
```
public abstract getInstance(): T;
public abstract getDescriptionField(): string;
public abstract getCodeField(): string;
public abstract getIdField(): string;
public abstract getData(page: number, itemsPerPage: number, startsWithParameter: string): Observable<Array<T>>;
public abstract getTotalItems(): number;
```

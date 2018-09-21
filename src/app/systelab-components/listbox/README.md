# systelab-listbox

Abstract classes that lets you create a Listbox component.

## Using the classes

This is not a component by itself, they are some Abstract classes that lets you define your own listboxes.

In order to do that, you must create your own components and extend from the abstract classes AbstractListBox&lt;T&gt;, AbstractApiListBox&lt;T&gt; and AbstractApiTreeListBox&lt;T&gt;.

## Using AbstractListBox&lt;T&gt;

In order define a simple combobox, you must create your own component and extend from the abstract class AbstractApiListBox&lt;T&gt;, implementing the following methods:

```
protected abstract getData(): Observable<Array<T>>;
public abstract setSelectionList(selectedIDList: string);
public abstract getSelectionList(): string;
protected abstract getDescriptionField(level?: number): string;
protected abstract getIdField(level?: number): string;
```


For example:

```


```


## Using AbstractApiListBox&lt;T&gt;

In order to create a listbox with data coming from a Server API, you must create your own component and extend from the abstract class AbstractApiListBox&lt;T&gt;, implementing the following methods:

```


```

For example:

```



```

> Be aware that the first page will be page 1.

## Using AbstractApiTreeListBox&lt;T&gt;

In order to create a tree-listbox with data coming from a Server API, you must create your own component and extend from the abstract class AbstractApiTreeListBox&lt;T&gt;, implementing the following methods:

```


```

## Using your component
Once you have your component, you can use it in your templates.

```


```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **id** | string || Identifier |
| **description** | string || Description or name that will be show in the listbox |
| values | Array&lt;ListBoxElement or TreeListBoxElement&gt; |||
| prefixID | string ||  |
| **multipleSelectedItemList** | Array&lt;ListBoxElement or TreeListBoxElement&gt; ||  |
| **selectedIDList** | string ||  |
| isDisabled | boolean ||  |
| multipleSelection | boolean |false|  |
| emptySelection | boolean |true|  |


In black the Two-Way Data Binding properties.

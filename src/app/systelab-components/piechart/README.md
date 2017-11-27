# systelab-pie

Component to show a pie chart

## Using the template

```
<systelab-pie [data]="data" (select)="doSelect($event)" [fixedWidth]="1000" [fixedHeight]="500"></systelab-pie>
```

Define in the component class, the Input and the Ouput method.

```
public data: PieElement[] = [];

public ngOnInit() {
  this.data.push(new PieElement('id1', 120, '#FFDAB9', 'ACTION1'));
  this.data.push(new PieElement('id2', 100, '#E6E6FA', 'ACTION2'));
  this.data.push(new PieElement('id3', 300, '#E0FFFF', 'ACTION3'));
}
  
public doSelect(action: string) {
  console.log(action);
}

```

Do not use colour names. Use the old hex codes.

import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {
    ToggleSelectorOption
} from "../../../../../systelab-components/src/lib/toggle-selector/toggle-selector.component";

@Component({
    selector: 'showcase-reactive-forms',
    templateUrl: './showcase-reactive-forms.component.html',
    standalone: false
})
export class ShowcaseReactiveFormsComponent implements OnInit {

    public comboOptionList: Array<Object> = [];
    public myForm: FormGroup;
    public options: Array<ToggleSelectorOption> = [];

    constructor(private fb: FormBuilder) {
        this.comboOptionList = [
            {description: 'New York', id: 1},
            {description: 'Rome', id: 2},
            {description: 'London', id: 3},
            {description: 'Barcelona', id: 4},
            {description: 'París', id: 5},
            {description: 'Berlín', id: 6},
            {description: 'Oslo', id: 7},
            {description: 'Atenas', id: 8},
            {description: 'Lisboa', id: 9},
            {description: 'Amsterdam', id: 10},
            {description: 'St Petersburgo', id: 11}
        ];

        this.options.push({ id: '1', name: 'All' });
        this.options.push({ id: '2', name: 'Only A' });
        this.options.push({ id: '3', name: 'Only B' });

        this.myForm = this.fb.group({
            name :[{value: 'Homer Simpson', disabled: true}],
            textArea: [{value: 'This is a text area', disabled: true}],
            mySelectField: [{ value: { id: null, description: '' }, disabled: true }],
            myCheck1: [{ value: true, disabled: false }],
            myCheck2: [{ value: false, disabled: false }],
            myCheck3: [{ value: true, disabled: true }],
            myCheck4: [{ value: false, disabled: true }],
            myRadio1: [{ value: 'urgent', disabled: false }],
            mySwitch: [{ value: false, disabled: false }],
            mySwitch2: [{ value: false, disabled: true }],
            mySwitch3: [{ value: true, disabled: false }],
            mySwitch4: [{ value: true, disabled: true }],
            myToggleSelector: [{ value: '2', disabled: false }],
            myDateTime: [{ value: new Date(), disabled: true }],
        });

    }

    public ngOnInit(): void {
        this.initSwitcherValues();
    }

    public comboChangeEvent(event: any): void {
        console.log('Event: ', event);
        console.log('Form Value: ', this.myForm.value);
    }

    public doSomething(event: any): void {
        console.log('doSomething event: ', event);
    }

    private initSwitcherValues(): void {
        this.myForm.patchValue({
            mySelectField: this.comboOptionList[3],
            mySwitch: true,
            mySwitch2: false,
            mySwitch3: true,
            mySwitch4: false,
        });
        this.myForm.get('mySwitch')?.enable();
        this.myForm.get('mySwitch2')?.enable();
        this.myForm.get('mySwitch3')?.disable();
        this.myForm.get('mySwitch4')?.disable();
    }


}
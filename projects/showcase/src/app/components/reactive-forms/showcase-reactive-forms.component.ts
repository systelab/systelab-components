import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'showcase-reactive-forms',
    templateUrl: './showcase-reactive-forms.component.html'
})
export class ShowcaseReactiveFormsComponent implements OnInit {

    public comboOptionList: Array<Object> = [];
    public myForm: FormGroup;

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
        this.myForm = this.fb.group({
            mySelectField: [{ value: { id: null, description: '' }, disabled: true }],
            mySwitch: [{ value: false, disabled: false }],
            mySwitch2: [{ value: false, disabled: true }],
            mySwitch3: [{ value: true, disabled: false }],
            mySwitch4: [{ value: true, disabled: true }],
        });
    }

    public ngOnInit(): void {
        this.initSwitcherValues();
    }

    public comboChangeEvent(event: any): void {
        console.log('Event: ', event);
        console.log('Form Value: ', this.myForm.value);
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
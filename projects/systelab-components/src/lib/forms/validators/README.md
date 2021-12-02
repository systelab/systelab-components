# Validators

Custom validators to validate inputs. Available validators are for email, phone and url. 
The validators can be used with Reactive Forms and Template-driven Forms.

## Using validators on Templete-driven form

You can use validation on the template using any of the directives available: emailValidator, phoneValidator or urlValidator.

```Html
<input [(ngModel)]="info.email" name='email' emailValidator
     #emailInput="ngModel" class="form-control" placeholder="Email" id="full-width-input">
<div *ngIf="emailInput.errors?.email"> 
     Email not valid.
</div>	
```

```Html
<input [(ngModel)]="info.phone" name='phone' phoneValidator
    #phoneInput="ngModel" class="form-control" placeholder="Phone" id="full-width-input">
<div [hidden]="phoneInput.valid || phoneInput.pristine"> 
    Phone not valid.
</div>	
```

```Html
<input [(ngModel)]="info.url" name='url' urlValidator
    #urlInput="ngModel" class="form-control" placeholder="Url" id="full-width-input">
<div *ngIf="urlInput.errors?.url"> 
    Url not valid.
</div>
```

## Using validators on Reactive forms
You can use validation on the reactive forms by setting the validator function when construct the form

```typescript
inputValidationForm = this.formBuilder.group({
    email :['', emailValidator],
    phone :['', phoneValidator],
    url :['', urlValidator],
  })
  ```
```Html
<input formControlName="email" class="form-control" 
    placeholder="Email" id="full-width-input">
<div *ngIf="email?.errors?.email"> 
    Email not valid.
</div>	
```

```Html
<input formControlName="phone" class="form-control" 
    placeholder="Phone" id="full-width-input">
<div [hidden]="phone.valid || phone.pristine"> 
    Phone not valid.
</div>
```

```Html
<input formControlName="url" class="form-control" 
    placeholder="Url" id="full-width-input">
<div *ngIf="url?.errors?.url">  
    Url not valid.
</div>
```

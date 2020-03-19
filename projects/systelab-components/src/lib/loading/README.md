# systelab-loading

Component to show a loading wheel.

Sometimes, when submitting a form or loading information, content should be disabled as no user interaction is allowed.

## Using the template

Systelab loading component is usually set in the main template of the application in order to disable the whole application. 

LoadingService is a service to be injected in order to invoke the following methods:
 
 | Name | Returns | Description |
 | ---- |:--------:| ----------- |
 | setLoading() | void | Sets the component as in loading state |
 | removeLoading() | void | Remove the loading state of the component |
 | isLoading() | boolean | Returns true if the component is in loading state, false otherwise |
 
 ```
selector: 'main-router-app',
template: `
               <systelab-loading *ngIf="loadingService.isLoading()"></systelab-loading>
               <router-outlet></router-outlet>`
 ```
 
 Another option could be use *ngIf with another component property
 
  ```
  <systelab-loading *ngIf="myComponentIsLoading"></systelab-loading>
  ```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| useClassic | boolean | false | To change the wheel look and feel. |

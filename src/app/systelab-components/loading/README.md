# systelab-loading

Component to show a loading wheel.

Sometimes when user submits a form or the application is loading is needed to disable the content of the whole application in order to avoid user interactions with the UI while the process of the submit or loading ends.

## Using the template

Systelab loading component is usually set in the main template of the application in order to disable the whole application. To viwe loading 

Exists a service called LoadingService to be injected in the components. LoadingService has the folllowing methods:
 
 | Name | Returns | Description |
 | ---- |:--------:| ----------- |
 | setLoading() | void | Sets the component as in loading state |
 | removeLoading() | void | Remove the loading state of the component |
 | isLoading() | boolean | Returns true if the component is in loading state, false if not  |
 
 ```
selector: 'main-router-app',
template: `
               <systelab-loading *ngIf="loadingService.isLoading()"></systelab-loading>
               <router-outlet></router-outlet>`
 ```
 
 It also can be used without LoadingService, with *ngIf with another component property
 
  ```
  <systelab-loading *ngIf="myComponentIsLoading"></systelab-loading>
  ```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| useClassic | boolean | false | To change the wheel look and feel. |

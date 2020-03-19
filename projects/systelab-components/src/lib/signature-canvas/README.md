# systelab-signature-canvas

Component to show a canvas where the user can draw their signature. Also this component include the option to add a second signature, requesting the user to enter a code o a password o whatever you need to do the double-check.

## Using the component

```html
<systelab-signature-canvas [withCodeVerification]="withCodeVerification" [height]="height" [width]="width" [isDownloadable]="isDownloadable"
    (finish)="doFinish($event)" [(signature)]="signature" [(code)]="code" [isIncorrectCode]="isIncorrectCode"></systelab-signature-canvas>
```
## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| withCodeVerification | boolean | false | Request a second signature |
| isDownloadable | boolean | false | Provide the option to download the canvas content as a image |
| code | string | |Field in which is going to be notified the value of the second signature |
| signature | boolean |  | Field in which is going to be notified the draw made by the users representing their signature |
| height | number |  | the height of the canvas |
| width | number | 400 | The width of the canvas |
| isIncorrectCode | boolean | false | If the second verification fails |

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| doFinish ||If the second verification is activated this will happen when the user enter the code/password that you requested and press the verification button, else the event will be performed when the user press in the Finish button.|


## Translations

- SIGN_VERIFICATION_TEXT
- SIGN_RETURN
- SIGN_ERROR_ENTERED_CODE
- SIGN_VERIFY
- SIGN_DOWNLOAD
- SIGN_FINISH
- SIGN_CLEAN
- SIGN_TEXT_EXPLANATION

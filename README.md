# systelab-components

Library with common UI components to speed up your Angular developments. You can take a look to the components in our showcase at https://systelab.github.io/systelab-components-dist/

## Using the library

First, you have to add the package in your package.json

```bash
npm install systelab-components --save
```

After, you must add the following styles and scripts in the .angular-cli.json file,

```javascript
"styles": [
        "../node_modules/ag-grid/dist/styles/ag-grid.css",
        "../node_modules/ag-grid/dist/styles/theme-fresh.css",
        "../node_modules/primeng/resources/themes/omega/theme.css",
        "../node_modules/primeng/resources/primeng.min.css",
        "../node_modules/systelab-components/icons/icomoon.css"
      ],
"scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/popper.js/dist/umd/popper.js",
        "../node_modules/bootstrap/dist/js/bootstrap.js",
        "../node_modules/pako/dist/pako.min.js",
        "../node_modules/nanobar/nanobar.js"
      ],
```

After, you must import SystelabComponentsModule, as well as other libraries, in your Application Module:
```javascript
NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		SystelabTranslateModule.forRoot(),
		SystelabPreferencesModule.forRoot(),
		SystelabComponentsModule.forRoot(),
		SystelabLoginModule.forRoot(),
    ...
```

and add MessagePopupService and DialogService as providers.

```javascript
providers: [
	MessagePopupService,
	DialogService
],
```

Finally, you must import the systelab-bootstrap-settings, bootstrap and systelab-components sass files in the styles of your main component, and make them visible for all your components.

In the following example, for the component AppComponent, we have created and added the sass file app.component.scss. Also we have set the encapsulation as None.

```javascript
@Component({
	selector:      'app-root',
	templateUrl:   'app.component.html',
	styleUrls:     ['app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {

	public currentTab = 1;

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService) {
        ...
	}
}
```

In the sass file app.component.scss, we have imported the bootstrap and systelab-component sass styles.

```sass
@import "../systelab-components/styles/sass/systelab-bootstrap-settings";
@import "../../../node_modules/bootstrap/scss/bootstrap";
@import "../systelab-components/styles/sass/systelab-components";
```

To change the default Bootstrap or systelab-components settings like colors, border-radius, etc, add or change the value of the property in the scss file before importing the standard. For example:

```sass
$size_percentage: 1;
$primary-color: rgb(0, 154, 181);

@import "../systelab-components/styles/sass/systelab-bootstrap-settings";
@import "../../../node_modules/bootstrap/scss/bootstrap";
@import "../systelab-components/styles/sass/systelab-components";
```

All values defined in Bootstrap [_variables.scss](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss) and systelab-components [_variables.scss](src/app/systelab-components/styles/sass/_variables.scss) can be overwritten here.

Anyway, think it twice before you change this settings and think in the value of having a homogeneous look and feel.

## Working with the repo


```bash
git clone https://github.com/systelab/systelab-components.git
cd systelab-components
npm install
ng serve
```

This will bootstrap a showcase application to test the different components.

In order to publish the library, an authorized npm user is required. Once set, update the version in the package.json, and run the npm publish script:

```npm
npm publish
```

Be careful because temporary folders will be created (build, css, html, widgets,...) and this files should be untracked as it is specified in the gitignore file.

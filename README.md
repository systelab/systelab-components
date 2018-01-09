# systelab-components

Library with common UI components to speed up your Angular developments. You can take a look to the components in our showcase at https://systelab.github.io/systelab-components-dist/

## Installing the library

The first steep will be to add the package in your package.json

```bash
npm install systelab-components --save
```

After, you must add the following styles and javascripts in the .angular-cli.json file, 

```javascript
"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.css",
        "../node_modules/ag-grid/dist/styles/ag-grid.css",
        "../node_modules/ag-grid/dist/styles/theme-fresh.css",
        "../node_modules/primeng/resources/themes/omega/theme.css",
        "../node_modules/primeng/resources/primeng.min.css",
        "../node_modules/systelab-components/css/systelab-components.css",
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

Finally, you must import SystelabComponentsModule, as well as other libraries, in your Application Module:
```javascript
@NgModule({
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

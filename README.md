# systelab-components

Library with common Systelab components to speed up our Angular developments

## Installing the library

The first steep will be to add the package in your package.json

```bash
npm install systelab-components --save
```

After this, in the .angular-cli.json you must add the following styles and javascripts:

```
"styles": [
        "../node_modules/uikit/dist/css/uikit.almost-flat.css",
        "../node_modules/ag-grid/dist/styles/ag-grid.css",
        "../node_modules/ag-grid/dist/styles/theme-fresh.css",
        "../node_modules/primeng/resources/themes/omega/theme.css",
        "../node_modules/primeng/resources/primeng.min.css",
        "../node_modules/systelab-components/css/systelab-components.css",
        "../node_modules/systelab-components/icons/icomoon.css"
      ],
"scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/uikit/dist/js/uikit.js",
        "../node_modules/pako/dist/pako.min.js"
      ],
```

Finally, you must import the SystelabComponentsModule in your Application Module:

```
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

## Working with the repo


```bash
git clone https://github.com/systelab/systelab-components.git
cd systelab-components
npm install
ng serve
```

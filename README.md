[![Codacy Badge](https://api.codacy.com/project/badge/Grade/552f28d2a1834de2856f8d6e1ff5bb3a)](https://app.codacy.com/app/alfonsserra/systelab-components?utm_source=github.com&utm_medium=referral&utm_content=systelab/systelab-components&utm_campaign=badger)
[![Build Status](https://travis-ci.org/systelab/systelab-components.svg?branch=master)](https://travis-ci.org/systelab/systelab-components)
[![codecov](https://codecov.io/gh/systelab/systelab-components/branch/master/graph/badge.svg)](https://codecov.io/gh/systelab/systelab-components)
[![npm version](https://badge.fury.io/js/systelab-components.svg)](https://badge.fury.io/js/systelab-components)
[![Known Vulnerabilities](https://snyk.io/test/github/systelab/systelab-components/badge.svg?targetFile=package.json)](https://snyk.io/test/github/systelab/systelab-components?targetFile=package.json)

# systelab-components

Library with common UI components to speed up your Angular developments. You can take a look to the components in our showcase at https://systelab.github.io/components. 
Read the documentation at https://github.com/systelab/systelab-components/tree/master/projects/systelab-components

## Working with the repo

In order to clone the repository and test the library use the following commands:

```bash
git clone https://github.com/systelab/systelab-components.git
cd systelab-components
npm install
npm run build-lib
ng serve
```
This will bootstrap a showcase application to test the different components.


Use watch in the library build to detect file changes automatically (except from css). Start application in a different terminal:

Terminal 1
```bash
ng build systelab-components --watch
```
Terminal 2
```bash
ng serve
```


## Test

### Unit

```bash
ng test
```

### E2E
For E2E testing purposes, the strategy chosen is Snapshot Testing.

Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case for a mobile app renders a UI component, takes a screenshot, then compares it to a reference image stored alongside the test. The test will fail if the two images do not match: either the change is unexpected, or the screenshot needs to be updated to the new version of the UI component.

In order to run the test, run the command:

```bash
ng e2e
```

If you want to update the snapshots, run the command:

```bash
npm run update-snapshots
```

## Publish the Library

In order to publish the library, an authorized npm user is required. Once set, update the version in the package.json, and run the npm publish script:

```bash
npm build-lib
cd dist/systelab-components
npm publish
```

# Breaking changes

## Version 10
Many changes where introduce in version 10 in order to standardize the library and support Angular 9.
The following steps should be consider when migrating from version 9.

1. When importing the module do not use .forRoot(); In WebStorm, replace in path:
```
- SystelabComponentsModule.forRoot\(\)
- SystelabComponentsModule
```
2. When importing services and modules import them from systelab-components root. In WebStorm, replace in path:
```
- from 'systelab-components/lib.+ 
- from 'systelab-components';
```

3. DialogService and MessagePopupServices are provided in root, so there is no need to provide them in any module. The option here is with WebStorm manually search for any of those services and remove them.


4. entryComponents for Modals or Cell renderers will no longer be needed and could be a problem for future Angular versions. In WebStorm, try to replace in path with the following regular expression (second parameter is nothing):

```
- ,\n?entryComponents: [^\]]*
- (blank)
```

Finally, update your package.json in order to add the peer dependencies:

```
"@fortawesome/fontawesome-free": "^5.6.3",
"ag-grid-angular": "^23.0.0",
"ag-grid-community": "^23.0.1",
"angular-split": "^3.0.2",
"bootstrap": "^4.3.1",
"date-fns": "^1.29.0",
"jquery": "^3.3.1",
"mobile-drag-drop": "^2.3.0-rc.0",
"nanobar": "^0.4.2",
"popper.js": "^1.14.4",
"primeicons": "^2.0.0",
"primeng": "^9.0.0",
"systelab-preferences": "^6.0.3",
"systelab-translate": "^7.0.6",
"pako": "^1.0.6",
"@ngx-translate/core": "^12.1.1",
"@ngx-translate/http-loader": "^4.0.0",
"chart.js": "^2.9.3",
"quill": "^1.3.7",
"@fullcalendar/core": "^4.4.0"
```

## Version 11
The following steps should be considered when migrating from Angular 10 to 11

1. Angular now requires TypeScript 4.0. ng update will migrate you automatically.
1. Support for IE9, IE10, and IE mobile has been removed. This was announced in the v10 update.
1. Upgrade Primeng 11
- PrimeIcons should be upgraded to 4.1.0 as components like table utilize new icons in the library
- locale property functionality of Datepicker is removed in favor of the new global i18n API. The datepicker components inject PrimeNGConfig
1. Use 'karma-coverage' because 'karma-coverage-istanbul-reporter' usage has been deprecated since version 11

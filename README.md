[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4b9aac15463b46bba542091304304388)](https://www.codacy.com/gh/systelab/systelab-components/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=systelab/systelab-components&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.com/systelab/systelab-components.svg?branch=master)](https://travis-ci.com/systelab/systelab-components)
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
npm ci
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

A typical snapshot test case for a mobile app renders a UI component, takes a screenshot, then compares it to a reference image stored alongside the test. The test will fail if the two images do not match: either the change is unexpected, or the screenshot needs to be updated to the new version of
the UI component.

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
npm run build-lib
cd dist/systelab-components
npm publish
```

# Breaking changes

## Version 15.x.x - Angular 15

Tree component migrated to use Angular CDK Tree

1.  Add CdkTreeModule to modules using Tree components

2.  Replace abstract-tree-status.component.html for abstract-tree.component.html

3.  Replace

import { TreeNode } from 'primeng/api';

for

import { TreeNode } from 'systelab-components';

4.  Review any usages and overrides of CSS classes related to previous PrimeNG Tree (p-tree, p-treenode-label, ...)

## Version 15.x.x - Angular 15

[Angular 15 news](https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8)

-   Router and HttpClient tree-shakable standalone APIs
-   Directive composition API
-   Image directive is now stable
-   Functional router guards
-   Router unwraps default imports
-   Better stack traces
-   Release MDC-based components to stable
-   Improvements in the experimental esbuild support

## Version 14.x.x - Angular 14

[Angular 13 news](https://blog.angular.io/angular-v13-is-now-available-cce66f7bc296)

- **View Engine** is no longer available
- Libraries built with the latest version of the **APF** [Angular Package Format](https://angular.io/guide/angular-package-format) will no longer require the use of ngcc. As a result of these changes library developers can expect leaner package output and faster execution.
- The new API removes the need for ComponentFactoryResolver being injected into the constructor. Ivy creates the opportunity to instantiate the component with ViewContainerRef.createComponent without creating an associated factory
- **End of IE11 support**
- Angular now supports the use of persistent build cache by default for new v13 projects [More info](https://github.com/angular/angular-cli/issues/21545) and [CLI Cache](https://angular.io/cli/cache)
- **RxJS 7.4** is now the default for apps created with ng new
- Dynamically enable/disable validators: allows built-in validators to be disabled by setting the value to null
- Important improvements to TestBed that now does a better job of tearing down test modules and environments after each test
- *canceledNavigationResolution* router flag to restore the computed value of the browser history when set to *computed*
- [TypeScript 4.4](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html)

[Angular 14 news](https://blog.angular.io/angular-v14-is-now-available-391a6db736af)

- [Standalone Components](https://angular.io/guide/standalone-components)
- [Typed Angular Forms](https://angular.io/guide/typed-forms)
- Streamlined page title accessibility
- Extended developer diagnostics
- Catch the invalid “Banana in a box” error on your two-way data bindings
- Catch nullish coalescing on non-nullable values in Angular templates
- Bind to protected component members directly from the templates
- Optional injectors in Embedded Views
- Support for passing in an optional injector when creating an embedded view through *ViewContainerRef.createEmbeddedView* and *TemplateRef.createEmbeddedView*
- NgModel changes are reflected in the UI for OnPush components
- [TypeScript 4.6](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/)
- Added missing 'interactjs' reference as peerDependcy.

The following steps should be considered when upgrade to systelab-components 14.x.x

- [AG Grid](https://ag-grid.com/changelog) has been updated from v25 to v28.2.1. Some breaking changes must be applied (check the change log link).

## Version 13.x.x Angular 12

IE11 support has been deprecated due to the upgrade to Angular 12

Use of [Ivy](https://angular.io/guide/ivy), applications that uses this library have to use Angular 12 and Ivy rendering.

Added --noImplicitOverride flag to allow override methods and get error for unintentionally overrides
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html#override-and-the---noimplicitoverride-flag

## Version 11.x.x

The following steps should be considered when migrating from Angular 10 to 11

1. Angular now requires TypeScript 4.0. ng update will migrate you automatically.
2. Browsers Support

Support for IE9, IE10, and IE mobile has been removed. This was announced in the v10 update.

Run this command to update the browsers ```npx browserslist@latest --update-db```

3. Upgrade Primeng 11

PrimeIcons should be upgraded to 4.1.0 as components like table utilize new icons in the library

locale property functionality of Datepicker is removed in favor of the new global i18n API. The datepicker components inject PrimeNGConfig

4. Use 'karma-coverage' because 'karma-coverage-istanbul-reporter' usage has been deprecated since version 11

## Version 10.x.x

Many changes where introduce in version 10 in order to standardize the library and support Angular 9.
The following steps should be considered when migrating from version 9.

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
"ag-grid-angular": "^28.2.0",
"ag-grid-community": "^28.2.0",
"angular-split": "^4.0.0",
"bootstrap": "^4.5.2",
"date-fns": "^2.15.0",
"jquery": "^3.5.1",
"mobile-drag-drop": "^2.3.0-rc.2",
"popper.js": "^1.16.1",
"primeicons": "^6.0.1",
"primeng": "^14.1.2",
"systelab-preferences": "^14.0.1",
"systelab-translate": "^14.0.6",
"pako": "^1.0.6",
"@ngx-translate/core": "^13.0.0",
"@ngx-translate/http-loader": "^6.0.0",
```

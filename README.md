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
npm build-lib
ng serve
```

This will bootstrap a showcase application to test the different components.

## Test
For testing purposes, the strategy chosen is Snapshot Testing.

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


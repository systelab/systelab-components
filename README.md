[![Codacy Badge](https://api.codacy.com/project/badge/Grade/552f28d2a1834de2856f8d6e1ff5bb3a)](https://app.codacy.com/app/alfonsserra/systelab-components?utm_source=github.com&utm_medium=referral&utm_content=systelab/systelab-components&utm_campaign=badger)
[![Build Status](https://travis-ci.org/systelab/systelab-components.svg?branch=master)](https://travis-ci.org/systelab/systelab-components)
[![npm version](https://badge.fury.io/js/systelab-components.svg)](https://badge.fury.io/js/systelab-components)

# systelab-components

Library with common UI components to speed up your Angular developments. You can take a look to the components in our showcase at https://systelab.github.io/components

## Working with the repo

In order to clone the repository and test the library use the following commands:

```bash
git clone https://github.com/systelab/systelab-components.git
cd systelab-components
npm install
ng serve (or npm run ng serve)
```

This will bootstrap a showcase application to test the different components.

In order to publish the library, an authorized npm user is required. Once set, update the version in the package.json, and run the npm publish script:

```npm
npm publish
```

Be careful because temporary folders will be created (build, css, html, widgets,...) and this files should be untracked as it is specified in the gitignore file.

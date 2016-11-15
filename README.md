Screenshot Plugin
=================
[![npm](https://img.shields.io/npm/dm/protractor-screenshot-plugin.svg?style=flat)](https://www.npmjs.com/package/protractor-screenshot-plugin)
[![npm](https://img.shields.io/npm/dt/protractor-screenshot-plugin.svg?style=flat)](https://www.npmjs.com/package/protractor-screenshot-plugin)
[![npm](https://img.shields.io/npm/v/protractor-screenshot-plugin.svg?style=flat)](https://www.npmjs.com/package/protractor-screenshot-plugin)
[![npm](https://img.shields.io/npm/l/protractor-screenshot-plugin.svg?style=flat)](https://www.npmjs.com/package/protractor-screenshot-plugin)

This plugin takes a screenshot after the test failed. It can also be configured to take a screenshot after each test executed.

```js
exports.config = {
  plugins: [{
    package: 'protractor-screenshot-plugin',

    // Screenshots will be saved in this folder
    folder: 'screenshots',           {Default - 'screenshots'}

    // take a screenshot after each test executed
    takeOnAllCases: {Boolean}        {Default - false}
 }]
};

```

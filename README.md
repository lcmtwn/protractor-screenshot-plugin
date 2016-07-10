Screenshot Plugin
=================

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

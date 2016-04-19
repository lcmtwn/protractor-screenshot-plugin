'use strict';

var fs = require('fs');
var path = require('path');

/**
 * This plugin takes a screenshot after the test failed.
 * It can also be configured to take a screenshot after each test executed.
 *
 * exports.config = {
 *   plugins: [{
 *     path: 'node_modules/protractor-screenshot-plugin',
 *
 *     // Screenshots will be saved in this folder
 *     folder: 'screenshots',           {Default - 'screenshots'}
 *
 *     takeOnAllCases: {Boolean}        {Default - false)
 *   }]
 * };
 */
var ScreenshotPlugin = function() {
};

ScreenshotPlugin.prototype.setup = function() {
  try {
    var folder = (this.config.folder === undefined) ? 'screenshots' : this.config.folder;
    fs.mkdirSync(folder);
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw e;
    }
  }
};

ScreenshotPlugin.prototype.takeScreenshot = function(dest) {
  browser.takeScreenshot().then(function(data) {
    var stream = fs.createWriteStream(dest);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  });
};

/**
 * generate timestamp, format is YYYYMMDDhhmmss:s
 */
ScreenshotPlugin.prototype.genTimeStamp = function() {
  var fillZero = function(i) {
    return (i < 10 ? '0' : '') + String(i);
  };
  var now = new Date();
  var date = [now.getFullYear().toString(), fillZero(now.getMonth() + 1), fillZero(now.getDate())].join('');
  var time = [fillZero(now.getHours()), fillZero(now.getMinutes()), fillZero(now.getSeconds())].join('');

  return date + time + ':' + now.getMilliseconds().toString();
};

ScreenshotPlugin.prototype.postTest = function(passed, testInfo) {
  var folder = (this.config.folder === undefined) ? 'screenshots' : this.config.folder;
  var folderPath = path.join(process.cwd(), folder);
  var takeOnAllCases = (this.config.takeOnAllCases === undefined) ? false : this.config.takeOnAllCases;

  // default image type: png
  var fn = [testInfo.category, testInfo.name, ScreenshotPlugin.genTimeStamp()].join(' | ') + '.png';
  var dest = path.join(folderPath, fn);

  if (takeOnAllCases) {
    ScreenshotPlugin.takeScreenshot(dest);
  } else {
    if (!passed) {
      ScreenshotPlugin.takeScreenshot(dest);
    }
  }
};

var ScreenshotPlugin = new ScreenshotPlugin();
module.exports = ScreenshotPlugin;

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

// Sign up for Sentry and get your keys at sentry.reactjsprogram.com
var sentryKey = 'YOUR-SENTRY-KEY';
var sentryApp = 'YOUR-SENTRY-APP-KEY';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video12',
  version: '1.0'
};

window.onerror = function () {
  Raven.showReportDialog();
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install();

ReactDOM.render(routes, document.getElementById('app'));
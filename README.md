# egg-bugsnag

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Feggjs-community%2Fegg-bugsnag.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Feggjs-community%2Fegg-bugsnag?ref=badge_shield)

[npm-image]: https://img.shields.io/npm/v/egg-bugsnag.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-bugsnag
[travis-image]: https://img.shields.io/travis/eggjs-community/egg-bugsnag.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs-community/egg-bugsnag
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs-community/egg-bugsnag.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs-community/egg-bugsnag?branch=master
[david-image]: https://img.shields.io/david/eggjs-community/egg-bugsnag.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs-community/egg-bugsnag
[snyk-image]: https://snyk.io/test/npm/egg-bugsnag/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-bugsnag
[download-image]: https://img.shields.io/npm/dm/egg-bugsnag.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-bugsnag

bugsnag plugin for egg.js

## Install

```bash
$ npm i egg-bugsnag --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.bugsnag = {
  enable: true,
  package: 'egg-bugsnag',
};
// {app_root}/app/controller/test.js
exports.list = function* () {
  this.body = yield this.app.bugsnag.notify(new Error('Test error'), 
  function(error, response) {
  
  });
};
```
see [bugsnag](https://docs.bugsnag.com/platforms/nodejs/) or [bugsnag for koa](https://docs.bugsnag.com/platforms/nodejs/koa/) for more api.

## Configuration

```js
// {app_root}/config/config.default.js
exports.bugsnag = {
  key: 'Your own bugsnag key',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## License

[MIT](LICENSE)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Feggjs-community%2Fegg-bugsnag.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Feggjs-community%2Fegg-bugsnag?ref=badge_large)
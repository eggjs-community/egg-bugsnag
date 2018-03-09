# egg-bugsnag

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

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

eggjs 的 bugsnag 插件

## 开启插件

```js
// config/plugin.js
exports.bugsnag = {
  enable: true,
  package: 'egg-bugsnag',
};
// app/controller/test.js
exports.list = function* () {
  this.body = yield this.app.bugsnag.notify(new Error('Test error'), 
  function(error, response) {
  
  });
};
```
请到 [bugsnag](https://docs.bugsnag.com/platforms/nodejs/) 或 [bugsnag for koa](https://docs.bugsnag.com/platforms/nodejs/koa/) 查看更多API.


## 使用场景

- Why and What: 描述为什么会有这个插件，它主要在完成一件什么事情。
尽可能描述详细。
- How: 描述这个插件是怎样使用的，具体的示例代码，甚至提供一个完整的示例，并给出链接。

## 详细配置

```js
// {app_root}/config/config.default.js
exports.bugsnag = {
  key: 'Your own bugsnag key',
};
```

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 测试说明

请对 [测试配置文件](test/fixtures/apps/bugsnag-test/config/config.default.js)添加你的bugsnag key

## License

[MIT](LICENSE)

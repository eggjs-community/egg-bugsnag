'use strict';

const mock = require('egg-mock');

describe('test/bugsnag.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/bugsnag-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should no error return', done => {
    app.bugsnag.notify(new Error('Test error'), function(error) {
      done(error);
    });
  });
});

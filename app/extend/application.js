'use strict';

const BUGSNAG = Symbol('Application#bugsnag');
const bugsnag = require('bugsnag');

module.exports = {
  /**
   * bugsnag
   * @member Application#bugsnag
   */
  get bugsnag() {
    if (!this[BUGSNAG]) {
      const options = Object.assign({}, this.config.bugsnag);
      this[BUGSNAG] = bugsnag;
      this[BUGSNAG].register(options.key);
    }
    return this[BUGSNAG];
  },
};

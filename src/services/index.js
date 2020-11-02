const hikers = require('./hikers/hikers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(hikers);
}

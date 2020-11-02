const hikers = require('./hikers/hikers.service.js');
const trails = require('./trails/trails.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(hikers);
  app.configure(trails);
}

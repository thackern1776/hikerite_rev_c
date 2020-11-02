// Initializes the `hikers` service on path `/hikers`
const { Hikers } = require('./hikers.class');
const createModel = require('../../models/hikers.model');
const hooks = require('./hikers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hikers', new Hikers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hikers');

  service.hooks(hooks);
};

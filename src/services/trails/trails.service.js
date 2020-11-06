// Initializes the `trails` service on path `/trails`
const { Trails } = require('./trails.class');
const createModel = require('../../models/trails.model');
const createReviewsModel = require('../../models/reviews.model');
const createCheckInsModel = require('../../models/check_ins.model');
const hooks = require('./trails.hooks');

module.exports = function (app) {
  //Initialize reviews and checkIns 
  createReviewsModel(app);
  createCheckInsModel(app);

  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/trails', new Trails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('trails');

  service.hooks(hooks);
};

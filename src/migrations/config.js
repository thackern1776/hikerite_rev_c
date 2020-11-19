const app = require('../app');
const env = process.env.NODE_ENV || 'development';
const dialect = 'mysql'; // Or your dialect name

module.exports = {
  [env]: {
    dialect,
    url: app.get(dialect),
    migrationStorageTableName: '_migrations'
  }
};
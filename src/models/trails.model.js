// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const trails = sequelizeClient.define('trails', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    trail_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    difficulty: {
      type: DataTypes.ENUM('Beginner', 'Intermediate', 'Advanced'),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trail_photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lat_: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    long_: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    timestamps: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  trails.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    trails.belongsToMany(models.hikers, { through: 'favorites' })
    trails.belongsToMany(models.hikers, { through: 'reviews' })
    trails.belongsToMany(models.hikers, { through: 'check_ins' })
  };

  return trails;
};

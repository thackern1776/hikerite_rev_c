// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const hikers = sequelizeClient.define('hikers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false 
    },
    photo: {
      type: DataTypes.STRING,
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
  hikers.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    hikers.belongsToMany(models.trails, { through: 'favorites' })
    hikers.belongsToMany(models.trails, { through: 'reviews' })
    hikers.belongsToMany(models.trails, { through: 'check_ins' })
  };

  return hikers;
};

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const check_ins = sequelizeClient.define('check_ins', {
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    hikerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    trailId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
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
  check_ins.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return check_ins;
};

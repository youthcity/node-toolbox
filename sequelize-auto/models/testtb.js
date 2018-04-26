/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testtb', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'testtb'
  });
};

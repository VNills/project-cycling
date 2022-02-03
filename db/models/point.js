const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Track }) {
      Point.belongsTo(Track, { foreignKey: 'trackId' });
    }
  }
  Point.init({
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tracks',
        key: 'id',
      },
    },
    latitude: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Point',
  });
  return Point;
};

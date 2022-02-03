const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Point, Feedback, User }) {
      Track.hasMany(Point, { foreignKey: 'trackId' });
      Track.hasMany(Feedback, { foreignKey: 'trackId' });
      Track.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Track.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    averageRating: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Track',
  });
  return Track;
};

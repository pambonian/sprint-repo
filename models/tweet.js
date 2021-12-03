'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tweet.init({
    author: DataTypes.STRING,
    handle: DataTypes.STRING,
    tag: DataTypes.STRING,
    isverified: DataTypes.BOOLEAN,
    comments: DataTypes.INTEGER,
    retweets: DataTypes.INTEGER,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tweet',
  });
  return tweet;
};
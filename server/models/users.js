'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.Users.hasMany(models.Posts);
			models.Users.hasMany(models.post_like);
			models.Users.hasMany(models.follow);
			models.Users.hasMany(models.follow);
			models.Users.hasMany(models.Comment);
		}
	}
	Users.init(
		{
			avatar: DataTypes.BLOB,
			email: DataTypes.STRING,
			nickname: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Users',
		},
	);
	return Users;
};

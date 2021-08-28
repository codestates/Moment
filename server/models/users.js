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
			models.Users.hasMany(models.Comment);
			models.Users.belongsToMany(models.Users, { foreignKey: 'followee', through: 'follows', as: 'followee' });
			models.Users.belongsToMany(models.Users, { foreignKey: 'follower', through: 'follows', as: 'follower' });
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

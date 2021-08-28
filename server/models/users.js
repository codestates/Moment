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
			models.Users.hasMany(models.Posts, { foreignKey: 'user_id' });
			models.Users.hasMany(models.post_like, { foreignKey: 'user_id' });
			models.Users.hasMany(models.follow, { foreignKey: 'follower' });
			models.Users.hasMany(models.follow, { foreignKey: 'followee' });
			models.Users.hasMany(models.Comment, { foreignKey: 'comment_userid' });
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

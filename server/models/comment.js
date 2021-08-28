'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.Comment.belongsTo(models.Posts, { foreignKey: 'post_id' });
			models.Comment.belongsTo(models.Users, { foreignKey: 'comment_userid' });
		}
	}
	Comment.init(
		{
			comment_content: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Comment',
		},
	);
	return Comment;
};

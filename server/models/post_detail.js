'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class post_detail extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	post_detail.init(
		{
			post_id: DataTypes.INTEGER,
			user_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'post_detail',
		},
	);
	return post_detail;
};

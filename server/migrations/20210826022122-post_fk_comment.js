'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await queryInterface.addColumn('comments', 'post_id', Sequelize.INTEGER);
		await queryInterface.addConstraint('comments', {
			fields: ['post_id'],
			type: 'foreign key',
			name: 'postid_fk_comment',
			references: {
				table: 'posts',
				field: 'id',
			},
			onDelete: 'cascade',
			onUpdate: 'cascade',
		});
		await queryInterface.addColumn('comments', 'comment_userid', Sequelize.INTEGER);
		await queryInterface.addConstraint('comments', {
			fields: ['comment_userid'],
			type: 'foreign key',
			name: 'userid_fk_comment',
			references: {
				table: 'users',
				field: 'id',
			},
			onDelete: 'cascade',
			onUpdate: 'cascade',
		});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		await queryInterface.removeConstraint('comments', 'postid_fk_comment');
		await queryInterface.removeColumn('comments', 'post_id');
		await queryInterface.removeConstraint('comments', 'userid_fk_comment');
		await queryInterface.removeColumn('comments', 'comment_userid');
	},
};

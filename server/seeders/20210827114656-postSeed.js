'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert('Posts', {
			user_id: 0,
			title: 'it is dummy title',
			content: 'insert dummy text<br /><script>alert(0)</script>',
			secret: false,
			createdAt: new Date(),
			updatedAt: new Date(),
		});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('Posts', null, {});
	},
};

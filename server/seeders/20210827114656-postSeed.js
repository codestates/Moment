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
		await queryInterface.bulkInsert(
			'Posts',
			[
				{
					title: 'it is dummy title',
					content: 'insert dummy text<br /><script>alert(0)</script>',
					secret: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					user_id: 1,
				},
				{
					title: 'dummy title',
					content:
						'When you go through hardships and decide not to surrender, that is strength. ā Arnold Schwarzenegger, It is kind of fun to do the impossible. ā Walt Disney, There are better starters than me but Iām a strong finisher. ā Usain Bolt',
					secret: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					user_id: 2,
				},
				{
					title: 'it is dummy title',
					content: 'dummydummy',
					secret: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					user_id: 1,
				},
				{
					title: 'test title 5',
					content: 'wfawfwefwafawfewfeawewef',
					secret: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					user_id: 3,
				},
				{
					title: 'Moment',
					content: 'By Clover',
					secret: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					user_id: 3,
				},
			],
			{},
		);
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

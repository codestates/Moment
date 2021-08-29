const { Posts, Users } = require('../../models');

module.exports = async (req, res) => {
	const num = req.params.num || 1;
	let offset = 4 * (num - 1);
	try {
		const pageData = await Posts.findAll({
			offset: offset,
			limit: 4,
			attributes: ['id', 'title', 'content', 'updatedAt', 'like_count', 'user_id'],
			where: { secret: false },
			include: [{ model: Users, attributes: ['nickname'] }],
		});
		res.status(200).json({ data: pageData });
	} catch (err) {
		console.log(err);
	}
};
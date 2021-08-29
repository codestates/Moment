const { Posts, Users } = require('../../models');

module.exports = async (req, res) => {
	const post_id = req.params.id;
	try {
		const post = await Posts.findOne({ where: { id: post_id } });
		const userInfo = await Users.findOne({
			where: { id: post.user_id },
		});
		if (!post) {
			res.status(404).json({ data: null });
		} else {
			const { id, title, content, updated_at, like_count } = post;
			res.status(200).json({
				data: {
					id: id,
					title: title,
					content: content,
					author: userInfo.nickname,
					updated: updated_at,
					like: like_count,
				},
			});
		}
	} catch (err) {
		console.log(err);
	}
};

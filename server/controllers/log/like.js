const { Posts, Users, post_like } = require('../../models');
const { isAuthorized } = require('../../lib/index');

module.exports = async (req, res) => {
	const post_id = req.params.id;
	const accessToken = req.cookies.accessToken;
	if (!accessToken) {
		res.status(400).send({ isLike: false });
	} else {
		const accessTokenData = isAuthorized(accessToken);
		if (!accessTokenData) {
			res.status(401).send({ isLike: false });
		} else {
			const userId = await Users.findOne({
				where: { email: accessTokenData.email, nickname: accessTokenData.nickname },
			});
			const postId = await Posts.findOne({
				where: { id: post_id, secret: false },
			});
			const isLike = await post_like.findOne({
				where: {
					post_id: postId.id,
					user_id: userId.id,
				},
			});
			if (!isLike) {
				await post_like.create({
					post_id: postId.id,
					user_id: userId.id,
				});
				res.status(200).json({ isLike: true });
			} else {
				await post_like.destroy({
					post_id: postId.id,
					user_id: userId.id,
				});
				res.status(200).json({ isLike: false });
			}
		}
	}
};

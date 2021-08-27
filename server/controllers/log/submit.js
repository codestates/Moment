const { Posts } = require('../../models');
const { isAuthorized } = require('../../lib/index');

module.exports = async (req, res) => {
	const { title, content, secret } = req.body;
	const accessToken = req.cookies.accessToken;
	if (!accessToken) {
		res.status(401).send({ isSubmit: false });
	} else {
		const accessTokenData = isAuthorized(accessToken);
		const userInfo = await Users.findOne({
			where: { email: accessTokenData.email }
		});
		// const userid = isAuthorized(accessToken);
		// accessToken이 바로 userid가 되진 않는것 같은데...
		if (!userInfo) {
			res.status(400).send({ isSubmit: false });
		} else {
			await Posts.create({
				user_id: userInfo.id,
				title,
				content,
				secret,
				createdAt: new Date(),
				updatedAt: new Date(),
			});
			res.status(200).send({ isSubmit: true });
		}
	}
};

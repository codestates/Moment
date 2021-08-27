const { isAuthorized } = require('../../lib');
const { Posts, Users } = require('../../models');

module.exports = async (req, res) => {
	const { title, content, secret } = req.body;
	const accessToken = req.cookies.accessToken;
	console.log(accessToken);
	if (!accessToken) {
		res.status(401).send({ isSubmit: false });
	} else {
		const checkUser = isAuthorized(accessToken);
		console.log(checkUser);
		if (!checkUser) {
			res.status(400).send({ isSubmit: false });
		} else {
			try {
				const searchUser = await Users.findOne({
					where: {
						email: checkUser.email,
					},
				});
				console.log(searchUser);
				const user_id = searchUser.id;
				await Posts.create({
					user_id,
					title,
					content,
					secret,
					createdAt: new Date(),
					updatedAt: new Date(),
				});
				res.status(200).send({ isSubmit: true });
			} catch (err) {
				console.log(err);
			}
		}
	}
};

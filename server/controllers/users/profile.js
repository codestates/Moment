const { Users } = require('../../models');
const { isAuthorized } = require('../../lib/index');

module.exports = async (req, res) => {
	const accessToken = req.cookies.accessToken;
	// const accessToken = req.headers.cookie.accesstoken;
	// accessToken이 저게 확실한 가?
	console.log(req.cookies);
	if (accessToken === undefined) {
		res.status(400).json({ data: null });
	} else {
		const accessTokenData = isAuthorized(accessToken);
		if (!accessTokenData) res.status(401).send({ data: null });
		else {
			try {
				const userInfo = await Users.findOne({
					where: { email: accessTokenData.email, nickname: accessTokenData.nickname },
				});
				res.status(200).send({
					data: {
						email: userInfo.email,
						nickname: userInfo.nickname,
					},
				});
			} catch (err) {
				console.log(err);
			}
		}
	}
};

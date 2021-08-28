const { isAuthorized } = require('../../lib');
const { Users } = require('../../models');

module.exports = async (req, res) => {
	const accessToken = req.cookies.accessToken;
	if (!accessToken) res.status(401).send({ profileFix: false });
	else {
		const checkUser = isAuthorized(accessToken);
		if (!checkUser) res.status(400).send({ profileFix: false });
		else {
			const { nickname, password } = req.body;
			const origin = await Users.findOne({
				where: {
					email: checkUser.email,
					nickname: checkUser.nickname,
				},
			});
			await Users.update(
				{
					nickname: nickname ? nickname : origin.nickname,
					password: password ? password : origin.password,
					updatedAt: new Date(),
				},
				{
					where: {
						id: origin.id,
					},
				},
			);
			const { email, nickname } = origin;
			const accessToken = generateAccessToken({ email, nickname });

			res.cookie('accessToken', accessToken, {
				sameSite: 'none',
				secure: true,
				httpOnly: true
			});
			res.status(200).send({ profileFix: true });
		}
	}
};

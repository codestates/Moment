const axios = require('axios');
const { Users } = require('../../models');
const dotenv = require('dotenv');
const { generateRefreshToken } = require('../../lib');
dotenv.config();

module.exports = async (req, res) => {
	const googleCode = await axios({
		url: 'https://oauth2.googleapis.com/token',
		method: 'post',
		data: {
			code: req.query.code,
			client_id: process.env.GOOGLE_CLIENT_ID,
			client_secret: process.env.GOOGLE_CLIENT_SECRET,
			redirect_uri: 'https://api.m0ment.be/users/google',
			grant_type: 'authorization_code',
		},
	});
	const googleAccessToken = googleCode.data.access_token;
	const googleUserInfo = await axios({
		url: 'https://www.googleapis.com/oauth2/v3/userinfo',
		method: 'get',
		params: {
			access_token: googleAccessToken,
			scope: 'https://www.googleapis.com/auth/userinfo.email',
		},
	});
	// data structure
	// googleUserInfo.data = {
	// 	"sub": "109577084072413087857",
	// 	"picture": "https://lh3.googleusercontent.com/a-/AOh14Gg-EovSrHAX8N0U99pH5RNTYQWT8VsWFrZTahRlpA=s96-c",
	// 	"email": "8350130@gmail.com",
	// 	"email_verified": true
	//   }
	const searchUser = await Users.findOne({
		where: { email: googleUserInfo.data.email },
	});
	if (!searchUser) {
		await Users.create({
			avatar: googleUserInfo.data.picture,
			email: googleUserInfo.data.email,
			nickname: googleUserInfo.data.sub,
			password: googleAccessToken,
			createdAt: new Date(),
			updatedAt: new Date(),
		});
	}
	const payload = {
		email: googleUserInfo.data.email,
		nickname: googleUserInfo.data.sub,
	};
	const accessToken = generateAccessToken(payload);
	const refreshToken = generateRefreshToken(payload);
	res.set('refreshToken', refreshToken);
	res.cookie('accessToken', accessToken, {
		sameSite: 'none',
		secure: true,
		httpOnly: true,
	});
	res.status(200).send({
		isLogin: true,
		data: payload,
	});
};

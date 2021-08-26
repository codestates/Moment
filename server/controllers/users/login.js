const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const userInfo = await Users.findOne({
    where: { email: req.body.email, password: req.body.password }
  });

  if (!userInfo) {
    res.status(401).json({ isLogin: false, data: null });
  } else {
    // const { id, avator, email, nickname, password, secret, created_at, updqted_at } = userInfo;
    // const accessToken = generateAccessToken({ id, avator, email, nickname, password, secret, created_at, updqted_at });
    // const refreshToken = generateRefreshToken({ id, avator, email, nickname, password, secret, created_at, updqted_at });

    // res.cookie('accessToken', accessToken, {
    //   sameSite: 'none',
    //   secure: true,
    //   httpOnly: true
    // });

    // res.set({ 'refreshToken': refreshToken })
    res.status(200).json({ isLogin: true, data: { email: email, nickname: nickname } });
  }
}
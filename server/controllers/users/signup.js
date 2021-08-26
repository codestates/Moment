const { User } = require('../../models');

module.exports = async (req, res) => {
  const { email, password, nickname } = req.body;

  if (!email || !password || !nickname) {
    res.status(400).json({ isSignup: false });
  }

  const userInfo = await User.findOne({
    where: { email: req.body.email }
  });

  if (userInfo) {
    res.status(400).json({ isSignup: false });
  } else {
    const newUserInfo = await User.create({
      email: req.body.email,
      password: req.body.password,
      nickname: req.body.nickname,
    });
    const { id, avatar, email, nickname, password, secret, created_at, updated_at } = newUserInfo;
    // 여기서 받지도 않은 정보(시크릿, 아바타)를 어떻게 DB에 저장하는 건가. 제외하고 넣는 건가?
    // 마찬가지로 토큰을 만들 때는 어떻게 되는 건가?
    const accessToken = generateAccessToken({ id, avator, email, nickname, password, secret, created_at, updated_at });
    const refreshToken = generateRefreshToken({ id, avator, email, nickname, password, secret, created_at, updated_at });

    res.cookie('accessToken', accessToken, {
      sameSite: 'none',
      secure: true,
      httpOnly: true
    });
    res.set({ 'refreshToken': refreshToken });
    res.status(200).json({ isSignup: true });
  }
}
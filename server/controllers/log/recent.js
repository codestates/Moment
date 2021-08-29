const { Posts, Users, post_like } = require('../../models');

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
		// res.status(200).json({ data: posts });
	} catch (err) {
		console.log(err);
	}
};
// id: 1,
// title: "title",
// content: "content",
// author: "nickname",
// updated: "2021:08:24_14:21:03",
// like: 1
// const usernickname = await Users.findAll({ attreibutes: { nickname }, where: { id: posts.user_id } })
// const recentPosts = [];
// const recentUserInfo = [];
// const recentLikes = [];
// for (let i = 0; i < 4; i++) {
//   const userInfo = await Users.findOne({
//     where: { id: posts[i].user_id }
//   });
//   const likes = await post_like.findAll({
//     where: { post_id: posts[i].id }
//   });
//   const { id, title, content, updatedAt } = post[i];
//   recentPosts.push({ id, title, content, updatedAt });
//   recentUserInfo.push(userInfo[i].nickname);
//   recentLikes.push(len(likes[i]));
// };
// res.status(400).json({
//   data: {
//     id: recentPosts[0].id,
//     title: recentPosts[0].title,
//     content: recentPosts[0].content,
//     author: recentUserInfo[0],
//     updated: recentPosts[0].updatedAt,
//     like: recentLikes[0]
//   },
// {
//   id: recentPosts[1].id,
//   title: recentPosts[1].title,
//   content: recentPosts[1].content,
//   author: recentUserInfo[1],
//   updated: recentPosts[1].updatedAt,
//   like: recentLikes[1]
// },
// {
//   id: recentPosts[2].id,
//   title: recentPosts[2].title,
//   content: recentPosts[2].content,
//   author: recentUserInfo[2],
//   updated: recentPosts[2].updatedAt,
//   like: recentLikes[2]
// },
// {
//   id: recentPosts[3].id,
//   title: recentPosts[3].title,
//   content: recentPosts[3].content,
//   author: recentUserInfo[3],
//   updated: recentPosts[3].updatedAt,
//   like: recentLikes[3]
// }
// })
// }

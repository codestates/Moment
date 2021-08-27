const { Posts } = require('../../models');

module.exports = async (req, res) => {
	const post_id = req.params.id;
	const accessToken = req.cookies.accessToken;
	if (!accessToken) {
		res.status(401).send({ isDel: false });
	} else {
		const findPost = await Posts.findOne({ where: { id: post_id } });
		if (!findPost) res.status(404).send({ isDel: false });
		else {
			// token verify
			// const userid = tokenverify(accessToken)
			// if(!userid) {
			//     res.status(400).send({isDel.false})
			// } else {
			try {
				await Posts.destroy({
					where: {
						id: post_id,
					},
				});
				res.status(200).send({ isDel: true });
			} catch (err) {
				console.log(err);
			}
			// }
		}
	}
};

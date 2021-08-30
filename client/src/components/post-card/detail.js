import React, { useState } from 'react';
import { TiHeartOutline } from 'react-icons/ti';
import axios from 'axios';
import './detail.css';

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

export default function Detail({ post }) {
	const [click, setClick] = useState(false);
	const [count, setCount] = useState(post['like_count']);
	// const clickHandler = () => {
	// 	setClick(!click);
	// };

	//전달된 post에 해당 유저가 좋아요를 눌렀는지 여부가 필요...
	const countHandler = async () => {
		const res = await axios.get(`${ENDPOINT}/log/like/1`, { withCredentials: true });
		console.log(res);
		if (!click) {
			setClick(!click);
			setCount(prevState => prevState + 1);
		} else {
			setClick(!click);
			setCount(prevState => prevState - 1);
		}
	};
	return (
		<>
			<div className="details-container">
				<div className="details-inner-container">
					<h1 className="details-header">{post.title}</h1>
					<span className="sub details-subheader">
						{post.User.nickname}
						<br />
						{post.updated}
					</span>
					<p className="details-text">{post.content}</p>
					<div className="details-options">
						<button
							className={click ? `recent-card-liked-click` : 'recent-card-liked'}
							onClick={countHandler}
						>
							<TiHeartOutline size="18" />
						</button>
					</div>
					<span className="detail-count">Like: {count}</span>
				</div>
			</div>
		</>
	);
}

import React from 'react';

import SideImage from './sideimage';
import Detail from '../my-post-card/detail';

import Profile from '../profile/profile-page-demo';

import './postcard.css';

export default function PostCard({ post }) {
	const detailHandler = () => {
		document.location.href = `/log/mydetail/${post.id}`;
	};
	return (
		<div className="post-card-container" onClick={detailHandler}>
			<Detail post={post} />
			<SideImage />
		</div>
	);
}

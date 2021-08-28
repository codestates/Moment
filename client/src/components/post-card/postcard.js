import React from 'react';

import SideImage from './sideimage';
import Detail from './detail';

import './postcard.css';

export default function PostCard() {
	return (
		<div className="post-card-container">
			<Detail />
			<SideImage />
		</div>
	);
}

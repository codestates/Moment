import React, { useState } from 'react';

import './mainpage.css';

import RecentCard from '../recent-card/recent';

import { dummyData } from '../../static/dummyData';
export default function MainPage() {
	const [image, setImage] = useState(dummyData);
	return (
		<>
			<div className="mainpage">
				<h1 className="mainpage-title">Record your moment right now.</h1>
			</div>
			<div className="mainpage-recent-list">
				{image.map(({ id, ...otherimageProps }) => (
					<RecentCard key={id} {...otherimageProps} />
				))}
			</div>
		</>
	);
}

import React, { useState, useEffect } from 'react';

import axios from 'axios';

import RecentCard from '../recent-card/recent';
import Spinner from '../spinner/spinner';

import './mainpage.css';

export default function MainPage() {
	const [title, setTitle] = useState('dummy');
	const [content, setContent] = useState(
		'Thank you. Thank you so much. I am so thrilled to be recieving this award today. But on the other hand, it`s a little bit bittersweet. It`s a pitty that the musical arts are evaluated and ranked like this. Yes. I know that this is too wonderful and glorious for me. I don`t want to denigrate this position or award. Thank you again for giving my this award.',
	);

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!isLoading) {
			setTimeout(() => {
				setIsLoading(true);
			}, 3000);
		}
	}, [isLoading]);

	if (!isLoading) return <Spinner />;

	// useEffect(() => {
	// 	axios.get(`https://api.m0ment.be/log/recent/page/${num}`);
	// });

	return (
		<>
			<div className="mainpage">
				<a href="/log">
					<div className="mainpage-btn"></div>
				</a>
			</div>
			<div className="mainpage-recent-container">
				<RecentCard title={title} content={content} />
			</div>
			{/* <div>
				<button>View all</button>
			</div> */}
		</>
	);
}

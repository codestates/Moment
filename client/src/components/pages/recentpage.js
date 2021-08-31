import React, { useState, useEffect, useContext } from 'react';
import PostCard from '../post-card/postcard';
import Spinner from '../spinner/spinner';
import { Context } from '../../Context';

import './recentpage.css';

export default function RecentPage() {
	const { posts } = useContext(Context);
	const [isLoading, setIsLoading] = useState(false);

	const [pages, setPages] = useState(1);
	console.log(pages);
	const prevHandler = () => {
		setPages(prevState => {
			if (prevState === 1) return 1;
			else return prevState - 1;
		});
	};
	const nextHandler = () => {
		if (posts.length < 4) return;
		setPages(prevState => prevState + 1);
	};

	useEffect(() => {
		if (!isLoading) {
			setTimeout(() => {
				setIsLoading(true);
			}, 2000);
		}
	}, [isLoading]);

	// if (posts.length === 0) {
	// 	setPages(prevState => {
	// 		if (prevState === 1) return 1;
	// 		return prevState - 1;
	// 	});
	// }

	if (!isLoading) return <Spinner />;
	return (
		<>
			<div className="recent-main-container">
				{posts.map(post => (
					<div className="recent-main-item" key={post.id}>
						<PostCard key={post.id} post={post} />
					</div>
				))}
				<div className="recent-main-btn-container">
					<button className="recent-main-btn" onClick={prevHandler}>
						PREV
					</button>
					<button className="recent-main-btn" onClick={nextHandler}>
						NEXT
					</button>
				</div>
			</div>
		</>
	);
}

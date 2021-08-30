import React, { useState, useEffect } from 'react';
import './MyPostPage.module.css';
import PostCard from '../post-card/postcard';
import Spinner from '../spinner/spinner';
import axios from 'axios';
import classes from './MyPostPage.module.css';
import { Redirect } from 'react-router-dom';
export default function MyPostPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [pages, setPages] = useState(1);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPostsHandler();
	}, [pages]);

	const prevHandler = () => {
		setPages(prevState => {
			if (prevState === 1) return 1;
			return prevState - 1;
		});
	};
	const nextHandler = () => {
		if (posts.length < 4) return;
		setPages(prevState => prevState + 1);
	};
	const getPostsHandler = async () => {
		const res = await axios.get(`https://api.m0ment.be/log/recent/page/${pages}`);
		if (res.data.data.length === 0) {
			setPages(prevState => {
				if (prevState === 1) return 1;
				return prevState - 1;
			});
		}
		setPosts([...res.data.data]);
	};

	// if (!isLoading) return <Spinner />;
	return (
		<>
			<div className="recent-main-container">
				{posts.map(post => (
					<div className="recent-main-item" key={post.id}>
						<PostCard key={post.id} post={post} />
					</div>
				))}
				<div className={classes.btnContainer}>
					<button className="recent-main-btn" onClick={prevHandler}>
						PREV
					</button>

					<div>{pages}</div>

					<button className="recent-main-btn" onClick={nextHandler}>
						NEXT
					</button>
				</div>
			</div>
		</>
	);
}

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RecentCard from '../recent-card/recent';
import Spinner from '../spinner/spinner';
import './mainpage.css';
import { Context } from '../../Context';

export default function MainPage() {
	const { posts } = useContext(Context);
	const [title, setTitle] = useState('dummy');
	const [content, setContent] = useState(
		'Thank you. Thank you so much. I am so thrilled to be recieving this award today. But on the other hand, it`s a little bit bittersweet. It`s a pitty that the musical arts are evaluated and ranked like this. Yes. I know that this is too wonderful and glorious for me. I don`t want to denigrate this position or award. Thank you again for giving my this award.',
	);
	const [author, setAuthor] = useState('author');
	const [updated, setUpdated] = useState('2021.08.28');

	const [isLoading, setIsLoading] = useState(false);

	const func = async () => {
		const data = await axios.get('http://localhost:8080/users/profile', {
			withCredentials: true,
		});
		console.log(data.data);
	};

	useEffect(() => {
		func();
		if (!isLoading) {
			setTimeout(() => {
				setIsLoading(true);
			}, 2000);
		}
	}, [isLoading]);

	if (!isLoading) return <Spinner />;

	return (
		<>
			<div className="mainpage">
				<a href="/log">
					<div className="mainpage-btn"></div>
				</a>
			</div>
			<div className="mainpage-recent-container">
				{/* map으로 묶어서 보여 주기 */}
				<RecentCard title={title} content={content} author={author} updated={updated} />
				<RecentCard title={title} content={content} author={author} updated={updated} />
				<RecentCard title={title} content={content} author={author} updated={updated} />
				<RecentCard title={title} content={content} author={author} updated={updated} />
			</div>

			<div className="mainpage-recent-btn-container">
				<Link to="/main/recent">
					<button className="recent-btn">View more</button>
				</Link>
			</div>
		</>
	);
}

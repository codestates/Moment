import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './detail.css';

export default function Detail() {
	const [title, setTitle] = useState('Github, it`s too hard..');
	const [content, setContent] = useState(
		'It`s too hard for me. If there`s an error, I`m going crazy. This is really crazy...',
	);
	const [author, setAuthor] = useState('xinnni');
	const [updated, setUpdated] = useState('2021.08.28');

	const [click, setClick] = useState(false);
	const [count, setCount] = useState(Number(1));
	const clickHandler = () => {
		setClick(!click);
	};

	const countHandler = () => {
		if (!click) {
			setCount(prevState => prevState + 1);
		} else {
			setCount(prevState => prevState - 1);
		}
		console.log(count);
	};
	return (
		<div className="details-container">
			<div className="details-inner-container">
				<h1 className="details-header">{title}</h1>
				<span className="sub details-subheader">
					{author}
					<br />
					{updated}
				</span>
				<p className="details-text">{content}</p>
				<div className="details-options">
					<button className={click ? `recent-card-liked-click` : 'recent-card-liked'} onClick={clickHandler}>
						<FontAwesomeIcon icon={faHeart} size="2x" onClick={countHandler} />
					</button>
				</div>
				<span className="detail-count">Like: {count}</span>
			</div>
		</div>
	);
}

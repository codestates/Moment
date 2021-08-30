import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiHeartOutline } from 'react-icons/ti';
import './recent.css';
const RecentCard = ({ title, content, author, updated }) => {
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
		<>
			<div className="contains">
				<div className="recent-container">
					<div className="recent-image-container">
						<img src={require('../../static/images/composition-10.png').default} />
					</div>
					<div className="recent-card-container">
						<div className="recent-title">
							<h1>{title}</h1>
							<span className="recent-card-nickname">{author}</span>
							<span className="recent-card-updete">{updated}</span>
							<button
								className={click ? `recent-card-liked-click` : 'recent-card-liked'}
								onClick={clickHandler}
							>
								<TiHeartOutline size="15" />
							</button>
						</div>
						<div className="recent-body">
							<p>{content}</p>
						</div>
					</div>
					<div className="recent-btn-container"></div>
				</div>
			</div>
		</>
	);
};

export default RecentCard;

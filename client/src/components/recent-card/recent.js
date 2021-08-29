import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
							<FontAwesomeIcon icon={faHeart} />
						</button>
						{/* "recent-card-liked" */}
					</div>
					<div className="recent-body">
						<p>{content}</p>
					</div>
				</div>
				<div className="recent-btn-container">
					<Link to="/main/recent">
						<button className="recent-btn">
							<a>View more</a>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

RecentCard.propTypes = {
	title: PropTypes.any,
	body: PropTypes.any,
};

export default RecentCard;

import React from 'react';
import PropTypes from 'prop-types';

import './recent.css';

const RecentCard = ({ title, content }) => {
	return (
		<div className="contains">
			<div className="recent-container">
				<div className="recent-image-container">
					<img src={require('../../static/images/composition-10.png').default} />
				</div>
				<div className="recent-card-container">
					<div className="recent-title">
						<h1>{title}</h1>
					</div>
					<div className="recent-body">
						<p>{content}</p>
					</div>
				</div>
				<div className="recent-btn-container">
					<button className="recent-btn">
						<a>View more</a>
					</button>
				</div>
			</div>
			<div className="recent-container">
				<div className="recent-image-container">
					<img src={require('../../static/images/composition-11.png').default} />
				</div>
				<div className="recent-card-container">
					<div className="recent-title">
						<h1>{title}</h1>
					</div>
					<div className="recent-body">
						<p>{content}</p>
					</div>
				</div>
				<div className="recent-btn-container">
					<button className="recent-btn">
						<a>View more</a>
					</button>
				</div>
			</div>
			<div className="recent-container">
				<div className="recent-image-container">
					<img src={require('../../static/images/composition-21.png').default} />
				</div>
				<div className="recent-card-container">
					<div className="recent-title">
						<h1>{title}</h1>
					</div>
					<div className="recent-body">
						<p>{content}</p>
					</div>
				</div>
				<div className="recent-btn-container">
					<button className="recent-btn">
						<a>View more</a>
					</button>
				</div>
			</div>
			<div className="recent-container">
				<div className="recent-image-container">
					<img src={require('../../static/images/composition-22.png').default} />
				</div>
				<div className="recent-card-container">
					<div className="recent-title">
						<h1>{title}</h1>
					</div>
					<div className="recent-body">
						<p>{content}</p>
					</div>
				</div>
				<div className="recent-btn-container">
					<button className="recent-btn">
						<a>View more</a>
					</button>
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

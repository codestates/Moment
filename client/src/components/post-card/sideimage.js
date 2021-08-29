import React from 'react';

import './sideimage.css';

export default function SideImage(props) {
	return (
		<div className="side-image-container">
			<img src={require('../../static/images/composition-3.png').default} className="side-image"></img>
		</div>
	);
}

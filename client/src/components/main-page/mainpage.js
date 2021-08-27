import React, { useState } from 'react';

import './mainpage.css';

import image1 from '../../static/images/composition-10.png';
import image2 from '../../static/images/composition-11.png';
import image3 from '../../static/images/composition-21.png';
import image4 from '../../static/images/composition-22.png';
export default function MainPage() {
	return (
		<>
			<div className="mainpage">
				<h1 className="mainpage-title">Make your moments forever.</h1>
			</div>
			<div className="mainpage-recent-container">
				<div className="mainpage-recent-size"></div>

				<div className="mainpage-recent-size"></div>

				<div className="mainpage-recent-size"></div>

				<div className="mainpage-recent-size"></div>
			</div>
		</>
	);
}

import React from 'react';
import './startpage.css';

import { ReactComponent as Logo } from '../../assets/LovingDoodle.svg';

export default function StartPage() {
	return (
		<div className="startpage">
			<Logo className="startpage-logo" />
			<div></div>
			<h1 className="startpage-title">Remember your moment in Moments forever.</h1>
			<a
				href="/"
				className="startpage-btn
						   startpage-btn-color
						   startpage-btn-animation"
			>
				Start
			</a>
		</div>
	);
}

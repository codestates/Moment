import React, { useEffect, useState } from 'react';
import './startpage.css';

import { ReactComponent as Logo } from '../../assets/svg/13.svg';
import Spinner from '../spinner/spinner';
export default function StartPage() {
	return (
		<div className="startpage">
			{/* {section.map(({ id, imageUrl }) => (
				<div className="startpage-logo" key={id} style={{ backgroundImage: `url(${imageUrl})` }} />
			))} */}
			<Logo className="startpage-logo" />
			<div></div>
			<h1 className="startpage-title">Remember your moment in Moments forever.</h1>
			<a
				href="/main"
				className="startpage-btn
						   startpage-btn-color
						   startpage-btn-animation"
			>
				Start
			</a>
		</div>
	);
}

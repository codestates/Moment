import React from 'react';

import './header.css';

export default function Header() {
	return (
		<div className="header">
			<h1 className="header-title">Moment.</h1>
			<div className="option">
				<div className="header-login">Login</div>
				<div className="header-signup">Sign Up</div>
			</div>
		</div>
	);
}

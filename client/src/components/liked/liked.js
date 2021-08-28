import React, { useState } from 'react';

import './liked.css';

export default function Liked() {
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
		<div className="heart-btn">
			<div className="content" onClick={countHandler}>
				<span className={click ? `heartclick` : `heart`} onClick={clickHandler}></span>
				<span className="like">Like</span>
				<span className="numb">{count}</span>
			</div>
		</div>
	);
}

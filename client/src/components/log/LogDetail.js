import React, { useState, useEffect } from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TiHeartOutline } from 'react-icons/ti';
import classes from './LogDetail.module.css';

const LogDetail = ({ post }) => {
	//post 정보(title, image, author, updated__at, content, like)를 프랍으로 받아서 보여주기
	const [heartClicked, setHeartClicked] = useState(false);
	const [numOfLike, setNumOfLike] = useState(1);
	const [randomNum, setRandomNum] = useState(1);

	useEffect(() => {
		getRandomPic();
	}, []);
	const likeHandler = () => {
		setHeartClicked(prev => !prev);
		setNumOfLike(prev => {
			if (heartClicked) return prev - 1;
			return prev + 1;
		});
	};
	const getRandomPic = () => {
		let ranNum = Math.floor(Math.random() * 30) * +1;
		//1~31까지 난수생성
		setRandomNum(ranNum);
	};
	return (
		<div className={`${classes.contains} ${classes.middle}`}>
			<div className={classes.header__container}>
				<img src={require(`../../assets/svg/${randomNum}.svg`).default} className="header-image"></img>
			</div>
			<div className={classes.userInfo__container}>
				<div className={classes.userPicName}>
					<FaUserAstronaut className={classes.pic} size="50" />
					<span>mark</span>
				</div>
				<div className={classes.text__container}>
					<span>updated__at</span>
				</div>
			</div>
			<div className={classes.content__container}>
				<div className={classes.title__container}>
					<h2>What is Lorem Ipsum?</h2>
				</div>
				<div className={classes.body__container}>
					<p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
					<div className={classes.like__container}>
						<button
							className={heartClicked ? `${classes.heart__clicked} ${classes.heart}` : `${classes.heart}`}
							onClick={likeHandler}
						>
							<TiHeartOutline size={23} />
							<div className={classes.likeNum}>{numOfLike}</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogDetail;

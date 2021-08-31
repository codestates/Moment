import React, { useState, useEffect } from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TiHeartOutline } from 'react-icons/ti';
import classes from './LogDetail.module.css';
import axios from 'axios';

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

const LogDetail = () => {
	const postId = document.location.pathname.split('/')[3];

	const [post, setPost] = useState({});
	const [heartClicked, setHeartClicked] = useState(false);
	const [numOfLike, setNumOfLike] = useState(0);
	const [randomNum, setRandomNum] = useState(1);
	useEffect(() => {
		getRandomPic();
		getPostsHandler();
	}, []);

	const likeHandler = async () => {
		const res = await axios.get(`${ENDPOINT}/log/like/${postId}`, { withCredentials: true });
		console.log(res);
		if (!heartClicked) {
			setHeartClicked(!heartClicked);
			setNumOfLike(prevState => prevState + 1);
		} else {
			setHeartClicked(!heartClicked);
			setNumOfLike(prevState => prevState - 1);
		}
	};
	const getRandomPic = () => {
		let ranNum = Math.floor(Math.random() * 30) + 1;
		//1~31까지 난수생성
		setRandomNum(ranNum);
	};
	const getPostsHandler = async () => {
		const res = await axios(`${ENDPOINT}/log/detail/${postId}`);
		setPost(res.data.data);
		setNumOfLike(res.data.data.like_count);
	};
	const time = String(post.updated);
	const idx = time.indexOf('T');
	const t = time.slice(0, idx);

	return (
		<div className={`${classes.contains} ${classes.middle}`}>
			<div className={classes.header__container}>
				<img
					src={require(`../../assets/svg/${randomNum}.svg`).default}
					className="header-image"
					width="50px"
				></img>
			</div>
			<div className={classes.userInfo__container}>
				<div className={classes.userPicName}>
					<FaUserAstronaut className={classes.pic} size="50" />
					<span>{post.author}</span>
				</div>
				<div className={classes.text__container}>
					<span>{t}</span>
				</div>
			</div>
			<div className={classes.content__container}>
				<div className={classes.title__container}>
					<h2>{post.title}</h2>
				</div>
				<div className={classes.body__container}>
					<p>{post.content}</p>
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

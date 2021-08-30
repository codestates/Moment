import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Mypage.css';
import { FiPaperclip } from 'react-icons/fi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Mypage = () => {
	const [userInfo, setUserInfo] = useState({ email: 'test@test.com', nickname: 'test' });
	// useEffect(() => {
	// 	getUsersInfo();
	// }, []);
	// const getUsersInfo = async () => {
	// 	const user = await axios.get('https://api.m0ment.be/users/profile', { withCredentials: true });
	// 	const { email, nickname } = user.data.data;
	// 	setUserInfo({ email, nickname });
	// };

	const { email, nickname } = userInfo;
	return (
		<div className="my-page-card-container">
			<div className="my-page-card-image-container">
				<img src={require('../../assets/svg/16.svg').default} alt="" height="100px" width="100px" />
			</div>
			<div className="my-page-card-info-container">
				<h1>{nickname}</h1>
				<h2>{email}</h2>
				<button className="my-page-card-info-btn">
					<FiPaperclip size={30} />
				</button>
				<div className="my-page-card-info-welcome-container">
					<p>Welcome! What would you like to write today?</p>
				</div>
			</div>
			<div className="my-page-card-info-options">
				<button>Moment</button>
				<button>My post</button>
				<button>Infomation</button>
			</div>
		</div>
	);
};

export default Mypage;

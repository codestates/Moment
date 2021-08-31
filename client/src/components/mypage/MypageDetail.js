import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context';
import './MypageDetail.css';

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

const MypageDetail = () => {
	const { uInfo } = useContext(Context);
	const [userInfo, setUserInfo] = useState({ email: uInfo.email, nickname: uInfo.nickname });
	const [enteredEmail, setEnteredEmail] = useState(uInfo.email);
	const [enteredNickname, setEnteredNickname] = useState(uInfo.nickname);
	const [enteredPassword, setEnteredPassword] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState(true);
	const [confirmPassword, setConfirmPassword] = useState(true);
	// useEffect(() => {
	// 	getUsersInfo();
	// }, []);
	// const getUsersInfo = async () => {
	// 	const user = await axios.get(`${ENDPOINT}/users/profile`, { withCredentials: true });
	// 	const { email, nickname } = user.data.data;
	// 	setEnteredEmail(email);
	// 	setEnteredNickname(nickname);
	// };
	const editHandler = async event => {
		event.preventDefault();
		console.log(1);
		const res = await axios.patch(
			`${ENDPOINT}/users/fixprofile`,
			{ nickname: enteredNickname, password: enteredPassword },
			{ withCredentials: true },
		);
	};

	const emailInputHandler = e => {
		setEnteredEmail(e.target.value);
	};
	const nickNameInputHandler = e => {
		setEnteredNickname(e.target.value);
	};
	const passwordInputHandler = e => {
		setEnteredPassword(e.target.value);
	};
	const validatePasswordHandler = e => {
		const reg_pw = /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
		if (!reg_pw.test(e.target.value)) setPasswordIsValid(false);
		else setPasswordIsValid(true);
	};
	const confirmPasswordHandler = e => {
		if (enteredPassword === e.target.value) setConfirmPassword(true);
		else setConfirmPassword(false);
	};

	return (
		<div className="my-page-info-container">
			<h2 className="my-page-info-title">Information11</h2>
			<div className="my-page-info-ipt-container">
				<input
					className="my-page-info-ipt"
					type="text"
					value={enteredEmail}
					placeholder="E-Mail"
					onChange={emailInputHandler}
				></input>
				<input
					className="my-page-info-ipt"
					type="text"
					value={enteredNickname}
					placeholder="Nickname"
					onChange={nickNameInputHandler}
				></input>
				<input
					className={passwordIsValid ? `${'my-page-info-ipt'}` : `${'my-page-info-ipt-invalid'}`}
					type="Password"
					value={enteredPassword}
					placeholder="Password"
					onChange={passwordInputHandler}
					onBlur={validatePasswordHandler}
				></input>
				<input
					className={confirmPassword ? `${'my-page-info-ipt'}` : `${'my-page-info-ipt-invalid'}`}
					type="Password"
					placeholder="Confrim Password"
					onChange={confirmPasswordHandler}
				></input>
			</div>
			<div className={!confirmPassword ? `${'my-page-info-password-err'}` : `${'my-page-info-password-noerr'}`}>
				Please check the password.
			</div>
			<div className="my-page-info-imgcontainer">
				<img className="my-page-info-imgsize" src={require('../../assets/svg/20.svg').default} />
			</div>
			<div className="my-page-info-btn-container">
				<button className="my-page-info-btn" onClick={editHandler}>
					Edit
				</button>
			</div>
		</div>
	);
};

export default MypageDetail;

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './header.css';
import Login from '../login/Login'
import SignUp from '../signup/SignUp'
export default function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loginOn, setLoginOn] = useState(false);
	const [signUpON, setSignUpOn] = useState(false);
	const [refreshToken, setRefreshToken] = useState('')
	const loginModalHandler = () => {
		setLoginOn(!loginOn)
	}
	const signUpModalHandler = () => {
		setSignUpOn(!signUpON)
	}
	const isLoggedInHandler = () => {
		setIsLoggedIn(true);
		console.log(`login state: ${isLoggedIn}`)
	}
	const logoutHandler = () => {
		let header = {refreshToken: `${refreshToken}`}
		//헤더에 리프레쉬 심어서 요청보내기
		axios.get('https://api.m0ment.be/users/logout', {withCredentials: true, headers: header})
		.then(res => {
			//로그인상태 변경
			setIsLoggedIn(false)
			console.log(res)
		})
	}
	const refreshTokenHandler = (token) => {
		setRefreshToken(token)
	}

	return (
		<div className="header">
			{loginOn && <Login loginModalHandler={loginModalHandler} isLoggedInHandler={isLoggedInHandler} refreshTokenHandler={refreshTokenHandler} loginOn={loginOn}/>}
			{signUpON && <SignUp signUpModalHandler={signUpModalHandler} signUpON={signUpON}/>}
			<Link className="header-title" to="/">
				<h1>Moment</h1>
			</Link>
			{!isLoggedIn && 
				<div className="option">
				<div className="header-login" onClick={loginModalHandler}>Login</div>
				<div className="header-signup" onClick={signUpModalHandler}>Sign Up</div>
			</div>}
			{isLoggedIn && 
				<div className="option">
				<Link to="/myprofile"><div className="header-login" >My Page</div></Link>
				<div className="header-signup" onClick={logoutHandler}>Sign Out</div>
			</div>}
		</div>
	);
}

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
	const loginModalHandler = () => {
		setLoginOn(!loginOn)
	}
	const signUpModalHandler = () => {
		setSignUpOn(!signUpON)
	}
	const isLoggedInHandler = () => {
		setIsLoggedIn(true);
	}
	const signOutHandler = () => {
		console.log(1)
		setIsLoggedIn(false)
		// axios.get('https://api.m0ment.be/users/logout', {withCredentials: true})
		// .then(res => {
		// 	setIsLoggedIn(false)
		// })
	}

	return (
		<div className="header">
			{loginOn && <Login loginModalHandler={loginModalHandler} isLoggedInHandler={isLoggedInHandler} loginOn={loginOn}/>}
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
				<div className="header-signup" onClick={signOutHandler}>Sign Out</div>
			</div>}
		</div>
	);
}

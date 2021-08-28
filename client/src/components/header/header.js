import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './header.css';
import Login from '../login/Login'
import ModalSignUp from '../modal/ModalSignUp'
import Modal from '../modal/Modal'
import PropTypes from 'prop-types'
export default function Header({getUserInfo, loginHandler, login, logoutHandler, refreshTokenHandler}) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loginOn, setLoginOn] = useState(false);
	const [signUpON, setSignUpOn] = useState(false);
	const loginModalHandler = () => {
		setLoginOn(!loginOn)
	}
	const signUpModalHandler = () => {
		setSignUpOn(!signUpON)
	}


	return (
		<div className="header">
			{loginOn && <Modal loginHandler={loginHandler} getUserInfo={getUserInfo} refreshTokenHandler={refreshTokenHandler}/>}
			{signUpON && <ModalSignUp />}
			<Link className="header-title" to="/">
				<h1>Moment</h1>
			</Link>
			{!login && 
				<div className="option">
				<div className="header-login" onClick={loginModalHandler}>Login</div>
				<div className="header-signup" onClick={signUpModalHandler}>Sign Up</div>
			</div>}
			{login && 
				<div className="option">
				<Link to="/myprofile"><div className="header-login" >My Page</div></Link>
				<div className="header-signup" onClick={logoutHandler}>Sign Out</div>
			</div>}
		</div>
	);
}

Login.propTypes = {
    getUserInfo:PropTypes.func
}
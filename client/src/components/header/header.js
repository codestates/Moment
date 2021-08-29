import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './header.css';
import Login from '../login/Login'
import ModalSignUp from '../modal/ModalSignUp'
import Modal from '../modal/Modal'
import PropTypes from 'prop-types'
export default function Header({getUserInfo, loginHandler, login, logoutHandler, refreshTokenHandler}) {
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [isSignupOpen, setIsSignupOpen] = useState(false);
	const loginModalHandler = () => {
		setIsLoginOpen(!isLoginOpen)
	}
	const signUpModalHandler = () => {
		setIsSignupOpen(!isSignupOpen)
	}


	return (
		<div className="header">
			{isLoginOpen && <Modal loginHandler={loginHandler} getUserInfo={getUserInfo} refreshTokenHandler={refreshTokenHandler} loginModalHandler={loginModalHandler} isLoginOpen={isLoginOpen}/>}
			{isSignupOpen && <ModalSignUp signUpModalHandler={signUpModalHandler} isSignupOpen={isSignupOpen}/>}
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

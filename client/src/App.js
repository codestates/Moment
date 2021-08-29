import './App.css';
import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../src/components/pages/homepage';
import Header from '../src/components/header/header';
import Login from './components/login/Login';
import WriteLog from './components/log/WriteLog';
import Mypage from './components/mypage/Mypage';
import MypageDetail from './components/mypage/MypageDetail';
import MainPage from '../src/components/main-page/mainpage';
import PostCard from '../src/components/post-card/postcard';
import Modal from './components/modal/Modal';
import LogDetail from './components/log/LogDetail'
import axios from 'axios'

function App() {
	const [userInfo, setUserInfo] = useState('');
	const [login, setLogin] = useState(false);
	const [refreshToken, setRefreshToken] = useState('')
	const getUserInfo = (data) => {
		setUserInfo(data);
		console.log('userInfo at App :', data);
	};
	const loginHandler = () => {
		setLogin(true)
	}
	const refreshTokenHandler = (token) => {
		setRefreshToken(token)
	}
	const logoutHandler = async () => {
		let header = {refreshToken: `${refreshToken}`}
		const response = await axios.get('https://api.m0ment.be/users/logout', {withCredentials: true, headers: header})
		console.log(response);
		setLogin(false)
	}
	return (
		<div>
			<Header getUserInfo={getUserInfo} loginHandler={loginHandler} login={login} logoutHandler={logoutHandler} refreshTokenHandler={refreshTokenHandler}/>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/main">
					<MainPage />
				</Route>
				<Route path="/log">
					<WriteLog login={login} loginHandler={loginHandler}/>
				</Route>
				<Route path="/myprofile">
					<Mypage login={login} loginHandler={loginHandler}/>
				</Route>
				<Route path="/fixprofile">
					<MypageDetail login={login} loginHandler={loginHandler}/>
				</Route>
				<Route path="/test">
					<LogDetail />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

import './App.css';
import React from 'react';
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
import LogDetail from './components/log/LogDetail';
import RecentPage from '../src/components/pages/recentpage';
import axios from 'axios';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/main">
					<MainPage />
				</Route>
				<Route path="/log">
					<WriteLog />
				</Route>
				<Route path="/myprofile">
					<Mypage />
				</Route>
				<Route path="/fixprofile">
					<MypageDetail />
				</Route>
				<Route path="/test">
					<LogDetail />
				</Route>
				<Route path="/main/recent">
					<RecentPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

import './App.css';
import React, {useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../src/components/pages/homepage';
import Header from '../src/components/header/header';
import Login from './components/login/Login';
import Log from './components/log/Log';
import Mypage from './components/mypage/Mypage';
import MypageDetail from './components/mypage/MypageDetail';
import MainPage from '../src/components/main-page/mainpage';

function App() {
    const [userInfo, setUserInfo] = useState('')

    const getUserInfo = (data) => {
        setUserInfo(data)
        console.log("userInfo at App :", userInfo)
    }
	return (
		<div>
			<Header getUserInfo={getUserInfo}/>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/main">
					<MainPage />
				</Route>
				<Route path="/log">
					<Log />
				</Route>
				<Route path="/myprofile">
					<Mypage />
				</Route>
				<Route path="/fixprofile">
					<MypageDetail />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../src/components/pages/homepage';
import Header from '../src/components/header/header';
import Login from './components/login/Login';
import MainPage from './components/main-page/mainpage';

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
			</Switch>
		</div>
	);
}

export default App;

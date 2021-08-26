import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../src/components/pages/homepage';
import Header from '../src/components/header/header';
import Login from './components/login/Login';
import Write from './components/write/Write'

function App() {
	return (
		<div>
			<Header />
			<Switch>
				{/* <Route exact path="/">
					<HomePage />
				</Route> */}
				<Route exact path="/">
					<Write />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

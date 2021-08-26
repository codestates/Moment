import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../src/components/pages/homepage';
import Header from '../src/components/header/header';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route>
					<HomePage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

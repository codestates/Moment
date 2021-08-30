import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
const Context = React.createContext({
	login: '',
	loginHandler: () => {},
	userInfo: '',
});

const ContextProvider = ({ children }) => {
	//login, signup
	const [headerModalOpen, setHeaderModalOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [isSignupOpen, setIsSignupOpen] = useState(false);
	const [userInfo, setUserInfo] = useState('');
	const [login, setLogin] = useState(false);
	const [refreshToken, setRefreshToken] = useState('');
	const headerModalHandler = () => {
		setHeaderModalOpen(!headerModalOpen);
		console.log(1);
	};
	const loginModalHandler = () => {
		setIsLoginOpen(!isLoginOpen);
		console.log(isLoginOpen);
	};
	const signUpModalHandler = () => {
		setIsSignupOpen(!isSignupOpen);
	};
	const getUserInfo = data => {
		setUserInfo(data);
		console.log('userInfo at App :', data);
	};
	const loginHandler = () => {
		localStorage.setItem('login', true);
		setLogin(true);
		console.log(localStorage.getItem('login'));
	};
	const refreshTokenHandler = token => {
		setRefreshToken(token);
	};
	const local = localStorage.getItem('login');
	useEffect(() => {
		if (local) setLogin(true);
		else setLogin(false);
	}, [local]);
	const logoutHandler = async () => {
		let header = { refreshToken: `${refreshToken}` };
		const response = await axios.get('https://api.m0ment.be/users/logout', {
			withCredentials: true,
			headers: header,
		});
		console.log(response);
		localStorage.removeItem('login');
		setLogin(false);
		document.location.href = './';
	};

	//recent
	const [posts, setPosts] = useState('');
	useEffect(async () => {
		const res = await axios.get('https://api.m0ment.be/log/recent/page/1');
		const logs = res.data.data;
		setPosts([logs]);
		console.log(posts);
	}, []);

	return (
		<Context.Provider
			value={{
				isLoginOpen,
				isSignupOpen,
				loginHandler,
				getUserInfo,
				refreshTokenHandler,
				loginModalHandler,
				login,
				signUpModalHandler,
				logoutHandler,
				posts,
				headerModalOpen,
				headerModalHandler,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { ContextProvider, Context };

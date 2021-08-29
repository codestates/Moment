import React, { useState, useContext } from 'react';
import axios from 'axios';
import classes from './WriteLog.module.css';
import Modal from '../modal/Modal';
import { AiFillLock, AiFillUnlock } from 'react-icons/ai';
import { Context } from '../../Context';

const WriteLog = () => {
	const { login } = useContext(Context);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [secret, setSecret] = useState(false);
	const titleHandler = e => {
		setTitle(e.target.value);
		console.log(title);
	};
	const contentHandler = e => {
		setContent(e.target.value);
	};
	const secretHandler = e => {
		setSecret(e.currentTarget.checked);
		console.log(secret);
	};
	const submitHandler = event => {
		event.preventDefault();
		console.log({ conetent: content, title: title, secret: secret });
		axios
			.post(
				'https://api.m0ment.be/log/submit',
				{ conetent: content, title: title, secret: secret },
				{ withCredentials: true },
			)
			.then(res => console.log(res));
	};
	console.log(login);
	return (
		<>
			{!login && <Modal />}
			{login && (
				<div className={classes.contains}>
					<div className={classes.header}>
						<h2>Make your Moment Forever</h2>
					</div>
					<form className={classes.formContainer} onSubmit={submitHandler}>
						<div className={classes.container}>
							<div className={classes.titleContainer}>
								<h4>Title</h4>
								<input
									className={classes.title}
									type="text"
									placeholder="write down a title"
									onChange={titleHandler}
								/>
							</div>
							<div className={classes.author}>
								<div>
									<span>author: </span>
									<span>userNickName</span>
								</div>
							</div>
							<div className={classes['content__container']}>
								<h4>Content</h4>
								<textarea
									className={classes.content}
									placeholder="Make your Moment forever."
									onChange={contentHandler}
								/>
								<div className={classes.grip}></div>
							</div>
						</div>
						<div className={classes.secret}>
							<input
								className={classes.lock}
								type="checkbox"
								id="secret"
								name="secret"
								checked={secret ? true : false}
								value={secret}
								onChange={secretHandler}
							/>
							<label id="secret" htmlFor="secret">
								{!secret && (
									<div className={classes.lockContainer}>
										<AiFillUnlock size="24" />
										<span className={classes.lockImg}>Keep Your Precious Moment to Yourself</span>
									</div>
								)}
								{secret && (
									<div className={classes.lockContainer}>
										<AiFillLock size="24" />
										<span className={classes.unlockImg}>Share your Moment with Others</span>
									</div>
								)}
							</label>
						</div>
						<div className={classes.btnContainer}>
							<button className={classes.btn} type="submit">
								<h4>POST</h4>
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default WriteLog;

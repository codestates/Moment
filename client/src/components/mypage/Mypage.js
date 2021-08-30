import React, { useState, useContext } from 'react';
import axios from 'axios';
import classes from './Mypage.module.css';
import MypageDetail from './MypageDetail';
import { AiOutlineRead, AiOutlineFileSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { RiUserSettingsLine } from 'react-icons/ri';
import { ReactComponent as Book } from '../../assets/book.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import { ReactComponent as Plus } from '../../assets/plusIcon.svg';
import { Link } from 'react-router-dom';

const Mypage = () => {
	const [userInfo, setUserInfo] = useState({ email: 'clover@gmail.com', nickname: 'clover' });
	// axios.get('https://api.m0ment.be/users/profile', { withCredentials: true }).then(res => {
	// 	const { data: userInfo } = res;
	// 	setUserInfo(userInfo);
	// });

	const { email, nickname } = userInfo;
	console.log(email);
	return (
		<>
			<div className={`${classes.card} ${classes.middle}`}>
				<div className={classes.front}>
					<img src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
				</div>

				<div className={classes.back}>
					<div className={`${classes.back__content} ${classes.middle}`}>
						<div className={classes.upperContainer}>
							<div>
								<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
							</div>
							<Link to="/log">
								{/* <div className={classes.writeLog}> */}
								<AiOutlinePlusCircle size={30} color="#2c3e50" />
								{/* </div> */}
							</Link>
							<div className={classes.text__container}>
								<span>{nickname}</span>
								<span>{email}</span>
							</div>
						</div>

						<div className={classes.link__container}>
							{/* <Link to="/recent/page/1"> */}
							<button className={classes.btn}>
								<AiOutlineRead size={30} />
								<br />
								최신 글
							</button>
							{/* </Link> */}
							{/* <Link to="/mylogs"> */}
							<button className={classes.btn}>
								<AiOutlineFileSearch size={30} />
								<br />내 글 보기
							</button>
							{/* </Link> */}
							{/* <Link to="/fixprofile"> */}
							<button className={classes.btn}>
								<RiUserSettingsLine size={30} />
								<br />
								정보 수정
							</button>
							{/* </Link> */}
						</div>
					</div>
				</div>
			</div>
			)
		</>
	);
};

export default Mypage;

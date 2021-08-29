import React from 'react';
import { Link } from 'react-router-dom';
import {FaUserAstronaut} from 'react-icons/fa'
import classes from './Mypage__demo.module.css'
import {ReactComponent as Testimg} from '../../assets/svg/4.svg'
import {ReactComponent as Book} from '../../assets/book.svg'
import {ReactComponent as Search} from '../../assets/search.svg'
import {ReactComponent as Edit} from '../../assets/edit.svg'
import {ReactComponent as Plus} from '../../assets/plusIcon.svg'

const Mypage__demo = ({post}) => {

    return (
        <div className={`${classes.card} ${classes.middle}`}>
            <div className={classes.front}>
                <img src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            </div>
            
            <div className={classes.back}>
                <div className={`${classes.back__content} ${classes.middle}`}>
                    <div>
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                    </div>
                    <Link to="/log"><div className={classes.writeLog}><Plus /></div></Link>
                    <div className={classes.text__container}>
                        <span>mark@gmail.com</span>
                        <span>clover</span>
                    </div>

                    <div className={classes.link__container}>
                        {/* <Link to="/recent/page/1"> */}
                            <button className={classes.btn}><Book width="34.59" height="34.59"/><br />최신 글</button>
                        {/* </Link> */}
                        {/* <Link to="/mylogs"> */}
                            <button className={classes.btn}><Search width="34.59" height="34.59"/><br />내 글 보기</button>
                        {/* </Link> */}
                        {/* <Link to="/fixprofile"> */}
                            <button className={classes.btn}><Edit width="34.59" height="34.59"/><br />정보 수정</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Mypage__demo

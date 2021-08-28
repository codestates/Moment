import React, {useState, useEffect} from 'react'
const dotenv = require('dotenv');
import axios from 'axios'
import PropTypes from 'prop-types'
import classes from './Login.module.css'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import Input from '../UI/Input'
// import GoogleLoginBtn from './GoogleLoginBtn'


const Login = ({getUserInfo, loginModalHandler, loginOn, isLoggedInHandler, refreshTokenHandler}) => {
    const FACEBOOK_ID = process.env.FACEBOOK_ID
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

    const [enteredEmail, setEnteredEmail] = useState('')
    const [emailIsValid, setEmailIsValid] = useState(true)
    const [enteredPassword, setEnteredPassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState(true)
    const [userInfo, setUserInfo] = useState({email:'', nickname:''})
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                emailIsValid && passwordIsValid && enteredPassword.length >= 8 && enteredEmail.length !== 0
            )
    },300);
    return () => {clearTimeout(identifier)}}, [enteredEmail, enteredPassword])

    const emailInputHandler = (e) => {
        setEnteredEmail(e.target.value)
    }
    const passwordInputHandler = (e) => {
        setEnteredPassword(e.target.value);
    }
    const validateEmailHandler = () => {
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
        if(!reg_email.test(enteredEmail)) setEmailIsValid(false)
        else setEmailIsValid(true);
    }
    const validatePasswordHandler = () => {
        const reg_pw = /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/
        if(!reg_pw.test(enteredPassword)) setPasswordIsValid(false);
        else setPasswordIsValid(true);
    }
    

    const loginHandler = (event) => {
        event.preventDefault();
        console.log("clicked")
        axios.post('https://api.m0ment.be/users/login', {email: enteredEmail, password: enteredPassword}, { withCredentials: true })
        .then(res => {
            console.log(JSON.stringify(res.headers))
            const refreshToken = JSON.stringify(res.headers.refreshtoken)
            const {data: userData} = res;
            getUserInfo(userData);
            //로그인상태관리함수
            isLoggedInHandler();
            //refreshToken저장
            refreshTokenHandler(refreshToken)
        })
        .catch(err => {
            alert("please check your email or password again")
        })
    }
    const facebookHandler = async() => {
        //get이 맞는지 모르겠음
        const facebookCode = await axios.get(`https://www.facebook.com/v11.0/dialog/oauth?client_id=${FACEBOOK_ID}&redirect_uri=https://api.m0ment.be/users/facebook&scope=email,public_profile`)
        const header = {code: facebookCode}
        await axios.post('https://api.m0ment.be/users/facebook', {headers: header, withCredentials: true})
    }
    const googleHandler = async() => {
        const googleCode = await axios.post(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=code&scope=openid email&redirect_uri=https://api.m0ment.be/users/google`)
        const header = {code: googleCode}
        await axios.post('https://api.m0ment.be/users/google', {headers: header, withCredentials: true})
    }
    
    return (
        <Modal loginModalHandler={loginModalHandler} loginOn={loginOn}>
            <div className={classes.container}>
            <form onSubmit={loginHandler}>
                <div className={classes.title}>
                    <h1>M.</h1>
                    <br/>
                    <h2>Log in</h2>
                    <div className={classes.inputContainer}>
                        <div>
                            <input className={emailIsValid ? `${classes.input}` : `${classes.input} ${classes.invalid}`} placeholder="E-mail" type="text" onChange={emailInputHandler} onBlur={validateEmailHandler} value={enteredEmail}/>
                        </div>
                        <div>
                            <input className={passwordIsValid ? `${classes.input}` : `${classes.input} ${classes.invalid}`} placeholder="Password" type="password" onChange={passwordInputHandler} onBlur={validatePasswordHandler} value={enteredPassword}/>
                        </div>
                    </div>
                    <div className={classes.btnContainer}>
                        <div>
                        <button className={classes.btn} type="button" onClick={facebookHandler} >FaceBookTest</button>

                        </div>
                        <div>
                        <button className={classes.btn} type="button" onClick={googleHandler}>GoogleTest</button>

                        </div>
                        <div>
                        <button className={formIsValid ? `${classes.btn}` : `${classes.btn} ${classes.btnInvalid}`} type="submit" disabled={!formIsValid}>Login</button>

                        </div>
                    </div>
                </div>
            </form>
            </div>
        </Modal>
    )
}

Login.propTypes = {
    loginModalHandler: PropTypes.any,
    loginOn: PropTypes.any,
    isLoggedInHandler:PropTypes.func,
    refreshTokenHandler:PropTypes.func,
    getUserInfo:PropTypes.func
}
export default Login
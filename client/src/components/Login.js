import React, {useState} from 'react'
import axios from 'axios'

import classes from './Login.module.css'
import Modal from './UI/Modal'
import Button from './UI/Button'
import Input from './UI/Input'

const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [emailIsValid, setEmailIsValid] = useState(true)
    const [enteredPassword, setEnteredPassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState(true)
    const [userInfo, setUserInfo] = useState({email:'', nickname:''})

    const emailInputHandler = (e) => {
        setEnteredEmail(e.target.value)
    }
    const passwordInputHandler = (e) => {
        setEnteredPassword(e.target.value)
    }
    const validateEmailHandler = (e) => {
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
        if(!reg_email.test(e.target.value)) setEmailIsValid(false)
        else setEmailIsValid(true);
    }
    const validatePasswordHandler = (e) => {
        const reg_pw = /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/
        if(!reg_pw.test(e.target.value)) setPasswordIsValid(false);
        else setPasswordIsValid(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post('https://api.m0ment.be/users/login')
        .then(res => {
            const {data: userData} = res.data;
            setUserInfo(userData)
        })
    }

    return (
        <Modal>
            <>
            <form className={classes.form} onSubmit={submitHandler}>
                <div>
                <h2>회원가입</h2>
                <div>
                    <Input input={{placeholder:"E-mail", className: emailIsValid || classes.invalid,  onChange: emailInputHandler, onBlur:validateEmailHandler, value:enteredEmail}}/>
                    {/* <input placeholder="E-mail" className={emailIsValid ? '' : classes.invalid}  onChange={emailInputHandler} onBlur={validateEmailHandler} value={enteredEmail}></input> */}
                </div>
                <div>
                    <input placeholder="Password" className={passwordIsValid ? '' : classes.invalid}  onChange={passwordInputHandler} onBlur={validatePasswordHandler} value={enteredPassword}></input>
                </div>
                <div>
                    <button>Facebook</button>
                    <button>Google</button>
                </div>
                <Button btn={{type: "submit"}}>Login</Button>
                </div>
            </form>
            </>
        </Modal>
    )
}

export default Login

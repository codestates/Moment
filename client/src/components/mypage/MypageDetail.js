import React, {useState} from 'react';
import axios from 'axios';
import classes from './MypageDetail.module.css';
import PropTypes from 'prop-types';
import Card from '../UI/MypageCard';
import Input from '../UI/Input'
import Button from '../UI/Button'

const MypageDetail = () => {
    const [userInfo, setUserInfo] = useState({email:'clover@gmail.com', nickname:'clover'});
    const [enteredEmail, setEnteredEmail] = useState('clover@gmail.com');
    const [enteredNickname, setEnteredNickname] = useState('clover')
    const [enteredPassword, setEnteredPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(true);

    const editHandler = (event) => {
        event.preventDefault();
        axios.post('https://api.m0ment.be/', {email: '', nickname: '', password: ''}, {withCredentials: true})
        .then(res => console.log(res))
    }
    const emailInputHandler = (e) => {
        setEnteredEmail(e.target.value)
    }
    const nickNameInputHandler = (e) => {
        setEnteredNickname(e.target.value)
    }
    const passwordInputHandler = (e) => {
        setEnteredPassword(e.target.value)
    }
    const confirmPasswordHandler = (e) => {
        if(enteredPassword === e.target.value) setConfirmPassword(true)
        else setConfirmPassword(false)
    }

    return (
        <Card className={classes.container}>
            <form className={classes.form} onSubmit={editHandler}>
                <h2 className={classes.title}>My Info</h2>
                <Input className={classes.ipt} input={{type: "text", placeholder: "E-Mail", value:`${enteredEmail}`, onChange: emailInputHandler}}/>
                <Input className={classes.ipt} input={{type: "text", placeholder: "Nickname", value:`${enteredNickname}`, onChange: nickNameInputHandler}}/>
                <Input className={classes.ipt} input={{type: "password", placeholder: "Password", onChange: passwordInputHandler}}/>
                <Input className={confirmPassword ? `${classes.ipt}` : `${classes.ipt} ${classes.invalid}`} input={{type: "password", placeholder: "Confrim Password", onChange:confirmPasswordHandler}}/>
                <div className={classes.btncontainer}>
                    <Button className={classes.btn}>Edit</Button>
                </div>
            </form>
        </Card>
    )
}

MypageDetail.propTypes = {
    loginModalHandler: PropTypes.any,
    loginOn: PropTypes.any
}

export default MypageDetail

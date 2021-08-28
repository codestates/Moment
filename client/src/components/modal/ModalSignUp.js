import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './ModalSignUp.css';



const ModalSignUp = () => {
	const modalRef = useRef();
    const [modalOpen, setModalOpen] = useState(true);
	const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [enteredNickname, setEnteredNickname] = useState('');
    const [nicknameIsValid, setNicknameIsValid] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false)
	useEffect(() => {
        if(emailIsValid && passwordIsValid&& nicknameIsValid && enteredEmail.length !==0 && enteredPassword.length >=8 && enteredNickname.length !==0 && confirmPassword) setFormIsValid(true);
        else setFormIsValid(false)
    }, [emailIsValid, passwordIsValid, enteredEmail, enteredPassword, enteredNickname, confirmPassword])
	const emailInputHandler = (e) => {
        setEnteredEmail(e.target.value)
    }
    const passwordInputHandler = (e) => {
        setEnteredPassword(e.target.value)
        validatePasswordHandler(e.target.value)
    }
    const validateEmailHandler = (e) => {
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
        if(!reg_email.test(e.target.value)) setEmailIsValid(false)
        else setEmailIsValid(true);
    }
    const validatePasswordHandler = (e) => {
        const reg_pw = /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/
        if(!reg_pw.test(e)) setPasswordIsValid(false);
        else setPasswordIsValid(true);
    }
    const confirmPasswordHandler = (e) => {
        console.log(enteredPassword, e.target.value)
        if(enteredPassword === e.target.value) setConfirmPassword(true)
        else setConfirmPassword(false)
        console.log(confirmPassword)
    }
    const nickNameInputHandler = (e) => {
        setEnteredNickname(e.target.value)
        validateNickNameHandler(e.target.value)
    }
    const validateNickNameHandler = (e) => {
        const reg_NN = /^.*(?=.{3,20})(?=.*[a-zA-Z0-9]).*$/
        if(!reg_NN.test(e)) setNicknameIsValid(false);
        else setNicknameIsValid(true);
    }
	const closerModal = e => {
		if (modalRef.current === e.target) {
			setModalOpen(false);
		}
	};
    const submitHandler = async (event) => {
		event.preventDefault();
		const res = await axios.put('https://api.m0ment.be/users/signup', {email: enteredEmail, password: enteredPassword, nickname: enteredNickname})
		console.log(res)
        setModalOpen(false);
    }

    const portalPlace = document.getElementById("overlay")
	return (
		<>  
        {ReactDOM.createPortal( modalOpen ? (
				<div className="background" ref={modalRef} onClick={closerModal}>
					<div className="modalwrapper">
						<img className="modalimage" src={require('../../assets/svg/14.svg').default} alt="" />
						<div className="modalcontent">
							<h1>M.</h1>
							
							<span>Join us !</span>
							<form className="inputwrapper">
								<input className={emailIsValid ? '' : "invalid"} placeholder="E-mail" type="text" onChange={emailInputHandler} onBlur={validateEmailHandler} value={enteredEmail}></input>
								<input className={nicknameIsValid ? '' : "invalid"} placeholder="NickName" type="text" onChange={nickNameInputHandler} value={enteredNickname}></input>
								<input className={passwordIsValid ? '' : "invalid"} placeholder="Password" type="password" onChange={passwordInputHandler} value={enteredPassword}></input>
								<input className={confirmPassword ? '' : "invalid"} placeholder="Confirm Password" type="password" onChange={confirmPasswordHandler}></input>
							</form>
							<div className="options">
								<button className={formIsValid ? "btn-recent join" : "btn-recent join invalidbtn"} onClick={submitHandler} disabled={!formIsValid}>Join</button>
							</div>
						</div>
						<div className="modalclosebutton" onClick={()=>setModalOpen(prev => !prev)}>
							&#10005;
						</div>
					</div>
				</div>
			) : null , portalPlace)}
		</>
	);
}

export default ModalSignUp

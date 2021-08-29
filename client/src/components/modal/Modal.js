import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './Modal.css';



const Modal = ({loginHandler, getUserInfo, refreshTokenHandler, loginModalHandler, isLoginOpen}) => {
	const modalRef = useRef();
	const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        if(emailIsValid && passwordIsValid&& enteredEmail.length >0 && enteredPassword.length >=8 ) setFormIsValid(true);
        else setFormIsValid(false)
    })
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
	const closerModal = e => {
		if (modalRef.current === e.target) {
            loginModalHandler()
			// setModalOpen(false);
		}
	};
    const submitHandler = async() => {
        const res = await axios.post("https://api.m0ment.be/users/login", {email:enteredEmail , password:enteredPassword}, { withCredentials: true })
        getUserInfo(res.data.data)
        const refreshToken = JSON.stringify(res.headers.refreshtoken)
        console.log(refreshToken)
        refreshTokenHandler(refreshToken)
        loginHandler()
        loginModalHandler()
        document.location.replace = '/main'
    }

    const portalPlace = document.getElementById("overlay")

	return (
		<>  
        {ReactDOM.createPortal( isLoginOpen ? (
				<div className="background" ref={modalRef} onClick={closerModal}>
					<div className="modalwrapper" >
						<img className="modalimage" src={require('../../assets/svg/17.svg').default} alt="" />
						<div className="modalcontent">
							<h1>M.</h1>
							<span>With us?</span>
                            <form className="inputwrapper">
                                <input className={emailIsValid ? '' : "invalid"} placeholder="E-mail" type="text" onChange={emailInputHandler} onBlur={validateEmailHandler} value={enteredEmail}></input>
                                <input className={passwordIsValid ? '' : "invalid"} placeholder="Password" type="password" onChange={passwordInputHandler} value={enteredPassword}></input>
                            </form>
							<div className="options">
								<button className={formIsValid ? "btn-recent join" : "btn-recent join invalidbtn"} onClick={submitHandler}>Join</button>
								<button className="btn-recent join join-google">
									<FontAwesomeIcon icon={faGoogle} />
								</button>
								<button className="btn-recent join join-facebook">
									<FontAwesomeIcon icon={faFacebookF} />
								</button>
							</div>
						</div>
						<div className="modalclosebutton" onClick={loginModalHandler}>
							&#10005;
						</div>
					</div>
				</div>
			) : null , portalPlace)}
		</>
	);
}

export default Modal

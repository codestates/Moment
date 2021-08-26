import React from 'react'
import Modal from './UI/Modal'

const SignUp = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    }


    return (
        <form onSubmit={submitHandler}>
            <div>
                <input placeholder="E-mail"></input>
            </div>
            <div>
                <input placeholder="Password"></input>
            </div>
            <div>
                <input placeholder="Password Confirm"></input>
            </div>
            <div>
                <input placeholder="Nickname"></input>
            </div>

            <button type="submit">회원가입</button>
        </form>
    )
}

export default SignUp
import React from 'react'
import Modal from './UI/Modal'

const SignUp = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [emailIsValid, setEmailIsValid] = useState(true)
    const [enteredPassword, setEnteredPassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState(true)
    const [enteredNickname, setEnteredNickname] = useState('')

    const submitHandler = (event) => {
        event.preventDefault();
        axios.put('https://api.m0ment.be/users/signup', {email: enteredEmail, password: enteredPassword, nickname: setEnteredNickname})
        .then(res => {
            const {data: userData} = res.data;
            setUserInfo(userData)
        })
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
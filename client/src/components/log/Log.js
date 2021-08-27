import React, {useState} from 'react'
import axios from 'axios'
import Card from '../UI/Card'
import Input from '../UI/Input'
import Button from '../UI/Button'
import classes from './Log.module.css'

const Log = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [secret, setSecret] = useState(false);
    const titleHandler = (e) => {
        setTitle(e.target.value)
        console.log(title)
    }
    const contentHandler = (e) => {
        setContent(e.target.value)
    }
    const secretHandler = (e) => {
        setSecret(e.currentTarget.checked)
        console.log(secret)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("https://api.m0ment.be/log/submit", {conetent: content, title: title, secret: secret}, {withCredentials: true})
        .then(res => console.log(res))
    }


    return (
        <Card>
            <form className={classes.formContainer} onSubmit={submitHandler}>
                <div className={classes.container}>
                    <Input className={classes.cardInput} input={{type: "text", placeholder: "title", onChange:titleHandler}} />
                    <textarea className={classes.textarea} placeholder="Remember your moment in Moments forever." onChange={contentHandler} />
                </div>
                <div className={classes.secret}>
                    <input type="checkbox" id="secret" name="secret" checked={secret ? true : false} value={secret} onChange={secretHandler}/>
                    <label id="secret" htmlFor="secret">
                        <span>비밀글로 작성 하시겠습니까?</span>
                    </label>
                </div>
                <div className={classes.btnContainer}>
                    <Button className={classes.writebtn} btn={{type: "submit"}}>POST</Button>
                </div>
            </form>
        </Card>
    )
}

export default Log

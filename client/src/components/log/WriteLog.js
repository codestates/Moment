import React, {useState} from 'react'
import axios from 'axios'
import classes from './WriteLog.module.css'
import { faLock, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WriteLog = () => {
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
        console.log({conetent: content, title: title, secret: secret})
        axios.post("https://api.m0ment.be/log/submit", {conetent: content, title: title, secret: secret}, {withCredentials: true})
        .then(res => console.log(res))
    }


    return (
        <div className={classes.contains}>
            <div className={classes.header}>
                <h2>Make your Moment Forever</h2>
            </div>
            <form className={classes.formContainer} onSubmit={submitHandler}>
                <div className={classes.container}>
                    <div className={classes.titleContainer}>
                        <h4>Title</h4>
                        <input className={classes.title} type="text" placeholder="write down a title" onChange={titleHandler} />
                    </div>
                    <div className={classes.author}>
                        <div>
                            <span>author: </span><span>userNickName</span>
                        </div>
                    </div>
                    <div className={classes["content__container"]}>
                        <h4>Content</h4>
                        <textarea className={classes.content} placeholder="Make your Moment forever." onChange={contentHandler} />
                        <div className={classes.grip}></div>
                    </div>
                </div>
                <div className={classes.secret}>
                    <input className={classes.lock} type="checkbox" id="secret" name="secret" checked={secret ? true : false} value={secret} onChange={secretHandler}/>
                    <label id="secret" htmlFor="secret">
                        {!secret && <span className={classes.lockImg}><span className={classes.text}>Keep Your Precious Moment to Yourself</span></span>}
                        {secret && <span className={classes.unlockImg}><span className={classes.text}>Share your Moment with Others</span></span>}
                    </label>
                </div>
                <div className={classes.btnContainer}>
                    <button className={classes.btn} type="submit"><h4>POST</h4></button>
                </div>
            </form>
        </div>
    )
}


export default WriteLog

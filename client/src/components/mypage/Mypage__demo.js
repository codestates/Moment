import React from 'react'
import {FaUserAstronaut} from 'react-icons/fa'
import classes from './Mypage__demo.module.css'

const Mypage__demo = ({post}) => {

    return (
        <div className={`${classes.contains} ${classes.middle}`}>

            <div className={classes.front}>
                <img src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg"/>
            </div>


            <div className={classes.back}>
                <div className={`${classes.back__content} ${classes.middle}`}>
                    <div className={classes.header__container}>
                        <img src={require('../../static/images/composition-10.png').default} />
                    </div>
                    <div className={classes.userInfo__container}>
                        <FaUserAstronaut size="50"/>
                        <span>user__nickname</span>
                        <span>created__at</span>
                    </div>
                    <div className={classes.content__container}>
                        <div className={classes.title__container}>
                            <h2>This is Title</h2>
                        </div>
                        <div className={classes.body__container}>
                            <h2>This is the Body</h2>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}


export default Mypage__demo

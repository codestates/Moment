import React, {useState} from 'react';
import axios from 'axios';
import classes from './MyLog.module.css';

import LogView from './LogView'

const MyLog = () => {
    //필요한 정보: 작성자 이름, 작성 일자
    const [posts, setPosts] = useState([{id: 1, title: "working?", content: "please", author: "Mark", updated:'2021-08-27', like: 3}, {id: 2, title: "really?", content: "please", author: "Mark", updated:'2021-08-27', like: 3}])
    axios.get("https://api.m0ment.be/log/my/page", {withCredentials: true})
    .then(res => {
        const {data} = res
        console.log(data)
        setPosts(data)
    })

    return (
        <>
        {posts.map(post => <LogView key={post.id} post={post}/>)}
        </>
    )
}

export default MyLog

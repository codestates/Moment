import React from 'react'
import PropTypes from 'prop-types'
import classes from './LogView.module.css'

const LogView = ({post}) => {

    return (
        <div style={{backgroundImage: `url(${"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg"})`}}>
            <div>{post.title}</div>
            <div>
                <span>{post.author} {post.updated}</span>
            </div>
            <div>{post.content}</div>
            <div>{post.like}</div>
        </div>
    )
}

LogView.propTypes = {
    post: PropTypes.any
}
export default LogView

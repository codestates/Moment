import React from 'react'
import PropTypes from 'prop-types'

const LogView = ({post}) => {

    return (
        <div>
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

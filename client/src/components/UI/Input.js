import React from 'react'
import PropTypes from 'prop-types'
import classes from './Input.module.css'

const Input = ({children,input}) => {
    return (
        <input className={classes.input} {...input}>
           {children} 
        </input>
    )
}

Input.propTypes = {
    children: PropTypes.any,
    input: PropTypes.any
}

export default Input
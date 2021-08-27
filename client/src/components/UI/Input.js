import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import classes from './Input.module.css'

const Input = ({children, input, className }) => {
    return (
        <div className={classes.container}>
            {/* <label htmlFor={input.id}> {label} </label> */}
            <input className={`${classes.input} ${className}`}  {...input}>
            {children} 
            </input>
        </div>
    )
}

Input.propTypes = {
    children: PropTypes.any,
    input: PropTypes.any,
    className: PropTypes.any,
    label: PropTypes.any
}

export default Input
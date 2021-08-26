import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.css'

const Button = ({children, btn}) => {
    return (
        <button className={classes.button} {...btn}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    btn: PropTypes.any
}

export default Button
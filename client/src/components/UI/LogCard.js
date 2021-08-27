import React from 'react'
import classes from './LogCard.module.css'
import PropTypes from 'prop-types'

const LogCard = ({children}) => {
    return (
        <div className={classes.logCard}>
            {children}
        </div>
    )
}

LogCard.propTypes = {
    children: PropTypes.any
}

export default LogCard

import React from "react"
import PropTypes from 'prop-types'
import './buttonCalc.css'

export const ButtonCalc = ({
    size = 'simple',
    background = 'pink',
    text,
    ...props

}) => {
    return (
        <div>
            <button
                type = "button"
                className={['button', `button-${size}`,`button-${background}`].join(' ')}
                {...props}
            >
                {text}
            </button>
        </div>
    )
}

ButtonCalc.PropTypes = {
    size: PropTypes.oneOf(['simple', 'long']),
    backgroundColor: PropTypes.oneOf(['white', 'pink']),
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
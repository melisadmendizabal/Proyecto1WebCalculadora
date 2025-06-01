import React from "react"
import PropTypes from 'prop-types'
import './buttonCalc.css'

export const ButtonCalc = ({
    size = 'simple',
    background = 'pink',
    text,
    onClick

}) => {
    return (
        <div>
            <button
                type = "button"
                className={['button', `button-${size}`,`button-${background}`].join(' ')}
                onClick = {onClick}
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
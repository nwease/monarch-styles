import React from 'react';
import './styles/button.scss';

const Button = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <button
            className={`${inverted ? 'inverted' : ''} 
            ${isGoogleSignIn ? 'googleSignIn' : ''
            } button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;

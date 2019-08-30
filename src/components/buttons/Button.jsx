import React from 'react';
import './styles/button.scss';

const Button = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'googleSignIn' : ''} button`} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;

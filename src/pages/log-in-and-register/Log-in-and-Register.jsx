import React from 'react';
import './styles/log-in-and-register.scss';
import LogIn from '../../components/log-in/Log-in';
import SignUp from '../../components/sign-up/Sign-up';

const LogInAndRegister = () => {
    return (
        <div className='log-in-and-register'>
            <LogIn />
            <SignUp />
        </div>
    );
};

export default LogInAndRegister;

import React, {Component} from 'react';
import Input from '../input/Input';
import Button from '../buttons/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './styles/sign-up.scss';

class SignUp extends Component {

    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            displayPassword: ''
        }
    }

    render() {

        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>
                    Do not have an account
                </h2>

                <span>
                    Sign up with email and password
                </span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <Input
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        requied
                    />

                    <Input
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        requied
                    />

                    <Input
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        requied
                    />

                    <Input
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        requied
                    />
                </form>
            </div>
        );
    }
}

export default SignUp;
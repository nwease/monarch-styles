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
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Password does not match');
            return;
        }
        
        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };

    render() {

        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>
                    Do not have an account?
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
                        required
                    />

                    <Input
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <Input
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <Input
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <Button type='submit'>
                        SIGN UP
                    </Button>
                </form>
            </div>
        );
    }
}

export default SignUp;
import React, {Component} from 'react';
import Input from '../input/Input';
import Button from '../buttons/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './styles/log-in.scss';

class LogIn extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (e) {
            console.log(e);
        }
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    };

    render() {
        return <div className='log-in'>
            <h2>
                Have an account?
            </h2>

            <span>
                Enter your email and password
            </span>

            <form onSubmit={this.handleSubmit}>
                <Input
                    name='email'
                    type='email'
                    value={this.state.email}
                    label='email'
                    handleChange={this.handleChange}
                    required
                />

                <Input
                    name='password'
                    type='password'
                    value={this.state.password}
                    label='password'
                    handleChange={this.handleChange}
                    required
                />

                <div className='buttons'>
                    <Button type='submit'>
                        Sign In
                    </Button>

                    <Button className='button' onClick={signInWithGoogle} isGoogleSignIn>
                        Google log in
                    </Button>
                </div>
            </form>
        </div>;
    }
}

export default LogIn;
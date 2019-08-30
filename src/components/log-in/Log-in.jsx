import React, {Component} from 'react';
import Input from '../input/Input';
import './styles/log-in.scss';

class LogIn extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    };

    render() {
        return (
            <div className='log-in'>
                <h2>
                    LOGIN
                </h2>

                <span>
                    Log-in with your email and password
                </span>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <label>
                        Email
                    </label>

                    <Input
                        name='password'
                        type='password'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <label>
                        Password
                    </label>

                    <input type='submit' value='submit-form' />
                </form>
            </div>
        );
    }
}

export default LogIn;
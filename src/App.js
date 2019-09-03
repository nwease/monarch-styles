import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import LogInAndRegister from './pages/log-in-and-register/Log-in-and-Register';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/actions';

class App extends Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.props.setCurrentUser ({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                 });
            }

            this.setState({
                currentUser: userAuth
            });
        })
    }

     componentWillUnmount() {
         this.unsubscribeFromAuth();
     }

    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={Shop} />
                    <Route path='/login' component={LogInAndRegister} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps) (App);

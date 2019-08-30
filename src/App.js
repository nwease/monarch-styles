import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import LogInAndRegister from './pages/log-in-and-register/Log-in-and-Register';

function App() {
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

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/Cart-Icon';
import Cart from '../cart/Cart';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './styles/header.scss';

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link classsName='container' to='/'>
                <Logo className='logo' />
                <h1>Monarch Styles</h1>
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>

                <Link className='option' to='/contact'>
                    CONTACT
                </Link>

                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        LOG OUT
                    </div>
                ) : (
                    <Link className='option' to='/login'>
                        LOG IN
                    </Link>
                )}

                <CartIcon />

            </div>

            {hidden ? null : <Cart />}

        </div>
    );
};

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps) (Header);


import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/Cart-Icon';
import Cart from '../cart/Cart';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';

const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
                <h1>Monarch Styles</h1>
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>

                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>

                {currentUser ? (
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                        LOG OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/login'>
                        LOG IN
                    </OptionLink>
                )}

                <CartIcon />

            </OptionsContainer>

            {hidden ? null : <Cart />}

        </HeaderContainer>
    );
};

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps) (Header);


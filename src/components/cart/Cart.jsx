import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import Button from '../buttons/Button';
import CartItem from '../cart-item/Cart-Item';
import { selectCartItems } from'../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import './styles/cart.scss';

const Cart = ({cartItems, history, dispatch}) => {
    return (
        <div className='dropdown'>
            <div className='items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Cart is empty</span>
                )}
            </div>

            <Button onClick={() => {
                history.push('./checkout');
                dispatch(toggleCartHidden());
            }}>
                CHECKOUT
            </Button>
        </div>
    );
};

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps) (Cart));

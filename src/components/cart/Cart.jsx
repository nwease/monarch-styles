import React from 'react';
import { connect } from 'react-redux';
import Button from '../buttons/Button';
import CartItem from '../cart-item/Cart-Item';
import { selectCartItems } from'../../redux/cart/cart-selectors';
import './styles/cart.scss';

const Cart = ({cartItems}) => {
    return (
        <div className='dropdown'>
            <div className='items'>
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>

            <Button>
                CHECKOUT
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps) (Cart);

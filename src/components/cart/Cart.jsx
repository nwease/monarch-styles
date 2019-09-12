import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/Cart-Item';
import { selectCartItems } from'../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { DropdownContainer, ItemsContainer, EmptyMessageContainer, ButtonContainer } from './Cart.styles';

const Cart = ({cartItems, history, dispatch}) => {
    return (
        <DropdownContainer>
            <ItemsContainer>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <EmptyMessageContainer>Cart is empty</EmptyMessageContainer>
                )}
            </ItemsContainer>

            <ButtonContainer
                onClick={() => {
                    history.push('./checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                CHECKOUT
            </ButtonContainer>
        </DropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps) (Cart));

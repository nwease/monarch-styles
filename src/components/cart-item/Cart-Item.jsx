import React from 'react';
import { CartItemContainer, CartItemImage, DetailsContainer } from './Cart-Item.styles';
// import './styles/cart-item.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt='item' />

            <DetailsContainer>
                <span className='name'>
                    {name}
                </span>

                <span className='price'>
                    {quantity} x ${price}
                </span>
            </DetailsContainer>
        </CartItemContainer>
    );
};

export default CartItem;

import React from 'react';
import './styles/cart-item.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />

            <div className='details'>
                <span className='name'>
                    {name}
                </span>

                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
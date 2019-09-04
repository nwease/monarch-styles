import React from 'react';
import Button from '../buttons/Button';
import './styles/cart.scss';

const Cart = () => {
    return (
        <div className='dropdown'>
            <div className='items' />

            <Button>
                CHECKOUT
            </Button>
        </div>
    );
};

export default Cart;

import React from 'react';
import { connect } from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart-actions';
import { CheckoutItemContainer, ImageContainer, NameContainer, QuantityContainer, RemoveButtonContainer } from './Checkout-Item.styles';
// import './styles/checkout-items.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {

    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>

            <NameContainer>
                {name}
            </NameContainer>

            <QuantityContainer>
                <div className='arrow' onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>

                <span>
                    {quantity}
                </span>

                <div onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </QuantityContainer>

            <NameContainer>
                {price}
            </NameContainer>

            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps) (CheckoutItem);

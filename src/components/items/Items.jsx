import React from 'react';
import { connect } from 'react-redux';
import Button from '../buttons/Button';
import {addItem} from '../../redux/cart/cart-actions';
import './styles/items.scss';

const Items = ({item, addItem}) => {

    const {name, price, imageUrl} = item;

    return (
        <div className='item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className='footer'>
                <span className='name'>
                    {name}
                </span>

                <span className='price'>
                    {price}
                </span>
            </div>

            <Button onClick={() => addItem(item)} inverted>
                ADD TO CART
            </Button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps) (Items);

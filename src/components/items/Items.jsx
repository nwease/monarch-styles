import React from 'react';
import './styles/items.scss';

const Items = ({id, name, price, imageUrl}) => {
    return (
        <div className='item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>

                <div className='footer'>
                    <span className='name'>
                        {name}
                    </span>

                    <span className='price'>
                        {price}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Items;

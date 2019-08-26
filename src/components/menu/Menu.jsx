import React from 'react';
import './styles/menu.scss';

const Menu = ({title, imageUrl, size}) => {
    return (
        <div className={`${size} menu`}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
};

export default Menu;

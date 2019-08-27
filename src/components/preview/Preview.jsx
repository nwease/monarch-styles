import React from 'react';
import Items from '../items/Items';
import './styles/preview.scss';

const Preview = ({title, items}) => {
    return (
        <div className='collection'>
            <h1 className='title'>
                {title.toUpperCase()}
            </h1>

            <div className='preview'>
                {items
                    .filter((item, index) => index < 4)
                    .map (({id, ...otherItemProps}) => (
                        <Items key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    );
};

export default Preview;

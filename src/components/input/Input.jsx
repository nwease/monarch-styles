import React from 'react';
import './styles/input.scss';

const Input = ({handleChange, label, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='input' onChange={handleChange} {...otherProps} />

            {
                label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} input-label`}>{label}</label>) : null
            }
        </div>
    );
};

export default Input;

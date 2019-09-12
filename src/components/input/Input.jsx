import React from 'react';
import { GroupContainer, InputContainer, InputLabelContainer } from './Input.styles';
// import './styles/input.scss';

const Input = ({handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <InputContainer onChange={handleChange} {...otherProps} />

        {label ? (
            <InputLabelContainer
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                } input-label`}
            >
                {label}
            </InputLabelContainer>
        ) : null}
    </GroupContainer>
);

export default Input;

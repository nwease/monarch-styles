import styled from 'styled-components';
import Button from '../buttons/Button';

export const DropdownContainer = styled.div `
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;

export const DropDownButton = styled(Button) `
    margin-top: auto;
`;
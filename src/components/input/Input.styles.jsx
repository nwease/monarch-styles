import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css `
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`;

export const GroupContainer = styled.div `
    position: relative;
    margin: 45px 0;
    
    input[type='password'] {
      letter-spacing: 0.3em;
    }
`;

export const InputContainer = styled.input `
    background: white none;
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    
    &:focus {
    outline: none;
  }
  
    &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const InputLabelContainer = styled.label `
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    
    &.shrink {
      ${shrinkLabelStyles}
    }
`;
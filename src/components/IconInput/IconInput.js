import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  if(!STYLES[size]) {
    throw new Error(`Unknown size passed to IconInput: ${size}`)
  }
  return (
    <>
    <InputWrapper style={{'--width': width +'px'}}> 
        <Icon  id={icon} size={STYLES[size].icon}></Icon>
        <Input style={{'--font-size': STYLES[size].font+'px'}} placeholder={placeholder}></Input>        
    </InputWrapper>
    </>
  )

  
};

const STYLES = {
  small: {
    font: 14, 
    icon: 16,
  },
  large: {
    font: 18, 
    icon: 24,
  },
}


const InputWrapper = styled.div`
    border-bottom: 1px solid ${COLORS.black};
    width: var(--width);
    display: flex;
    gap: 12px;
    padding: 10px;
    &:has(Input):focus-within {
      outline: 1px solid ${COLORS.transparentGray15};
    }
  `
const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  
  font-size: var(--font-size);
  font-weight: 700; 
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:focus {
    outline:none;
  }
`


export default IconInput;

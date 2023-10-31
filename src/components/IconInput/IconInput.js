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
        <VisuallyHidden>
        <Label aria-label='search'>{label}</Label>
        </VisuallyHidden>
        <IconWrapper><Icon  id={icon} size={STYLES[size].icon}></Icon></IconWrapper>
        
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
    position: relative;
    border-bottom: 1px solid ${COLORS.black};
    width: var(--width);
    /* display: flex; */
    gap: 12px;
    padding: 10px;
    padding-left: 0px;  
    &:has(Input):focus-within {
      outline: 1px solid ${COLORS.transparentGray15};
    }
  `

const IconWrapper = styled.div` 
  position: absolute;
  left: 0;
  margin-block: auto;
  pointer-events: none;
`
const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  padding-left: 38px;
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
const Label = styled.label`

`

export default IconInput;

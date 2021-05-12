import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const Button = ({ children, color = 'gray', ...props }) => {
  const btnBack = '#228be6';
  const StyledButton = styled.button`
    width: ${(props) => (props.size === 'large' ? '250px' : '100px')};
    height: 20px;
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    height: 2.25rem;
    font-size: 1rem;

    ${(props) => {
      const { platte } = props.theme;
      const color = platte[props.color];
      return css`
        background: ${color};
        &:hover {
          background: ${lighten(0.1, color)};
        }
        &:active {
          background: ${darken(0.1, color)};
        }
      `;
    }}

    & + & {
      margin-left: 1rem;
    }
  `;
  return (
    <StyledButton {...props} color={color} onClick={props.onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

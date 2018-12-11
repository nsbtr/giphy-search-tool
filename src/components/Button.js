import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  min-width: 150px;
  height: 40px;
  border: 1px solid ${props => props.theme.purpleDark};
  background: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.bold};
  text-transform: uppercase;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.white};
    color: ${props => props.theme.purpleDark};
  }
`;

const Button = ({ children, onClick }) => (
  <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
);

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;

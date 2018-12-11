import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  border: 1px solid #644784;
  background: #8c64b7;
  min-width: 150px;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    color: #644784;
  }
`;

const Button = ({ children, onClick }) => (
  <ButtonComponent>{children}</ButtonComponent>
);

Button.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Button;

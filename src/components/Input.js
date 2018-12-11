import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputComponent = styled.input`
  border: none;
  background: #ededed;
  padding: 10px;
  font-size: 12px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
`;

const Input = ({ className, value, onChange, isReadOnly }) => (
  <InputComponent
    className={className}
    value={value}
    onChange={onChange}
    readOnly={isReadOnly}
  />
);

Input.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Input;

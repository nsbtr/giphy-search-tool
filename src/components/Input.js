import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputComponent = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  background: ${props => props.theme.grey};
  font-size: 12px;
  font-family: 'Roboto Mono', monospace;
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
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
};

export default Input;

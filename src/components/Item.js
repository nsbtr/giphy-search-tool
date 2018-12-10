import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input``;

const Button = styled.button``;

const Item = ({ item }) => (
  <img src={item.images.fixed_width.url} key={item.id} alt={item.title} />
);

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;

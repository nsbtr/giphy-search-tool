import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  cursor: pointer;
`;

const Item = ({ item, handleClick }) => (
  <div>
    <Image
      src={item.images.fixed_height_small.url}
      alt={item.title}
      onClick={() => handleClick(item.id)}
    />
  </div>
);

Item.propTypes = {
  item: PropTypes.object,
  handleClick: PropTypes.func,
};

export default Item;

import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item, handleClick }) => (
  <div>
    <img
      src={item.images.fixed_height_small.url}
      alt={item.title}
      onClick={() => handleClick(item.id)}
    />
  </div>
);

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;

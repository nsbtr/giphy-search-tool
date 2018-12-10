import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => (
  <div>
    <img
      src={item.images.fixed_height_small.url}
      key={item.id}
      alt={item.title}
    />
  </div>
);

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;

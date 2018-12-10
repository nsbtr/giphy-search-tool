import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => (
  <img src={item.images.fixed_width.url} key={item.id} alt={item.title} />
);

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;

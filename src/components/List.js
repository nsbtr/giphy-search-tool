import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from './../utils/media';
import Item from './Item';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
  ${media.desktop`
    padding: 100px 20px;
  `} ${media.mobile`
    padding-top: ${props => props.theme.headerHeightMobile};
  `}
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
  font-family: ${props => props.theme.fontFamily};
`;

const List = ({ items, isLoading, handleItemClick }) => (
  <Container>
    {isLoading ? (
      <Message>Loading...</Message>
    ) : items.length > 0 ? (
      items.map(item => (
        <Item item={item} key={item.id} handleClick={handleItemClick} />
      ))
    ) : (
      <Message>
        <p>Nothing to see here. Try typing something in the search bar!</p>
        <img
          src="https://media2.giphy.com/media/mCRJDo24UvJMA/giphy.gif"
          width="300"
          alt="dog typing"
        />
      </Message>
    )}
  </Container>
);

List.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  handleItemClick: PropTypes.func,
};

export default List;

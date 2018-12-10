import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';

const Container = styled.div`
  padding: 100px 20px;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
  font-family: 'Roboto Mono', monospace;
`;

const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
  font-family: 'Roboto Mono', monospace;
`;

const List = ({ items, isLoading, handleItemClick }) => (
  <Container>
    {isLoading ? (
      <LoadingMessage>Loading!</LoadingMessage>
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
};

export default List;

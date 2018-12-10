import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Container = styled.div`
  background: #ffffff;
  position: fixed;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #eaeaea;
  padding: 20px;
`;

const TitleContainer = styled.div`
  min-width: 300px;
`;

const Title = styled.h1`
  font-size: 30px;
  color: black;
  display: inline;
  position: relative;
  padding: 0 10px 3px;
  background-image: linear-gradient(transparent 60%, #d9f2c9 40%);
  background-repeat: repeat-x;
  background-size: 200% 100%;
  font-family: 'Roboto Mono', monospace;
`;

const Header = ({ handleSearch }) => (
  <Container>
    <TitleContainer>
      <Title>find that GIF</Title>
    </TitleContainer>
    <SearchBar handleSearch={handleSearch} />
  </Container>
);

Header.propTypes = {
  handleSearch: PropTypes.func,
};

export default Header;

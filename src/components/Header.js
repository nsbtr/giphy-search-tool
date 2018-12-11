import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from './../utils/media';
import SearchBar from './SearchBar';

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  background: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.grey};
`;

const TitleContainer = styled.div`
  height: 60px;
  ${media.desktop`
    min-width: 300px;
    height: 40px;
  `}
`;

const Title = styled.h1`
  font-size: 30px;
  color: black;
  display: inline;
  position: relative;
  padding: 0 10px 3px;
  background-image: linear-gradient(
    transparent 60%,
    ${props => props.theme.green} 40%
  );
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

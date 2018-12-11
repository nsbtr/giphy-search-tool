import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Rating from './Rating';

const Container = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  border-radius: 30px;
  width: 80%;
  height: 80%;
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-family: 'Roboto Mono', monospace;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const ImageContainer = styled(ContentContainer)`
  > img {
    max-width: 100%;
  }
`;

const DetailsContainer = styled(ContentContainer)`
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

class Modal extends Component {
  render() {
    const { item, handleModalClose, handleRating } = this.props;
    return (
      <Container>
        <ModalContent>
          <ImageContainer>
            <img
              src={item.images.original.url}
              width={item.images.width}
              height={item.images.height}
              alt={item.title}
            />
          </ImageContainer>
          <DetailsContainer>
            <Title>{item.title}</Title>
            <label>Link:</label>
            <input type="text" value={item.images.original.url} readOnly />
            <a href={item.url}>View on GIPHY</a>
            <Rating handleRating={handleRating} item={item} />
          </DetailsContainer>
          <CloseButton onClick={handleModalClose}>Close Modal</CloseButton>
        </ModalContent>
      </Container>
    );
  }
}

Modal.propTypes = {};

export default Modal;

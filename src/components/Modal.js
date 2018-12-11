import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Rating from './Rating';
import Input from './Input';

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
  width: 60%;
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
  top: 30px;
  right: 30px;
  font-family: 'Material Icons';
  font-size: 24px;
  background: none;
  border: none;
`;

const Link = styled.a`
  border: 1px solid #644784;
  background: #8c64b7;
  min-width: 150px;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  color: #ffffff;
  padding: 20px;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    color: #644784;
  }
`;

const Label = styled.label``;

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
            <Input
              type="text"
              value={item.images.original.url}
              isReadOnly={true}
            />
            <Link href={item.url}>View on GIPHY</Link>
            <Rating handleRating={handleRating} item={item} />
          </DetailsContainer>
          <CloseButton onClick={handleModalClose}>close</CloseButton>
        </ModalContent>
      </Container>
    );
  }
}

Modal.propTypes = {};

export default Modal;

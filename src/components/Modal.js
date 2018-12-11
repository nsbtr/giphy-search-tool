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
  padding: 20px;
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
  margin: 20px 0;
  border: 1px solid #644784;
  background: #8c64b7;
  min-width: 150px;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  font-size: 12px;
  color: #ffffff;
  padding: 15px;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    color: #644784;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 1.5;
  margin-right: 10px;
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
            <Wrapper>
              <Label>URL</Label>
              <Input
                type="text"
                value={item.images.original.url}
                isReadOnly={true}
              />
            </Wrapper>

            <Link href={item.url}>View on GIPHY</Link>
            <Wrapper>
              <Label>Your Rating</Label>
              <Rating handleRating={handleRating} item={item} />
            </Wrapper>
          </DetailsContainer>
          <CloseButton onClick={handleModalClose}>close</CloseButton>
        </ModalContent>
      </Container>
    );
  }
}

Modal.propTypes = {};

export default Modal;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from './../utils/media';
import Rating from './Rating';
import Input from './Input';

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.modalBg};
`;

const ModalContent = styled.div`
  position: relative;
  width: 60%;
  height: 80%;
  padding: 30px;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.modalBorderRadius};
  ${media.tablet`
    width: 80%;
  `}
  ${media.mobile`
    width: 100%;
    height: 100%;
    border-radius: 0;
    flex-wrap: wrap;
    padding: 30px 10px;
    overflow: scroll;
  `}
`;

const Title = styled.h2`
  ${media.mobile`
    margin-top: 0;
    font-size: 20px;
  `}
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  ${media.mobile`
    width: 100%;
  `}
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
  font-family: ${props => props.theme.fontIcons};
  font-size: ${props => props.theme.fontSizeIcon};
  background: none;
  border: none;
  ${media.mobile`
    top: 5px;
    right: 0;
  `}
`;

const Link = styled.a`
  min-width: 150px;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid ${props => props.theme.purpleDark};
  background: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.bold};
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.white};
    color: ${props => props.theme.purpleDark};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 1.5;
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

Modal.propTypes = {
  item: PropTypes.object,
  handleModalClose: PropTypes.func,
  handleRating: PropTypes.func,
};

export default Modal;

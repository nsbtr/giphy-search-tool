import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  background: white;
  width: 80%;
  height: 80%;
`;

class Modal extends Component {
  render() {
    return (
      <Container>
        <ModalContent>Gif details</ModalContent>
      </Container>
    );
  }
}

Modal.propTypes = {};

export default Modal;

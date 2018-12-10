import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

const RatingButton = styled.button`
  border: none;
  background: none;
  color: ${props => (props.isActive ? '#ffbf2b' : '#c9c9c9')};
  font-family: 'Material Icons';
  font-size: 24px;
  cursor: pointer;
`;

class Rating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  render() {
    const { handleRating, item } = this.props;
    return (
      <Container>
        {[1, 2, 3, 4, 5].map(rating => (
          <RatingButton
            onClick={() => handleRating(item.id, rating)}
            key={rating}
            isActive={rating <= item.userRating}
          >
            star_border
          </RatingButton>
        ))}
      </Container>
    );
  }
}

Rating.propTypes = {};

export default Rating;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from './../utils/media';
import Button from './Button';
import InputComponent from './Input';

const Container = styled.div`
  flex-grow: 1;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  ${media.mobile`
    flex-direction: column;
  `}
`;

const Input = styled(InputComponent)`
  height: 40px;
  margin-right: 5px;
  font-size: 30px;
  flex-grow: 1;
  ${media.mobile`
    margin-bottom: 5px;
  `}
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.handleSearch) {
      this.props.handleSearch(this.state.searchValue);
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Container>
    );
  }
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;

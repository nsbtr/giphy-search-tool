import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  flex-grow: 1;
  height: 40px;
  margin-right: 5px;
  border: none;
  background: #ededed;
  padding: 10px;
  font-size: 30px;
  font-family: 'Roboto Mono', monospace;
`;

const Button = styled.button`
  border: 1px solid #644784;
  background: #8c64b7;
  min-width: 150px;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-weight: 600;
  color: #ffffff;
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

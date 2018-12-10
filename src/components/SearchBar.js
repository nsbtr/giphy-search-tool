import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input``;

const Button = styled.button``;

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
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  //   handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Modal from './components/Modal';
import { getItemById } from './lib/data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selectedItem: {},
      isLoading: false,
      isModalOpen: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  handleSearch(query) {
    if (query) {
      this.fetchResults(query);
    }
  }

  handleItemClick(id) {
    const selectedItem = getItemById(this.state.items, id);
    this.setState({ selectedItem }, () => {
      this.setState({ isModalOpen: true });
    });
  }

  handleModalClose() {
    this.setState({ isModalOpen: false });
  }

  setLoading(isLoading) {
    this.setState({ isLoading });
  }

  fetchResults(query) {
    this.setLoading(true);
    const apiKey = '1RKXhyDiZ7ei9vWUKDXsxQc6yov96NSl';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=30`;

    fetch(url)
      .then(response => response.json())
      .then(results => {
        this.setState({ items: results.data });
        this.setLoading(false);
      });
  }

  render() {
    return (
      <div className="App">
        <Header handleSearch={this.handleSearch} />
        <List
          items={this.state.items}
          isLoading={this.state.isLoading}
          handleItemClick={this.handleItemClick}
        />
        {this.state.isModalOpen && (
          <Modal
            item={this.state.selectedItem}
            handleModalClose={this.handleModalClose}
          />
        )}
      </div>
    );
  }
}

export default App;

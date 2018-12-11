import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import theme from './theme';
import Header from './components/Header';
import List from './components/List';
import Modal from './components/Modal';
import { getItemById, addRating, getItemsWithRatings } from './lib/data';
import { get } from 'idb-keyval';

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
    this.handleRating = this.handleRating.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  handleSearch(query) {
    if (query) {
      this.fetchResults(query);
    } else {
      this.setState({ items: {} });
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

  handleRating(id, userRating) {
    addRating(id, userRating).then(() => {
      const index = this.state.items.findIndex(item => item.id === id);
      const newItems = [...this.state.items];
      newItems.splice(index, 1, { ...newItems[index], userRating });
      this.setState(
        {
          items: newItems,
        },
        () => {
          this.setState({ selectedItem: getItemById(this.state.items, id) });
        }
      );
    });
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
        get('gif_ratings').then(ratings => {
          const items = getItemsWithRatings(results.data, ratings);
          this.setState({ items });
        });
        this.setLoading(false);
      });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
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
              handleRating={this.handleRating}
            />
          )}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

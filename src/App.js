import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  handleSearch(query) {
    if (query) {
      this.fetchResults(query);
    }
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
        <List items={this.state.items} isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Item from './components/Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    if (query) {
      this.fetchResults(query);
    }
  }

  fetchResults(query) {
    const apiKey = '1RKXhyDiZ7ei9vWUKDXsxQc6yov96NSl';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=30`;

    fetch(url)
      .then(response => response.json())
      .then(results => {
        let items = results.data.map(item => ({
          id: item.id,
          url: item.url,
          images: item.images,
          title: item.title,
        }));

        this.setState({ items });
      });
  }

  render() {
    return (
      <div className="App">
        Awesome giphy search app :D
        <SearchBar handleSearch={this.handleSearch} />
        {this.state.items.length > 0 &&
          this.state.items.map(item => <Item item={item} key={item.id} />)}
      </div>
    );
  }
}

export default App;

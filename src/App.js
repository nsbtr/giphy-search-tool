import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const apiKey = '1RKXhyDiZ7ei9vWUKDXsxQc6yov96NSl';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dogs&limit=30`;

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
        {this.state.items.map(item => (
          <img
            src={item.images.fixed_height.url}
            key={item.id}
            alt={item.title}
          />
        ))}
      </div>
    );
  }
}

export default App;

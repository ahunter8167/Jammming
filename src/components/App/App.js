import React, { Component } from 'react';
import './App.css';
import './Playlist';
import './SearchBar';
import './SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
  }

    this.state.searchResults = [
      {
        name: 'Better With You',
        artist: 'Michl',
        album: 'Better With You',
        id: '1'
      },

      {
        name: 'Tension',
        artist: 'Fergie',
        album: 'Double Dutchess',
        id: '2'
      },

      {
        name: 'River',
        artist: 'Ibeyi',
        album: 'Ibeyi',
        id: '3'
      },

      {
        name: 'Can\'t Sleep Love',
        artist: 'Pentatonix',
        album: 'Pentatonix(Delux Version)',
       id: '4'
      }
    ];

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <!-- Add a SearchBar component -->
      <div className="App-playlist">
        <!-- Add a SearchResults component -->
        <!-- Add a Playlist component -->
      </div>
      </div>
      </div>
    );
  }
}

export default App;

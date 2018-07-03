import React, { Component } from 'react';
import './App.css';
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      searchResults: [
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
      ],

      playlistName: 'New Playlist',

      playlistTracks: [
          {
            name: 'Better With You',
            artist: 'Michl',
            album: 'Better With You',
            id: '1'
          },
      ]
    };
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    } else {
      let newTrack = this.state.playlistTracks;
      newTrack.push(track);
      this.setState({
        playlistTracks: newTrack
      });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    const oldTracks = tracks.filter(removedTrack => removedTrack.id !== track.id);
    this.setState({
      playlistTracks: oldTracks
    });
  }

  updatePlaylistName(argument) {
    this.setState({
      playlistName: name
    });
  }

  savePlaylist() {
    const trackURIs = playlistTracks;
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/> onSearch={this.search} />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
      </div>
      </div>
      </div>
    );
  }
}



export default App;

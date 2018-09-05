import React, { Component } from 'react';
import SearchBar from 'react-js-search';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  onSearchChange(text){
    alert(text);
  }
  onSearchClick(text){
    alert(text);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search Bar Component</h1>
        </header>

        <h1> Search example: </h1>
          <SearchBar 
            onSearchTextChange={this.onSearchChange}
            onSearchButtonClick={this.onSearchClick}
            placeHolderText={"Search here..."}
          />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SearchBar from 'react-js-search';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    let elements = [ 
      {number: 12, name:"Buffon", position: "ST", success: true},
      {number: 21, name: "Pirlo", position: "MC", success: false},
      {number: 10, name: "Ruiz", position: "MDI"},
      {number: 7, name: "Nesta", position: "RB", success: true},
      {number: 4, name: "Cannavaro", position: "CB"},
      {number: 2, name: "Puyol", position: "CB", success: false},
      {number: 15, name: "Abate", position: "LB"},
      {number: 16, name: "Locatelli", position: "MDI"},
      {number: 1, name: "Buffon", position: "GK"},
      {number: 21, name: "Pirlo", position: "MC"},
      {number: 10, name: "Ruiz", position: "MDI"},
      {number: 7, name: "Nesta", position: "RB"}
    ]

    this.state = {
      dataObjects: elements,
      found: ""
    };
  }

  onSearchChange(text, found){
    this.setState({found: JSON.stringify(found) });
  }
  onSearchClick(text , found){
    this.setState({found: JSON.stringify(found) });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search Bar Component</h1>
        </header>

        <h1> Search example: </h1>
          <SearchBar 
            onSearchTextChange={ (b,e) => {this.onSearchChange(b,e)}}
            onSearchButtonClick={this.onSearchClick}
            placeHolderText={"Search here..."}
            
          />

          <div>{this.state.found}</div>
      </div>
    );
  }
}

export default App;

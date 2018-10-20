import React, { Component } from "react";
import "./style.css";
import Search from "react-icons/lib/md/search";
import PropTypes from 'prop-types';

/**
 * Search component
 * @author [Jose Antonio Ciccio](https://github.com/jciccio)
 */
class SearchBar extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      searchValue: ""
    };

  }

  componentDidUpdate(prevProps){
    
  }

  // Search will be done using:
  // Object with data -> prop (data)
  // Haystack to search (object property) -> prop (haystack)
  search (searchTerm){
    let results = undefined;
    if (this.props.data){
      if(this.props.caseInsensitive){
        results = this.props.data.toLowerCase().filter(object => Object.values(object).join().includes(searchTerm.toLowerCase()));
      }
      else{
        results = this.props.data.filter(object => Object.values(object).join().includes(searchTerm));
      }
      
    } 
    return results;
  }

  render() {
    let placeholderText = "Search...";
    if (this.props.placeHolderText)
      placeholderText = this.props.placeHolderText;

    return (
      <div className="searchComponent">
        <div className="search-container">
          <input 
            type="text" 
            placeholder={placeholderText}
            name="search"
            onChange={(e) => this.onSearchChange(e)}
          />
          <button onClick={(e) => this.onSearchClick(e)} >
          <Search /> 
          </button>
        </div>
      </div>
    );
  }

  onSearchChange(e){
    this.setState({searchValue: e.target.value});
    if (this.props.onSearchTextChange){
      this.props.onSearchTextChange(e.target.value,this.search(e.target.value));
    }
  }

  onSearchClick(e){
    if (this.props.onSearchButtonClick){
      this.props.onSearchButtonClick(this.state.searchValue, this.search(e.target.value));
    }
  }

}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func,
  onSearchButtonClick: PropTypes.func,
  placeHolderText: PropTypes.string,
  data: PropTypes.array
};

export default SearchBar;

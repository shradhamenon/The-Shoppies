import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: '' };

    this.executeSearch = this.executeSearch.bind(this);
  }

  executeSearch(event) {
    this.props.onChange(event);
  }

  render() {
    return(
      <div className = {styles.SearchBar}>
        <input type = "text" placeholder = "Search For Movies To Nominate" onChange = {this.executeSearch}></input>
      </div>
    );
  }
}

export default SearchBar;
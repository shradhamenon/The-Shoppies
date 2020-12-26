import React, { Component } from 'react';
import styles from './SearchBar.module.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    return(
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search For Movies To Nominate" onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default SearchBar;
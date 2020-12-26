import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import styles from './Nominate.module.css'

class Nominate extends Component {
  componentDidMount() {
    document.title = 'The Shoppies | Nominate';
  }
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return(
    <div className={styles.content}>
      <div className={styles.header}>
        <img src='https://media4.giphy.com/media/Ky559q3OfL0EDBPR23/giphy.gif' alt = 'award icon'></img>
        <Link to='/' style = {{ color: 'white', textDecoration: 'none' }}>The Shoppies</Link>
      </div>
      <div className={styles.search}>
        <SearchBar onChange={this.handleChange}></SearchBar>
        <div className={styles.searchResults}></div>
        <div className={styles.nominees}></div>
      </div>
    </div>
    );
  }
}

export default Nominate;
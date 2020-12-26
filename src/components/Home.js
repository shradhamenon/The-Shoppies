import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

class Home extends Component {
  render() {
    return(
      <div className = { styles.content }>
        <div className = { styles.title }>
          <span>The Shoppies</span>
        </div>
        <div className = { styles.enter }>
          <Link to = '/nominate' style = {{ color: 'white', textDecoration: 'none' }}>Enter</Link>
        </div>
      </div>
    );
  }
}

export default Home;
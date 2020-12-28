import React, { Component } from 'react';
import equal from 'fast-deep-equal';
import ResultCard from './ResultCard';
import styles from './NominationsModal.module.css';

class NominationsModal extends Component {
  
  constructor(props) {
    super(props);
    this.state = { nominees: props.nominees };

    this.addNomination = this.addNomination.bind(this);
    this.removeNomination = this.removeNomination.bind(this);
    this.disableNominate = this.disableNominate.bind(this);
    this.isNominated = this.isNominated.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(!equal(this.props.nominees, prevProps.nominees)) {
      this.setState({nominees: this.props.nominees});
    }
  } 

  addNomination(movie) {
    this.props.addNomination(movie);
  }

  removeNomination(movie) {
    this.props.removeNomination(movie);
  }

  disableNominate(id) {
    return this.props.disableNominate(id);
  }

  isNominated(id) {
    return this.props.isNominated(id);
  }

  render() {
    return(
      <div className = {styles.NominationsModal}>
        <span>Nominations</span>
        <hr></hr>
        <div className = {styles.nominees}>
          { this.state.nominees.map((movie) => <ResultCard key = {movie.imdbID} movie = {movie} addNomination = {this.addNomination} removeNomination = {this.removeNomination} disableNominate = {this.disableNominate(movie.imdbID)} isNominated = {this.isNominated(movie.imdbID)}/>) }
        </div>
      </div>
    );
  }
}

export default NominationsModal;
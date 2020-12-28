import React, { Component } from 'react';
import equal from 'fast-deep-equal';
import styles from './ResultCard.module.css';

class ResultCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {disableNominate: props.disableNominate, isNominated: props.isNominated};
    
    this.movie = props.movie;
    this.posterURL = this.movie.Poster;
    this.title = this.movie.Title;
    this.year = this.movie.Year;
    
    this.addNomination = this.addNomination.bind(this);
    this.removeNomination = this.removeNomination.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(!equal(this.props.disableNominate, prevProps.disableNominate)) {
      this.setState({disableNominate: this.props.disableNominate});
    }

    if(!equal(this.props.isNominated, prevProps.isNominated)) {
      this.setState({isNominated: this.props.isNominated});
    }
  } 

  addNomination() {
    this.props.addNomination(this.movie);
  }

  removeNomination() {
    this.props.removeNomination(this.movie);
  }

  render() {
    return(
      <div className = {styles.ResultCard} style = {{ backgroundImage: `url(${this.posterURL})`}}>
        <div className = {`${styles.overlay} ${(this.posterURL === 'N/A' ? styles.show : styles.hide)}`}>
          <div className = {styles.details}>
            <div className = { styles.title }>
              <span>{this.title}, {this.year}</span>
            </div>
              {
                this.state.isNominated ? 
                  <div className = {styles.nominate} onClick = { this.removeNomination }>
                    <span>Remove</span>
                  </div>
                :
                  <div className = {`${styles.nominate} ${(this.state.disableNominate ? styles.disable : '')}`} onClick = { this.addNomination }>
                    <span>Nominate</span>
                  </div> 
              }
          </div>
        </div>
      </div>
    );
  }
}

export default ResultCard;
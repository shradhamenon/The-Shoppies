import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SkyLight from 'react-skylight';

import SearchBar from './SearchBar';
import ResultCard from './ResultCard';
import NominationsModal from './NominationsModal';

import styles from './Nominate.module.css';

class Nominate extends Component {
  
  constructor(props) {
    super(props);
    this.state = {searchResults: [], nomineeIDs: [], nominees: []};

    this.executeSearch = this.executeSearch.bind(this);

    this.addNomination = this.addNomination.bind(this);
    this.removeNomination = this.removeNomination.bind(this);

    this.disableNominate = this.disableNominate.bind(this);
    this.isNominated = this.isNominated.bind(this);

    this.nominationsModalStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      width: '70%',
      maxHeight: '70%',
      top: '50%',
      marginLeft: '-38%',
      boxShadow: '0 0 10px #fcba03',
      borderRadius: '10px',
      overflowY: 'scroll',
    };
  }

  componentDidMount() {
    document.title = 'The Shoppies | Nominate';
  }

  async executeSearch(event) {
    const query = event.target.value.split(/[ ]+/).join('%20');
    const url = 'https://www.omdbapi.com/?apikey=b2669e1e&type=movie&s=' + query;
    const response = await fetch(url);
    const data = await response.json();

    if (data && (data.Response === 'True')) {
      this.setState({searchResults: data.Search});
    }
  }

  addNomination(movie) {

    const updatedNominees = this.state.nominees.concat(movie);
    this.setState({nominees: updatedNominees});
    
    const updatedNomineeIDs = this.state.nomineeIDs.concat(movie.imdbID);
    this.setState({nomineeIDs: updatedNomineeIDs});

    toast.dark('⭐ Movie Added To Nominations!', {
      hideProgressBar: true,
      position: 'bottom-left',
      autoClose: 1500,
    });

    if (updatedNominees.length === 5) {
      toast.dark('🎉 Yay, you picked all 5 nominations!', {
        hideProgressBar: true,
        position: 'top-right',
        autoClose: 5000,
      });
    }
  }

  removeNomination(movie) {

    const updatedNominees = this.state.nominees.filter((item) => { return item.imdbID !== movie.imdbID });
    this.setState({nominees: updatedNominees});

    const updatedNomineeIDs = this.state.nomineeIDs.filter((id) => { return id !== movie.imdbID });
    this.setState({nomineeIDs: updatedNomineeIDs});
    
    toast.dark('💔 Movie Removed From Nominations!', {
      hideProgressBar: true,
      position: 'bottom-left',
      autoClose: 1500,
    });
  }

  disableNominate(movieID) {
    return ((this.state.nomineeIDs.includes(movieID)) || (this.state.nomineeIDs.length >= 5))
  }

  isNominated(movieID) {
    return this.state.nomineeIDs.includes(movieID)
  }

  render() {
    return(
    <div className = {styles.Nominate}>
      <div className = {styles.header}>
        <img src = 'https://media4.giphy.com/media/Ky559q3OfL0EDBPR23/giphy.gif' alt = 'award icon'></img>
        <Link to = '/' style = {{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>The Shoppies</Link>
      </div>

      <ToastContainer />

      <div className = {styles.search}>
        <SearchBar onChange = {this.executeSearch}></SearchBar>
        <div className={styles.searchResults}>
          { this.state.searchResults.map((movie) => <ResultCard key = {movie.imdbID} movie = {movie} addNomination = {this.addNomination} removeNomination = {this.removeNomination} disableNominate = {this.disableNominate(movie.imdbID)}/>) }
        </div>
      </div>

      <div className = {styles.nominations}>
        <span onClick = {() => this.simpleDialog.show()}>Nominations</span>
        <SkyLight className = {styles.modal} dialogStyles = {this.nominationsModalStyle} hideOnOverlayClicked ref = {ref => this.simpleDialog = ref}>
          <NominationsModal nominees = {this.state.nominees} addNomination = {this.addNomination} removeNomination = {this.removeNomination} disableNominate = {this.disableNominate} isNominated = {this.isNominated}></NominationsModal>
        </SkyLight>
      </div>
    </div>
    );
  }
}

export default Nominate;
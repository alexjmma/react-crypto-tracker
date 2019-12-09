import React from 'react';
import * as api from '../api'
import '../App.css';
import CryptoListings from '../components/CryptoListings'
//import axios from 'axios'

class DashboardContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      listings: [],
    }
  }

  componentDidMount() {
    console.log('componentDidMount, calling api.getCrypto_Listings from DashboardContainer...')

    api.getCrypto_Listings()
    .then(response => this.setState ({
      listings: response
    }))
    console.log('step 2, setting state of listings to response from promise...')

  }
  render() {
    console.log('this.state is: ', this.state)
    return (
      <div className="DashboardContainer">
      <header className="DashboardContainer-header">
      <h1>Crypto Dashboard Home </h1>
      </header>
      <p className = "DashboardboardContainer-intro">
        Cryptocurrency coin information will be listed below. </p>
        <CryptoListings
        listings = {this.state.listings}/>
      </div>
    );
  }
}
export default DashboardContainer;

import React from 'react';
import './App.css';

class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="DashboardContainer">
      <header className="DashboardContainer-header">
      <h1>Crypto Dashboard Home </h1>
      </header>
      <p className = "DashboardboardContainer-intro">
        Cryptocurrency coin information will be listed below. </p>
      </div>
    );
  }
}
export default DashboardContainer;

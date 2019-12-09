import React from "react";

class CryptoListings extends React.Component {
  render() {
    //console.log('this.props.listings.data is::: ', this.props.listings.data)
    return (
      <div>
        <h1> This is the Show Listings Component. </h1>
        <h4>Sorted in order of Market Cap</h4>
        {this.props.listings.data
          ? this.props.listings.data.map((coin, index) => (
              <div key={index}>
                <h1> {coin.name} </h1>
                <div> ID: {coin.id} </div>
                <div> Symbol: {coin.symbol}</div>
                <div> Price: ${coin.quote.USD.price.toFixed(2)}</div>
                <div> Market Cap: ${coin.quote.USD.market_cap.toLocaleString(undefined, {maxiumumFractionDigits:2})}</div>
                <div>-------------</div>
              </div>
            ))
          : "no data..."}
      </div>
    );
  }
}

export default CryptoListings;

import React from "react";

class CryptoListings extends React.Component {
  render() {
    //console.log('this.props.listings.data is::: ', this.props.listings.data)
    return (
      <div>
        <p>Top 25 Cryptocurrencies Sorted In Order Of Market Cap</p>
        {this.props.listings.data
          ? this.props.listings.data.slice(0,25).map((coin, index) => (
              <div key={index}>
                <h1> {coin.name} </h1>
                <div> Symbol: {coin.symbol}</div>
                <div> Price: {coin.quote.USD.price.toLocaleString(undefined, {style: 'currency', currency: 'USD'})}</div>
                <div> Market Cap: {coin.quote.USD.market_cap.toLocaleString(undefined, {style: 'currency', currency: 'USD'})}</div>
                <div>Percent Change 1HR: {coin.quote.USD.percent_change_1h.toLocaleString(undefined, {maxiumumFractionDigits: '2'})}%</div>
                <div>----------------</div>
              </div>
            ))
          : "no data..."}
      </div>
    );
  }
}

export default CryptoListings;

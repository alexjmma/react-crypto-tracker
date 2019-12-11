import React from 'react';
import * as api from '../api'
import '../App.css';

class News extends React.Component {
    constructor(props) {
      // Pass props to parent class
      super(props);
      // Set initial state
      this.state = {
        articles: []
      };
    }
  
    // Lifecycle method
    componentDidMount() {
        api.getNews()
        .then(response => this.setState ({
            articles: Object.values(response)
          }))
        }
  
  
    formatDate(date) {
      var time = new Date(date);
      var year = time.getFullYear();
      var day = time.getDate();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var month = time.getMonth() + 1;
      var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
      return composedTime;
    }
  
  
    render() {
      return (
        <div className="cardsContainer">
          {this.state.articles.map((news, index) => {
            return (
              <div className="card" key={index}>
                <div className="content">
                  <h3>
                    <a href={news.url} target="_blank" rel="noopener noreferrer">
                      {news.title}
                    </a>
                  </h3>
                  <p>{news.description}</p>
                  <div className="author">
                    <p>
                      By <i>{news.author ? news.author : this.props.default}</i>
                    </p>
                    <p>{this.formatDate(news.publishedAt)}</p>
                  </div>
                </div>
                <div className="image">
                  <img src={news.urlToImage} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }


export default News;
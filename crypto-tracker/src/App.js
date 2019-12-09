import React from 'react';
import './App.css';
//import * as firebase from "firebase/app"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DashboardContainer from './container/DashboardContainer'
import {About} from './components/About'
import {News} from './components/News'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path ="/" component={DashboardContainer} />
            <Route path ="/news" component={News} />
            <Route path ="/about" component={About} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}



export default App;

import React from 'react';
import './App.css';
//import * as firebase from "firebase/app"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DashboardContainer from './container/DashboardContainer'
import {About} from './components/About'
import News from './components/News'
import {Layout} from './components/Layout'
import {PieCharts} from './components/PieCharts'
import {NavigationBar} from './components/NavigationBar'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Layout>
        <Router>
          <Switch>
            <Route exact path ="/" component={DashboardContainer} />
            <Route path ='/data' component={PieCharts}/>
            <Route path ="/news" component={News} />
            <Route path ="/about" component={About} />
          </Switch>
        </Router>
        </Layout>
      </React.Fragment>
    );
  }
}



export default App;

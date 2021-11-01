import React, {Component} from "react"
import './App.css';
import NavBar from './Components/NavBar.js'
import Header from './Components/Header.js'
import About from './Components/About.js'
import Experience from './Components/Experience.js'
import Work from './Components/Work.js'
import Footer from './Components/Footer.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <>
    <Router>
      <div className='App-container'>
        <NavBar />
          <div className="Switch-container">
          <Switch>
            <Route exact component={Header} path="/" />
            <Route exact component={About} path="/about" />
            <Route exact component={Experience} path="/experience" />
            <Route exactly component={Work} pattern="/work" />
          </Switch>
          </div>
          <Footer/>
      </div>
      </Router>
    </>
    
    )
}
}

export default App;

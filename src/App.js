import React, { Component } from 'react';
import ReferenceRequest from './components/ReferenceRequest';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Result from './components/Result';
// import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <p>
              Welcome to the Credit Clerk!
            </p>
            <Route exact path="/" component={ReferenceRequest} />
            <Route path="/result" component={Result} />
            {/* <ReferenceRequest /> */}
            {/* <Result token="This is a token" custnum="This is a customer number"/> */}
          </header>
        </Router>
      </div>
    );
    }
}

export default App;

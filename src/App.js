import React from 'react';
import ReferenceRequest from './components/ReferenceRequest';
import Result from './components/Result';
import TextField from '@material-ui/core/TextField';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Credit Clerk!
        </p>
        {/* <ReferenceRequest /> */}
        <Result token="This is a token" custnum="This is a customer number"/>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ReferenceRequest from './components/ReferenceRequest';
import TextField from '@material-ui/core/TextField';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Credit Clerk!
        </p>
        <ReferenceRequest />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import NavBar from './components/CommonComponents/NavBar/NavBar';
import './styling/Layout.css';
import './styling/Text.css';
import './App.css';

function App() {
  return (
    <div className="App dark-theme">
      <header className="App-header">
        <NavBar />
      </header>
      <h1 className="vertical-text-break">
        <span>Passion for</span> 
        <span>creating</span>
        <span>remarkable </span>
        <span>digital products</span>
      </h1>
    </div>
  );
}

export default App;

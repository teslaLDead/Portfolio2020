import React from 'react';
import NavBar from './components/CommonComponents/NavBar/NavBar';
import BackgroundCurtain from './components/BackgroundComponent/BackgroundCurtains';
import './styling/Layout.css';
import './styling/Typography.css';
import './App.css';

function App() {
  return (
    <div className="App dark-theme">
      <main>
        <NavBar />
        
        </main>
        <BackgroundCurtain />
    </div>
  );
}

export default App;

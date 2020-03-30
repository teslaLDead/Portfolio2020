import React from 'react';
import NavBar from './components/CommonComponents/NavBar/NavBar';
import BackgroundCurtain from './components/BackgroundComponent/BackgroundCurtains';
import './styling/Layout.css';
import './styling/Typography.css';
import './App.css';

// page imports for react router dom
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App dark-theme">
      {/* main will contain all the content and will provide side margins to the child components */}
      <main>
        
        <NavBar />
        <Home />
        
      </main>
        <BackgroundCurtain />
    </div>
  );
}

export default App;

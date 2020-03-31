import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/CommonComponents/NavBar/NavBar';
import BackgroundCurtain from './components/BackgroundComponent/BackgroundCurtains';
import './styling/Layout.css';
import './styling/Typography.css';
import './App.css';

// page imports for react router dom
import Home from './components/Pages/Home/Home';
import Footer from './components/CommonComponents/Footer/Footer'

function App() {
  return (
    <Router>
    <div className="App dark-theme">
      {/* main will contain all the content and will provide side margins to the child components */}
      <main>
        
        <NavBar />
        <Home />
        <Footer />
      </main>
        <BackgroundCurtain />
    </div>
    </Router>
  );
}

export default App;

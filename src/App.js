import React from 'react';
import {
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
import About from './components/Pages/About/About';
import Work from './components/Pages/Work/Work';
import Blog from './components/Pages/Blog/BlogHome';
import BlogPost from './components/Pages/Blog/BlogPost';
import Footer from './components/CommonComponents/Footer/Footer';
import Contact from './components/Pages/Contact/Contact';

function App() {
  return (
    // <Router>
    <div className="App dark-theme">
      {/* main will contain all the content and will provide side margins to the child components */}
     
        
        <NavBar />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blogs/:blogPostUrl" exact component={BlogPost} />
          <Route path="/contact" exact component={Contact}/>

        </Switch>
        <Footer />
     
        {/* <BackgroundCurtain /> */}
    </div>
    // </Router>
  );
}

export default App;

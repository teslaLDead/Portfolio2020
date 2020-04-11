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

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      curtainState:"close"
    }
  }

  toggleCurtain=()=>{

    if (this.state.curtainState==="close"){
    this.setState({
      curtainState: "open"
    })
  }
    else{
      this.setState({
        curtainState: "close"
      })
    }
  }
 

  render(){
  return (
    // <Router>
    <div className="App dark-theme">
      {/* main will contain all the content and will provide side margins to the child components */}
     
        <BackgroundCurtain curtainState={this.state.curtainState}/>
        <NavBar toggleCurtain={this.toggleCurtain}/>
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
  );}
}

export default App;

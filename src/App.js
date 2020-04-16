import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactGA from 'react-ga';
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
import Page404 from './components/CommonComponents/404Page/404Page';
import BlogCategoryPage from './components/Pages/Blog/BlogCategoryPage';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      curtainState:"close",
      menuActive:false
    }
  }

  toggleMenu=()=>{
    if (this.state.menuActive)
    {
      this.setState({
        menuActive:false
      })
    }
    else{
      this.setState({
        menuActive:true
      })
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
  componentDidMount=()=>{
    ReactGA.initialize('UA-120664378-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
  return (
    // <Router>
    <div className="App ">
      {/* main will contain all the content and will provide side margins to the child components */}
     
        <BackgroundCurtain curtainState={this.state.curtainState}/>
        <NavBar toggleCurtain={this.toggleCurtain} menuActive={this.state.menuActive} toggleMenu={this.toggleMenu}/>
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={
            ()=>(
              <About toggleCurtain={this.toggleCurtain} />
            )
          } />
          <Route path="/work" exact component={Work} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/category/:blogCategory" exact component={BlogCategoryPage} />
          <Route path="/blog/:blogPostUrl" exact component={BlogPost} />
          <Route path="/contact" exact component={Contact}/>
          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
     
        {/* <BackgroundCurtain /> */}
    </div>
    // </Router>
  );}
}

export default App;

import React, { Suspense,  lazy } from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import ReactGA from 'react-ga';
import NavBar from './components/CommonComponents/NavBar/NavBar';
import BackgroundCurtain from './components/BackgroundComponent/BackgroundCurtains';
import './styling/Layout.css';
import './styling/Typography.css';
import './App.css';
import ScrollToTop from './components/CommonComponents/ScrollToTop/ScrollToTop';
// import Cursor from './components/CommonComponents/CustomMouse/Cursor';

// page imports for react router dom
const Home  = lazy(() => import('./components/Pages/Home/Home'));
const About  = lazy(() => import('./components/Pages/About/About'));
const Work  = lazy(() => import('./components/Pages/Work/Work'));
const Blog  = lazy(() => import('./components/Pages/Blog/BlogHome'));
const BlogPost  = lazy(() => import('./components/Pages/Blog/BlogPost'));
const Footer  = lazy(() => import('./components/CommonComponents/Footer/Footer'));
const Contact  = lazy(() => import('./components/Pages/Contact/Contact'));
const Page404  = lazy(() => import('./components/CommonComponents/404Page/404Page'));
const BlogCategoryPage  = lazy(() => import('./components/Pages/Blog/BlogCategoryPage'));
// import './components/Animation';


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
      document.body.style.overflowY="scroll";
      this.setState({
        menuActive:false
      })
    }
    else{
      document.body.style.overflowY="hidden";
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
    document.querySelector('#loader').style.display="none";
    ReactGA.initialize('UA-120664378-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
  return (
    // <Router>
    <div className="App ">
      
<BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
<BackgroundCurtain curtainState={this.state.curtainState}/>
<NavBar toggleCurtain={this.toggleCurtain} menuActive={this.state.menuActive} toggleMenu={this.toggleMenu}/>
<ScrollToTop>
<Suspense fallback={<div></div>}>
      
      {/* main will contain all the content and will provide side margins to the child components */}
     {/* <Cursor /> */}
        
        
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
     
        </Suspense>
        </ScrollToTop>
        </BrowserRouter>
    </div>
   
  );}
}

export default App;

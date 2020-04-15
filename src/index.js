import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/CommonComponents/ScrollToTop/ScrollToTop';

ReactDOM.render(
<BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
<ScrollToTop>
<App />
</ScrollToTop>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

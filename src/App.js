import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/BibleStudyStyle.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import BibleStudy from './screens/BibleStudy';
import Resources from './screens/Resources';
import Home from './screens/Home';
import Ministries from './screens/Ministries';

function App() {
  return (
    <Router>
      <div>
        <ul className='appMain'>
        <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About-Us'>About Us</Link>
          </li>
          <li>
            <Link to='/Contact-Us'>Contact Us</Link>
          </li>
          <li>
            <Link to='/Bible-Study'>Bible Study</Link>
          </li>
          <li>
            <Link to='/Ministries'>Ministries</Link>
          </li>
          <li>
            <Link to='/Resources'>Resources</Link>
          </li>
        </ul>

        <Route exact path='/' component={Home} />
        <Route path='/About-Us' component={AboutUs} />
        <Route path='/Contact-Us' component={ContactUs} />
        <Route path='/Bible-Study' component={BibleStudy} />
        <Route path='/Ministries' component={Ministries} />
        <Route path='/Resources' component={Resources} />
      </div>
    </Router>
  );
}

export default App;

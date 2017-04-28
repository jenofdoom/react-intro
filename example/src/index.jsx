import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// import 'styles.css';
import 'index.scss';
import Homepage from 'components/homepage/homepage';
import About from 'components/about/about';

ReactDOM.render(
  <Router>
    <div>
      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        </li>
      </ul>

      <Route exact path="/" component={Homepage}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,
  document.getElementById('app')
);

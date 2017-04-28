import React, { Component } from 'react';

import photo from 'assets/img/banks-peninsula.jpg';

class About extends Component {
  render () {  
    return (
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col">
            <h1>About</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Get the most up to date details at <a href="https://www.parliament.nz/en/get-involved/have-your-say/contact-an-mp/">https://www.parliament.nz/en/get-involved/have-your-say/contact-an-mp/</a></p>
            <img src={photo} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
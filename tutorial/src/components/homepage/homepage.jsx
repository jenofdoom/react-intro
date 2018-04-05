import React, { Component } from 'react';

class Homepage extends Component {
  render () {  
    return (
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col">
            <h1>Contact your NZ MP</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* some controls here later? */}
          </div>
        </div>
        <div className="row">
          <div className="col">
            [table goes here]
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-md-6">
            <small className="font-italic">Source: Office of the Clerk/Parliamentary Service. Licensed by the Clerk of the House of Representatives and/or the Parliamentary Corporation on behalf of Parliamentary Service for re-use under the Creative Commons Attribution 4.0 International licence. Full licence available at <a href="https://creativecommons.org/licenses/by/4.0/">https://creativecommons.org/licenses/by/4.0/</a>. Data last updated <a href="https://www.parliament.nz/en/get-involved/have-your-say/contact-an-mp/">5th April 2018.</a></small>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
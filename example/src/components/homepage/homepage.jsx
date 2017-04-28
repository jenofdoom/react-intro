import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';

import Search from 'components/search/search';
import Table from 'components/table/table';
import data from 'data';

class Homepage extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      searchFieldValue: ''
    };
    
    this.searchValueEntered = this.searchValueEntered.bind(this);
  }
  
  searchValueEntered (value) {
    this.setState({
      searchFieldValue: value
    });
  }
  
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
            <Search searchValueEntered={this.searchValueEntered} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Table mpData={data} searchFieldValue={this.state.searchFieldValue} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-md-6">
            <small className="font-italic">Source: Office of the Clerk/Parliamentary Service. Licensed by the Clerk of the House of Representatives and/or the Parliamentary Corporation on behalf of Parliamentary Service for re-use under the Creative Commons Attribution 4.0 International licence. Full licence available at <a href="https://creativecommons.org/licenses/by/4.0/">https://creativecommons.org/licenses/by/4.0/</a>. Data last updated <a href="https://www.parliament.nz/en/get-involved/have-your-say/contact-an-mp/">21st December 2016.</a></small>
          </div>
        </div>
        <ScrollToTop showUnder={160}>
          <button className="btn btn-primary">Back to top</button>
        </ScrollToTop>
      </div>
    );
  }
}

export default Homepage;
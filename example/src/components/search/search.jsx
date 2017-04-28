import React, { Component, } from 'react'; 
import PropTypes from 'prop-types';

import './search.scss';

class Search extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      searchFieldValue: ''
    };

    this.searchFieldChange = this.searchFieldChange.bind(this);
  }
  
  searchFieldChange (event) {
    this.setState({
      searchFieldValue: event.target.value
    });
    this.props.searchValueEntered(event.target.value);
  }
  
  render () {  
    return (
      <div className="mb-3">
        <label className="search-label">
          Search:
          <input
            className="ml-2"
            type="search"
            autoComplete="off"
            onChange={this.searchFieldChange}
            value={this.state.searchFieldValue}
          />
        </label>
      </div>
    );
  }
}

Search.propTypes = {
  searchValueEntered: PropTypes.func.isRequired
};

export default Search;
import React, { Component, } from 'react'; 
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

import './row.scss';

class Row extends Component {
  constructor (props) {
    super(props);

    this.copyAction = null;
  }

  componentDidMount() {
    this.copyAction = new Clipboard(this.copy, {
      text: () => {
        return this.email.innerText;
      }
    });
  }

  componentWillUnmount() {
    this.copyAction.destroy();
  }

  render () {
    let name = this.props.mp.name.split(',');
    name = name.reverse().join(' ');

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.mp.party}</td>
        <td>{this.props.mp.electorate}</td>
        <td>
          <a href={'mailto:' + this.props.mp.email}>
            <span ref={(ref) => { this.email = ref; }}>{this.props.mp.email}</span>
          </a>
          <button className="copybutton btn btn-default" ref={(ref) => { this.copy = ref; }}>Copy</button>
        </td>
      </tr>
    );
  }
}

Row.propTypes = {
  mp: PropTypes.object.isRequired
};

export default Row;

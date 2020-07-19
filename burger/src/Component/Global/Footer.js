// Dependencies
import React, { Component } from 'react';
import propTypes from 'prop-types';

// Assets
import './Css/Footer.css';


class Footer extends Component {
  static propTypes = {
    copyright: propTypes.string
  };

  render() {
    const { copyright = 'Burger Queen &copy; Laboratoria 2020' } = this.props;
    return (
      <div className='Footer'>
        <h4 dangerouslySetInnerHTML={{ __html: copyright }} />
      </div>
    );
  }
}

export default Footer;

// Dependencies
import React, { Component } from 'react';
import propTypes from 'prop-types';

// Assets
import './Css/Header.css';

class Header extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    items: propTypes.array.isRequired
  };

  render() {

  const { title, items } = this.props;

    return (
      <div className='Header'>
    <h2>{title}</h2>
    </div>
      );
    }
    }
  
  export default Header;
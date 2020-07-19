// Dependencies
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Clock from '../ItemMenu/Clock';

// Assets
import './Css/Header.css';
import logo2 from '../Global/Images/crown.svg';

class Header extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
  };
  render() {
    const { title } = this.props;
    return (
      <div className='Header'>
        <div className='Logo2'>
          <img src={logo2} alt='logo2' />
          <Link to={'/'}><button><h2>{title}</h2></button></Link>
        </div>
        <div className='Clock'>
          <Clock />
          {/* {clock}  */}
        </div>
      </div>
    );
  }
}

export default Header;

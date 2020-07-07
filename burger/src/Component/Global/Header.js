// Dependencies
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
     <img src={logo2} alt='logo2' /></div>
     <Link to={'/'}><button><h2>{title}</h2></button></Link>
    </div>
      );
    }
    }

  export default Header;

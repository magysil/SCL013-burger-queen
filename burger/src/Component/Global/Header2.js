// Dependencies
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";

// Assets
import './Css/Header2.css';

class Header extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,

  };

  render() {

  const { title } = this.props;

    return (
      <div className='Header'>
     <Link to={'/'}><h2>{title}</h2></Link>
    </div>
      );
    }
    }

  export default Header;

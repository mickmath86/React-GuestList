import React from 'react';
import logo from '../logo.svg';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = props =>
  <header>
    <h1>GuestList</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <p className="m-3">React JS Demo App</p>
    <GuestInputForm
      pendingGuest={props.pendingGuest}
      newGuestSubmitHandler={props.newGuestSubmitHandler}
      handleNameInput={props.handleNameInput}
    />

  </header>;

Header.propTypes ={
  pendingGuest: PropTypes.string.isRequired,
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
}

export default Header;

import React from 'react';
import PropTypes from 'prop-types';


const GuestInputForm = props =>

    <form onSubmit={props.newGuestSubmitHandler}>
        <input
          onChange={props.handleNameInput}
          type="text"
          value={props.pendingGuest}
          placeholder="Invite Someone" />
        <button
          type="submit" name="submit" value="submit">Submit</button>
    </form>


GuestInputForm.propTypes ={
  pendingGuest: PropTypes.string.isRequired,
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
}

export default GuestInputForm;

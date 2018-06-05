import React from 'react';
import PropTypes  from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList';


const MainContent = props =>
<div className="main">
  <ConfirmedFilter
    toggleFilter={props.toggleFilter}
    isFiltered={props.isFiltered}
  />
  <Counter
    totalInvited={props.totalInvited}
    numberAttending={props.numberAttending}
    numberUnconfirmed={props.numberUnconfirmed}
    />

  <GuestList

    pendingGuest={props.pendingGuest}
    removeGuestAt={props.removeGuestAt}
    toggleEditingAt={props.toggleEditingAt}
    toggleConfirmationAt={props.toggleConfirmationAt}
    guests={props.guests}
    setNameAt={props.setNameAt}
    isFiltered={props.isFiltered}/>
</div>

MainContent.propTypes={
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalInvited: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  guests: PropTypes.array.isRequired,
  setNameAt: PropTypes.func.isRequired

}

export default MainContent;

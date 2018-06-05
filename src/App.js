import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import MainContent from './MainContent';


class App extends Component {

  state = {

    pendingGuest: "",
    isFiltered: false,
    guests: [
      {
        name: 'Tom',
        isConfirmed: true,
        isEditing: false,

      },
      {
        name: 'Mike',
        isConfirmed: false,
        isEditing: false,

      },
      {
        name: 'Jack',
        isConfirmed: false,
        isEditing: false,

      },
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) =>{
        if(index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });


    toggleConfirmationAt = index =>
      this.toggleGuestPropertyAt("isConfirmed", index)

    removeGuestAt = index =>
      this.setState({
        guests:[
          ...this.state.guests.slice(0, index),
          ...this.state.guests.slice(index + 1),
        ]
      })

    toggleEditingAt = index =>
      this.toggleGuestPropertyAt("isEditing", index)




  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });


  toggleFilter = () =>
    this.setState({
      isFiltered: !this.state.isFiltered
    });


  handleNameInput = e =>
    this.setState({
      pendingGuest:e.target.value,
    })


  newGuestSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: "",
    })
  }



  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce((total, guest)=>guest.isConfirmed ? total + 1 : total,
    0
  );

  //getUnconfirmedGuests = () =>


  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header
          pendingGuest={this.state.pendingGuest}
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNameInput={this.handleNameInput}
        />

          <MainContent
            toggleFilter={this.toggleFilter}
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
            pendingGuest={this.state.pendingGuest}
            removeGuestAt={this.removeGuestAt}
            toggleEditingAt={this.toggleEditingAt}
            toggleConfirmationAt={this.toggleConfirmationAt}
            guests={this.state.guests}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}/>
        </div>

    );
  }
}

export default App;

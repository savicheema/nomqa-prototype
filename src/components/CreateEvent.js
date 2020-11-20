import React from "react";
import "./create-event.css";

import Calendar from "react-calendar";

import NomqaLogo from "./NomqaLogo";
import Avatar from "./Avatar";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCalendar: false,
    };
  }

  onChange = () => {
    this.setState({ isCalendar: false });
    return function () {};
  };

  showCalendar = () => {
    this.setState({ isCalendar: true });
  };

  render() {
    let { isCalendar } = this.state;
    let { goToInvite, goToJoinEvent } = this.props;
    return (
      <div className="create-event">
        <div className="logo">
          <NomqaLogo />
        </div>
        <div className="avatar">
          <Avatar />
        </div>
        <div className="emoji">Emoji</div>
        <div className="Host an Event">Host an event</div>
        <div className="event-form">
          <div className="calendar">
            {!isCalendar && (
              <button type="button" onClick={this.showCalendar}>
                Set time,date and duration
              </button>
            )}
            {isCalendar && <Calendar onChange={this.onChange} value={false} />}
          </div>
          <div className="keyword">
            <input placeholder="set keyword" />
          </div>

          <button className="action" type="button" onClick={goToInvite}>
            Create Event
          </button>
        </div>

        <div className="join-event-link" onClick={goToJoinEvent}>
          Joining an event? Click here
        </div>
      </div>
    );
  }
}

export default CreateEvent;

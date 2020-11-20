import React from "react";
import "./join-event.css";

import NomqaLogo from "./NomqaLogo";
import Avatar from "./Avatar";

class JoinEvent extends React.Component {
  render() {
    let { gotToCreateEvent } = this.props;
    return (
      <div className="join-event">
        <div className="logo">
          <NomqaLogo />
        </div>
        <Avatar />

        <div className="emoji">emoji</div>

        <div className="message">Join an event</div>

        <div className="event-form">
          <input placeholder="type your name" />
          <input placeholder="enter keyword" />

          <button type="button">Join Event</button>
        </div>

        <div className="create-event-link" onClick={gotToCreateEvent}>
          Want to create an event? Click here
        </div>
      </div>
    );
  }
}

export default JoinEvent;

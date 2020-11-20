import React from "react";
import "./invite.css";

class Invite extends React.Component {
  render() {
    return (
      <div className="invite">
        <div className="header">Nomqa log</div>

        <div className="content">
          <div className="avatar">Avatar</div>
          <div className="online">10 online</div>

          <div className="message">Hello! Next "keyword" event starts in</div>
          <div className="timer">03:24</div>

          <div className="invitation">
            <button type="button">Copy invitation</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Invite;

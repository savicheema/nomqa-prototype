import React from "react";
import "./avatar.css";

class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <img
          src={"../media/character/char--fixed--yellow.png"}
          alt="nomqa character"
          height="100"
          width="100"
        />
      </div>
    );
  }
}

export default Avatar;

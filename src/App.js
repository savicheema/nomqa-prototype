import React from "react";
import "./App.css";

import CreateEvent from "./components/CreateEvent";
import Invite from "./components/Invite";
import JoinEvent from "./components/JoinEvent";

class App extends React.Component {
  constructor(props) {
    super(props);

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("page") || "create";
    if (myParam.includes("join")) {
      this.state = {
        currentPage: JoinEvent,
      };
    } else {
      this.state = {
        currentPage: CreateEvent,
      };
    }
  }

  render() {
    return (
      <div className="App">
        <this.state.currentPage
          goToInvite={this.setInviteAsCurrentPage}
          goToJoinEvent={this.setJoinEventAsCurrentPage}
          gotToCreateEvent={this.setCreateEventAsCurrentPage}
        ></this.state.currentPage>
      </div>
    );
  }

  setInviteAsCurrentPage = () => {
    this.setState({ currentPage: Invite });
  };

  setJoinEventAsCurrentPage = () => {
    this.setState({ currentPage: JoinEvent });
  };

  setCreateEventAsCurrentPage = () => {
    this.setState({ currentPage: CreateEvent });
  };
}

export default App;

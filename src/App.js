import React from "react";
import "./App.css";

import CreateEvent from "./components/CreateEvent";
import Invite from "./components/Invite";
import JoinEvent from "./components/JoinEvent";

class App extends React.Component {
  constructor(props) {
    super(props);

    if (window.location.href.includes("join")) {
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
        ></this.state.currentPage>
      </div>
    );
  }

  setInviteAsCurrentPage = () => {
    this.setState({ currentPage: Invite });
  };
}

export default App;

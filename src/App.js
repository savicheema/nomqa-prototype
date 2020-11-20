import React from "react";
import "./App.css";

import CreateEvent from "./components/CreateEvent";
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
        <this.state.currentPage></this.state.currentPage>
      </div>
    );
  }
}

export default App;

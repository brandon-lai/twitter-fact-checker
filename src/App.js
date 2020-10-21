import React from 'react';
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Tweets from "./components/Tweets";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="introduction"></div>

        <h1 className="ui header">
          <div className="content">
            Tweet Fact Checker
            <div className="sub header">Powered by Twitter data</div>
          </div>
        </h1>

        <div className="ui container">
          <BrowserRouter>
            <NavBar />
            <Tweets />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

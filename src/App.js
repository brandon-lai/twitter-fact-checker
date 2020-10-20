import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

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
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

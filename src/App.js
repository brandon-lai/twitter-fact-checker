import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import TweetFeed from "./components/TweetFeed";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="introduction"></div>

        <h1 className="ui header">
          <div className="content">
            Real Time Tweet Streamer
            <div className="sub header">Powered by Twitter data</div>
          </div>
        </h1>

        <div className="ui container">
          <BrowserRouter>
            <NavBar />
            <Route exact path="/tweets" component={TweetFeed} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

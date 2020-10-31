import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Tweets from "./components/Tweets";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "realDonaldTrump"};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    this.setState({username: event.target.value});
  }

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

        <div className="ui one item">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text" name="username" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>

        <div className="ui container">
          <BrowserRouter>
            <Tweets username={this.state.username}/>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

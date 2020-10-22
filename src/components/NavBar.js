import React from "react";
import Tweets from "./Tweets";

// export let username = "realDonaldTrump";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: 'realDonaldTrump'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
        // this.handleSubmit(event.target.value);
    }

    handleSubmit(event) {
        this.setState({username: event.target.value});
        Tweets.setState({username: event.target.value});
    }

    render() {
        return (
            <div className="ui one item">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
};

export default NavBar;
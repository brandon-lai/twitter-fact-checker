import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { username } from "./NavBar.js";

class Tweets extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            username: "Initial State"
        };
    }

    render() {
        return(
            <h1>
            <TwitterTimelineEmbed sourceType="profile" screenName={username} options={{height: 800}} />
            </h1>
        )
    }
}

export default Tweets;
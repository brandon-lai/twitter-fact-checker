import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class Tweets extends React.Component{
    render() {
        return(
            <h1>
            <TwitterTimelineEmbed sourceType="profile" screenName={this.props.username} key={this.props.username} options={{count: 7, height: 800}} />
            </h1>
        )
    }
}

export default Tweets;
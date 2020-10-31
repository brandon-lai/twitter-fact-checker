import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class Tweets extends React.Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "Connection Unsuccessful" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return(
            <h1>;{this.state.apiResponse}</h1>
        );
    }
}
//     render() {
//         return(
//             <h1>
//             <TwitterTimelineEmbed sourceType="profile" screenName={this.props.username} key={this.props.username} options={{count: 7, height: 800}} />
//             </h1>
//         )
//     }
// }

export default Tweets;
import React from "react";

const apiURL = "http://localhost:9000/twitterAPI";
// const apiURL = "https://api.twitter.com/2/tweets/search/recent";

class Tweets extends React.Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "Connection Unsuccessful" };
    }

    callAPI() {
        fetch(apiURL)
            // .then(console.log("connected"))
            .then(res => res.json)
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return(
            <h1>{this.state.apiResponse}</h1>
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
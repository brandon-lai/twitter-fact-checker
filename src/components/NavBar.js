import React from "react";

export let username = "realDonaldTrump";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
        this.handleSubmit(event.target.value);
    }

    handleSubmit(event) {
        this.setState({event})
    }

    render() {
        return (
            <div className="ui one item">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text" name="username" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
};

export default NavBar;
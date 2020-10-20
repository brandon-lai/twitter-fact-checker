import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="ui one item menu">
            <NavLink to="/tweets" className="item" target="_blank">
                Tweets
            </NavLink>
            {/* <NavLink to="/rules" className="item" target="_blank">
                Manage Rules
            </NavLink> */}
        </div>
    );
};

export default NavBar;
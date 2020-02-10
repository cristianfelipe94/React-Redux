import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeTab = { color : "#F15B2A"};

    return (
        <nav>
            <NavLink to="/" activeStyle={activeTab} exact>Home</NavLink>
            {" | "}
            <NavLink to="/blog" activeStyle={activeTab}>Blog</NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeTab}>About</NavLink>
        </nav>
    )
}

export default Header;
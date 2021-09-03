import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
    return (
        <header className="bg-black">
            <div className="container flex justify-end">
                <div className="inline-flex py-3 px-3 my-6 items-center">
                <NavLink
                        to="/about"
                        className="inline-flex items-center my-12 mx-1 mr-1 rounded text-yellow-500 text-center hover:text-purple-900"
                        activeClassName="text-purple-900 bg-yellow-500"
                    >
                        <SocialIcon
                        url="/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 55, width: 55 }}
                    />
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

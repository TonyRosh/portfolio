import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
    return (
        <header className="bg-black">
            <div className="container flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        className="inline-flex items-center text-center py-3 px-3 mr-3 text-purple-900 hover:text-yellow-500 text-3xl font-bold cursive traking-widest"
                    >
                        Tony Roscioli
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center my-12 mx-1 mr-1 rounded text-yellow-500 text-center hover:text-purple-900"
                        activeClassName="text-purple-900 bg-yellow-500"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center my-12 mx-1 mr-1 rounded text-yellow-500 text-center hover:text-purple-900"
                        activeClassName="text-purple-900 bg-yellow-500"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center my-12 mx-1 mr-1 rounded text-yellow-500 text-center hover:text-purple-900"
                        activeClassName="text-purple-900 bg-yellow-500"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6 items-center">
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                </div>
            </div>
        </header>
    );
}

export default Navbar;

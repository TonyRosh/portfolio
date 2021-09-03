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
                        className="inline-flex items-center text-center py-2 px-2 mr-2 text-white hover:text-gray-500 text-3xl font-bold cursive traking-widest"
                    >
                        Tony Roscioli
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center my-12 mx-1 mr-1 rounded text-white text-center hover:text-gray-500"
                        activeClassName="text-gray-500 bg-white"
                    >
                        About Me!
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center my-12 mx-1 mr-1 rounded text-white text-center hover:text-gray-500"
                        activeClassName="text-gray-500 bg-white"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center my-12 mx-1 mr-1 rounded text-white text-center hover:text-gray-500"
                        activeClassName="text-gray-500 bg-white"
                    >
                        Blog Posts
                    </NavLink>
                </nav>
                <div className="inline-flex py-2 px-2 my-5 items-center absolute right-0">
                    <SocialIcon
                        url="https://www.linkedin.com/in/tony-roscioli-dev/"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://github.com/TonyRosh"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://www.facebook.com/tony.roscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://twitter.com/tonyRoscioli"
                        className="mr-3"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://medium.com/@TonyRosh"
                        className="mr-3"
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

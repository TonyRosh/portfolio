import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-black">
            <div className="container flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        className="inline-flex items-center text-center py-2 px-2 mr-2 text-2xl font-bold cursive"
                    >
                        <span className="relative px-4 py-2 overflow-hidden font-medium text-white bg-black border border-gray-100 rounded-lg shadow-inner group">
    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
    <span className="relative transition-colors duration-300 delay-200 group-hover:text-purple-800 ease">Tony Roscioli</span>
</span>
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className="inline-flex items-center my-12 mx-1 mr-1 rounded text-center"
                    >
                        <span className="relative px-3 py-1 overflow-hidden font-medium text-purple-800 bg-black border border-purple-800 rounded-lg shadow-inner group">
    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
    <span className="relative transition-colors duration-300 delay-200 group-hover:text-purple-800 ease">Projects</span>
</span>
                    </NavLink>
                    <NavLink
                        to="/resume"
                        className="inline-flex items-center my-12 mx-1 mr-1 rounded text-center"
                    >
                        <span className="relative px-3 py-1 overflow-hidden font-medium text-purple-800 bg-black border border-purple-800 rounded-lg shadow-inner group">
    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
    <span className="relative transition-colors duration-300 delay-200 group-hover:text-purple-800 ease">Resume</span>
</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;

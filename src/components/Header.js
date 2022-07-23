import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="flex sm:gap-10 p-4 w-screen bg-slate-200 justify-between">
            <div className="mt-3 ml-6 font-bold text-sm md:mt-0 md:text-2xl">
                <h2>Contact Manager</h2>
            </div>
            <Link to="/add" className="text-slate-200 sm:text-sm mr-3 bg-blue-700 p-2 text-xs rounded-lg md:mr-5">
                    <button className="">Add Contact</button>
            </Link>
        </div>
    );
};

export default Header;

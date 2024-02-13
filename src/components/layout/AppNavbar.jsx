import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.png"


const AppNavbar = () => {

    const navList =(
        <>
            <li>
                <NavLink className={({isActive}) => isActive ? "font-semibold underline " +
                    "text-lg" : "text-lg font-semibold"} to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "font-semibold underline " +
                    "text-lg" : "text-lg font-semibold"} to={"/products"}>Products</NavLink>
            </li>
             <li>
                 <NavLink className={({isActive}) => isActive ? "font-semibold underline " +
                  "text-lg" : "text-lg font-semibold"} to={"/login"}>Login</NavLink>
             </li>
        </>
    )


    return (
        <div className="navbar shadow-2xl px-5 py-3 fixed top-0 right-0 z-50 max-w-screen-2xl bg-base-100">
            <div className="navbar-start">
            <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>

                </div>
                <Link to={"/"} className="">
                    <img src={logo} alt={""} className={"lg:w-32 w-24 mb-2 lg:mb-0 md:w-28 "}/>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex items-start justify-end gap-3">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
           <div tabIndex={0} role="button" className="btn btn-ghost  lg:mt-2 btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={""}/>
                        </div>

           </div>
        </div>
    );
};

export default AppNavbar;
import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import logo from "../../assets/images/logo.png"
import userStore from "../../store/userStore.js";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import {motion} from "framer-motion";
import Avatar from "../user/Avatar.jsx";
import {FaSearch} from "react-icons/fa";
import productStore from "../../store/productStore.js";


const AppNavbar = () => {
    const navigate = useNavigate();
    const {isLogin,userLogoutRequest} = userStore();
    const {searchKeyword,setSearchKeyword} = productStore();

    const handleLogout=async ()=>{
        let res = await userLogoutRequest();
        if(res){
            toast.success("Logout successfully");
            Cookies.remove('token')
            navigate('/login');
            sessionStorage.clear();
            localStorage.clear();
        }
    }

    const handleLogin = async()=>{
        navigate('/login')
    }

    const handleKeyword=()=>{

           if(searchKeyword.length>0){
               navigate(`/by-keyword/${searchKeyword}`);
           }
           else{
               navigate('/');
           }
    }


    const navList =(
        <>
            <li>
                <div
                    className="input input-bordered hover:bg-base-100 input-primary max-w-64 lg:max-w-sm w-full flex items-center gap-2">
                    <input type="text" className="grow h-full " placeholder="Search name"
                           onChange={(e) => setSearchKeyword(e.target.value)}/>
                    <motion.button onClick={handleKeyword}
                                   whileHover={{scale: 1.03}} whileTap={{scale: 0.9}}
                                   transition={{type: "spring", stiffness: 400, damping: 17}}
                                   className={"absolute bg-primary px-4 py-3 lg:right-1 right-5 rounded-md text-gray-500"}>
                        <FaSearch/>
                    </motion.button>
                </div>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "font-semibold underline " +
                    "text-lg mt-3 lg:mt-0 lg:mx-5" : "text-lg font-medium mt-3 lg:mt-0 lg:mx-5"}
                         to={"/"}>Home</NavLink>
            </li>
            {
                isLogin()?(
                    <li>
                        <NavLink className={({isActive}) => isActive ? "font-semibold underline " +
                            "text-lg lg:mr-5  mt-3 lg:mt-0" : "text-lg font-medium lg:mr-5  mt-3 lg:mt-0"}
                                 to={"/products"}>Products</NavLink>
                    </li>
                ):null
            }
            <li>
                <NavLink className={({isActive}) => isActive ? "font-semibold underline " +
                    "text-lg lg:mr-5  mt-3 lg:mt-0" : "text-lg font-medium lg:mr-5  mt-3 lg:mt-0"}
                         to={"/create-account"}>Signup</NavLink>
            </li>
            {
                isLogin() ? (<li>
                        <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                       transition={{type: "spring", stiffness: 400, damping: 17}}
                                       onClick={handleLogout}
                                       className={"text-lg bg-base-100 max-w-[100px] border border-primary font-semibold rounded-xl " +
                                           "shadow-lg lg:mr-7 mt-3 lg:mt-0 ml-2 lg:ml-0"}>
                            Logout
                        </motion.button>
                    </li>)
                    :
                    (<motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                    transition={{type: "spring", stiffness: 400, damping: 17}}
                                    onClick={handleLogin}
                                    className={"btn btn-md btn-primary max-w-[100px] text-white font-semibold rounded-xl " +
                                        "shadow-lg lg:mr-7  mt-3 lg:mt-0 mr-0 lg:ml-0"}>
                        Login
                    </motion.button>)
            }
        </>
    )


    return (
        <div className="navbar shadow-2xl px-5 py-3 fixed top-0  z-50 max-w-screen-2xl w-full bg-base-100">
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
                        className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72">
                        {navList}
                    </ul>

                </div>
                <Link to={"/"} className="">
                    <img src={logo} alt={""} className={"lg:w-32 w-24 mb-2 lg:mb-0 md:w-28 "}/>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex items-start justify-end gap-4">
                <ul className="menu menu-horizontal">
                    {navList}
                </ul>
            </div>
            {
                isLogin() ? (
                    <Avatar/>
                ) : (
                    <div></div>
                )
            }
        </div>
    );
};

export default AppNavbar;
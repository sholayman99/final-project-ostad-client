import React, {useEffect} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import logo from "../../assets/images/logo.png"
import userStore from "../../store/userStore.js";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import {motion} from "framer-motion";


const AppNavbar = () => {
    const navigate = useNavigate();
    const {isLogin,userLogoutRequest,userInfo} = userStore();

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

    const navList =(
        <>
            <li>
                <NavLink className={({isActive}) => isActive ? "font-semibold underline " +
                    "text-lg lg:mr-5" : "text-lg font-semibold lg:mr-5"} to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "font-semibold underline " +
                    "text-lg lg:mr-5" : "text-lg font-semibold lg:mr-5"} to={"/products"}>Products</NavLink>
            </li>
            {
                isLogin()?(<li>
                    <motion.button  whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                    transition={{type: "spring", stiffness: 400, damping: 17}}
                        onClick={handleLogout}
                        className={"text-lg bg-base-100 border border-primary font-semibold rounded-xl " +
                            "shadow-lg lg:mr-7"}>
                        Logout
                    </motion.button>
                    </li>)
                    :
                    (<motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                    transition={{type: "spring", stiffness: 400, damping: 17}}
                                    onClick={handleLogin}
                                    className={"text-lg bg-black text-white px-5 font-semibold rounded-xl " +
                                        "shadow-lg lg:mr-7"}>
                        Login
                    </motion.button>)
            }
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
            <div className="navbar-end hidden lg:flex items-start justify-end gap-4">
                <ul className="menu menu-horizontal">
                    {navList}
                </ul>
            </div>
            {
              userInfo ===null? (
                  <div className="avatar">
                      <div
                          className="lg:w-12 md:w-10 w-8 rounded-full">
                          <img src={"https://i.ibb.co/7XLTDWv/user.png"} alt={""}/>
                      </div>
                  </div>
              ) : (
                  isLogin() ? (
                          <div className="avatar online">
                              <div
                                  className="lg:w-12 md:w-10 w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                                  <img src={userInfo['avatar']} alt={""}/>
                              </div>
                          </div>
                      )
                      :
                      (<div className="avatar">
                          <div className="lg:w-12 md:w-10 w-8 rounded-full">
                              <img src={"https://i.ibb.co/7XLTDWv/user.png"} alt={""}/>
                          </div>
                      </div>)
              )
            }
        </div>
    );
};

export default AppNavbar;
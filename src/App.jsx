// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProductByBrandPage from "./pages/ProductByBrandPage.jsx";
import ProductByCategoryPage from "./pages/ProductByCategoryPage.jsx";
import ProductByKeywordPage from "./pages/ProductByKeywordPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import OtpPage from "./pages/OtpPage.jsx";
import axios from "axios";
import ProfilePage from "./pages/ProfilePage.jsx";
import userStore from "./store/userStore.js";

const App = () => {

    axios.defaults.baseURL = 'http://localhost:5000/api/v1';

    const {userInfoRequest , isLogin } = userStore();
    useEffect(() => {
        (async()=>{
           isLogin()?
               (
               await userInfoRequest()
               )
               :
               null
        })()
    }, [isLogin]);

    return (
        <div className={"max-w-screen-2xl font-poppins mx-auto"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <HomePage /> } />
                    <Route path={"/products"} element={ <ProductPage /> } />
                    <Route path={"/login"} element={ <LoginPage /> } />
                    <Route path={"/create-account"} element={ <AccountPage /> } />
                    <Route path={"/otp-verification"} element={ <OtpPage /> } />
                    <Route path={"/by-brand/:id"} element={ <ProductByBrandPage /> } />
                    <Route path={"/by-category/:id"} element={ <ProductByCategoryPage /> } />
                    <Route path={"/by-keyword/:keyword"} element={ <ProductByKeywordPage /> } />
                    <Route path={"/profile"} element={ <ProfilePage /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
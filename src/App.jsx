// eslint-disable-next-line no-unused-vars
import React from 'react';
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

const App = () => {
    axios.defaults.baseURL = 'http://localhost:9000/api/v1';
    return (
        <div className={"max-w-screen-2xl font-poppins mx-auto"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <HomePage /> } />
                    <Route path={"/products"} element={ <ProductPage /> } />
                    <Route path={"/login"} element={ <LoginPage /> } />
                    <Route path={"/create-account"} element={ <AccountPage /> } />
                    <Route path={"/otp-verification"} element={ <OtpPage /> } />
                    <Route path={"/by-brand/:brandID"} element={ <ProductByBrandPage /> } />
                    <Route path={"/by-category/:categoryID"} element={ <ProductByCategoryPage /> } />
                    <Route path={"/by-keyword/:keyword"} element={ <ProductByKeywordPage /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
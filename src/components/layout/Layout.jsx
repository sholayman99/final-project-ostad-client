import React from 'react';
import AppNavbar from "./AppNavbar.jsx";
import {Toaster} from "react-hot-toast";
import Footer from "./Footer.jsx";


const Layout = ( {children}) => {

    return (
        <>
           <AppNavbar />
            {children}
            <Toaster position={"top-center"} gutter={8}   toastOptions={{duration: 5000}}/>
            <Footer />
        </>
    );
};

export default Layout;
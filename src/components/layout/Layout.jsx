import React from 'react';
import AppNavbar from "./AppNavbar.jsx";
import {Toaster} from "react-hot-toast";
import Footer from "./Footer.jsx";

const Layout = ( {children}) => {
    return (
        <>
           <AppNavbar />
            {children}
            <Toaster position={"top-center"} />
            <Footer />
        </>
    );
};

export default Layout;
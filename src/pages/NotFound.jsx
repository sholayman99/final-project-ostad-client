import React from 'react';
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate('/');
    }

    return (
        <div className={"flex flex-col justify-center items-center gap-5 min-h-[50vh] lg:min-h-screen"}>
            <h1 className={"text-error font-bold text-6xl"}>404</h1>
            <h2 className={"text-5xl font-bold"}>Not Found</h2>
            <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                           transition={{type: "spring", stiffness: 400, damping: 17}}
                           onClick={goToHome}
                           className={"btn text-lg bg-base-100  border border-primary font-semibold rounded-xl " +
                               "shadow-lg"}>
               Return Home
            </motion.button>
        </div>
    );
};

export default NotFound;
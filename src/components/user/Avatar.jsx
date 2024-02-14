import React from 'react';
import userStore from "../../store/userStore.js";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Avatar = () => {

    const {userInfo} = userStore();

    if(userInfo === null) {
        return <Link to={"/profile"} className="avatar">
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}} className="w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt={""}/>
            </motion.div>
            </Link>
    } else {
        return (
            <Link to={"/profile"} className="avatar online">
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                            transition={{type: "spring", stiffness: 400, damping: 17}}
                            className="lg:w-12 md:w-10 w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                    <img src={userInfo['avatar']} alt={""}/>
                </motion.div>
            </Link>
        );
    }
};

export default Avatar;
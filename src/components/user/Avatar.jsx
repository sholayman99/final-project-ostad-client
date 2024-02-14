import React from 'react';
import userStore from "../../store/userStore.js";
import AvatarSkeleton from "../../skeleton/Avatar-Skeleton.jsx";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Avatar = () => {

    const {userInfo} = userStore();

    if(userInfo === null) {
        return <Link to={"/profile"} className="avatar">
            <div className="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt={""}/>
            </div>
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
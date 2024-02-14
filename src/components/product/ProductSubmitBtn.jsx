import React from 'react';
import productStore from "../../store/productStore.js";
import {motion} from "framer-motion";

const ProductSubmitBtn = (props) => {

    const {isProductSubmit} = productStore()
    if(isProductSubmit===false) {
        return <motion.button onClick={props.onClick} whileHover={{scale: 1.1}}
                              whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 400, damping: 17}}
                              className="btn btn-primary w-full md:w-[48%] lg:w-[48%] mt-2 text-base-100">
            {props.text}
        </motion.button>
    } else {
        return (
            <button className="btn btn-primary w-full md:w-[48%] mt-2 lg:w-[48%] bg-opacity-90 text-base-100">
                <span className="loading loading-spinner"></span>
                loading..
            </button>
        );
    }
};

export default ProductSubmitBtn;
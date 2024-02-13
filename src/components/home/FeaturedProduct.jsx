import React from 'react';
import FeaturedSkeleton from "../../skeleton/FeaturedSkeleton.jsx";
import productStore from "../../store/productStore.js";
import {motion} from "framer-motion";

const FeaturedProduct = () => {

    const {productList} = productStore();

    console.log(productList)

    if(productList === null){
        return <FeaturedSkeleton />
    }
    else{
        return (
            <section className={"lg:px-10 lg:pt-20 md:p-10 p-6 flex flex-col items-center justify-center gap-10"}>
                <div className={"text-center"}>
                    <h1 className={"lg:text-3xl md:text-2xl text-xl font-bold uppercase"}>Featured Products</h1>
                    <p className={"mt-2 lg:text-md md:text-sm text-xs text-gray-600"}>
                        Products Featuring With Top Brands and Categories Only For You
                    </p>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10"}>
                    {
                        productList.map((item,i) => {
                            return (
                                <motion.div key={i} className="card shadow-2xl" whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                            transition={{type: "spring", stiffness: 400, damping: 17}}>
                                    <figure className="px-3 pt-3">
                                        <img src={item['image']} alt="Shoes" className="rounded-xl"/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{item['productName']}</h2>
                                        <p className={"text-gray-600"}>{item['des']}</p>

                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
};

export default FeaturedProduct;
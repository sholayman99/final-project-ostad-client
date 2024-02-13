import React from 'react';
import productStore from "../../store/productStore.js";
import CategorySkeleton from "../../skeleton/Category-Skeleton.jsx";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const CategoryList = () => {

    const {categoryList} = productStore();

    if(categoryList === null){
        return <CategorySkeleton/>
    }
    else{
        return (
            <section className={"lg:px-10 lg:pt-20 md:p-10 p-6 flex flex-col items-center justify-center gap-10"}>
                <div className={"text-center"}>
                    <h1 className={"lg:text-3xl md:text-2xl text-xl font-bold uppercase"}>Top Categories</h1>
                <p className={"mt-2 lg:text-md md:text-sm text-xs text-gray-600"}>Explore a World of Choices Across Our
                    Most Popular Shopping Categories </p>
                </div>
                <div className={"grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-10 w-full "}>
                    {
                        categoryList.map((item, i) => {
                            return (
                                <motion.div className={"p-0"} key={i} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                                            transition={{type: "spring", stiffness: 400, damping: 17}}>
                                    <Link to={`/by-brand/${item['_id']}`} className="card shadow-2xl">
                                        <figure className="px-10 pt-5">
                                            <img src={item['img']} alt="Shoes" className="rounded-xl"/>
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="lg:text-xl md:text-lg text-md font-semibold">{item['categoryName']}</h2>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
};

export default CategoryList;
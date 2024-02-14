import React, {useEffect} from 'react';
import productStore from "../../store/productStore.js";
import {motion} from "framer-motion";
import FeaturedSkeleton from "../../skeleton/FeaturedSkeleton.jsx";

const ProductList = () => {

    const {listProduct,allProductListRequest,listByBrandRequest,brandListRequest,categoryListRequest,
        listByCategoryRequest,listByKeywordRequest,brandList,categoryList} = productStore();

    useEffect(() => {
        (async ()=>{
            brandList === null ?await brandListRequest():null
            categoryList === null?await categoryListRequest():null
        })()
    }, []);

    return (
        <section className={"flex justify-center items-center flex-col gap-14 mt-28 lg:px-10 lg:pt-20 md:p-10 p-5"}>

            <div className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full "}>
                <select className="select select-primary  w-full max-w-xs">
                    <option disabled selected> Select Brand</option>
                    {
                        brandList !== null ? (
                            brandList.map((item, i) => {
                                return (
                                    <option key={i}>{item['brandName']}</option>
                                )
                            })
                        ) : (
                            <option>No brand</option>
                        )
                    }
                </select>

                <select className="select select-primary  w-full max-w-xs">
                    <option disabled selected>Select Category</option>
                    {
                        categoryList !== null ? (
                            categoryList.map((item, i) => {
                                return (
                                    <option key={i}>{item['categoryName']}</option>
                                )
                            })
                        ) : (
                            <option>No brand</option>
                        )
                    }
                </select>

                <label className="input input-bordered input-primary max-w-xs w-full flex items-center gap-2">
                    <input type="text" className="grow " placeholder="Search"/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path fillRule="evenodd"
                              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                              clipRule="evenodd"/>
                    </svg>
                </label>

            </div>

            <div className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"}>
                {
                    listProduct === null?(<FeaturedSkeleton />):(
                        listProduct.map((item,i) => {
                            return (
                                <motion.div key={i} className="card shadow-2xl" whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                            transition={{type: "spring", stiffness: 400, damping: 17}}>
                                    <figure className="px-3 pt-3">
                                        <img src={item['image']} alt="Shoes" className="rounded-xl max-w-sm max-h-[200px]"/>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{item['productName']}</h2>
                                        <p className={"text-gray-600"}>{item['des']}</p>

                                    </div>
                                </motion.div>
                            )
                        })
                    )
                }
            </div>

        </section>
    );
};

export default ProductList;
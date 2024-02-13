import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Slider from "../components/home/Slider.jsx";
import productStore from "../store/productStore.js";
import BrandList from "../components/home/BrandList.jsx";
import CategoryList from "../components/home/CategoryList.jsx";
import FeaturedProduct from "../components/home/FeaturedProduct.jsx";


const HomePage = () => {

    const {sliderListRequest,brandListRequest,categoryListRequest,productListRequest} = productStore();

    useEffect(() => {
        (async()=>{
            await sliderListRequest();
            await brandListRequest();
            await categoryListRequest();
            await productListRequest();
        })()
    }, []);

    return (
        <Layout>
            <Slider />
            <BrandList />
            <CategoryList />
            <FeaturedProduct />
        </Layout>
    );
};

export default HomePage;
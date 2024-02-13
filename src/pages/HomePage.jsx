import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Slider from "../components/home/Slider.jsx";
import productStore from "../store/productStore.js";
import BrandList from "../components/home/BrandList.jsx";
import CategoryList from "../components/home/CategoryList.jsx";


const HomePage = () => {

    const {sliderListRequest,brandListRequest,categoryListRequest} = productStore();

    useEffect(() => {
        (async()=>{
            await sliderListRequest();
            await brandListRequest();
            await categoryListRequest();
        })()
    }, [sliderListRequest,brandListRequest,categoryListRequest]);

    return (
        <Layout>
            <Slider />
            <BrandList />
            <CategoryList />
        </Layout>
    );
};

export default HomePage;
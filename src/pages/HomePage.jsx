import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Slider from "../components/home/Slider.jsx";
import productStore from "../store/productStore.js";


const HomePage = () => {

    const {sliderListRequest} = productStore();

    useEffect(() => {
        (async()=>{
            await sliderListRequest();
        })()
    }, []);

    return (
        <Layout>
            <Slider />
        </Layout>
    );
};

export default HomePage;
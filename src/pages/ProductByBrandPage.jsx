import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import productStore from "../store/productStore.js";
import Layout from "../components/layout/Layout.jsx";
import ProductList from "../components/ProductList.jsx";

const ProductByBrandPage = () => {

    const {listByBrandRequest} = productStore();

    const {id} = useParams();

    useEffect(() => {
        (async()=>{
            await listByBrandRequest(id);
        })()
    }, [id]);

    return (
        <Layout>
           <ProductList />
        </Layout>
    );
};

export default ProductByBrandPage;
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import productStore from "../store/productStore.js";
import ProductList from "../components/ProductList.jsx";
import Layout from "../components/layout/Layout.jsx";

const ProductByKeywordPage = () => {
    const {listByKeywordRequest} = productStore();
    const {keyword} = useParams();

    useEffect(() => {
        (async()=>{
            await listByKeywordRequest(keyword);
        })()
    }, [keyword]);

    return (
        <Layout>
            <ProductList />
        </Layout>
    );
};

export default ProductByKeywordPage;
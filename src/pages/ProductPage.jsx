import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import productStore from "../store/productStore.js";
import ProductList from "../components/product/ProductList.jsx";


const ProductPage = () => {

    const {allProductListRequest} = productStore();

    useEffect(() => {
        (async ()=>{
            await allProductListRequest();
        })()
    }, []);

    return (
        <Layout>
            <ProductList />
        </Layout>
    );
};

export default ProductPage;
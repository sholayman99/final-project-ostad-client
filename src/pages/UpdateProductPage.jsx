import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import {useParams} from "react-router-dom";
import UpdateForm from "../components/product/UpdateForm.jsx";
import productStore from "../store/productStore.js";


const UpdateProductPage = () => {

    const {id} = useParams();

    const { brandListRequest,categoryList,categoryListRequest,brandList} = productStore();

    useEffect(() => {
        (async()=>{
            brandList === null ? await brandListRequest():null;
            categoryList === null ? await categoryListRequest():null;
        })()
    }, [id]);


    return (
        <Layout>
        <UpdateForm />
        </Layout>
    );
};

export default UpdateProductPage;
import React, {useEffect, useState} from 'react';
import Layout from "../components/layout/Layout.jsx";
import {useParams} from "react-router-dom";
import UpdateForm from "../components/product/UpdateForm.jsx";
import productStore from "../store/productStore.js";
import FormSkeleton from "../skeleton/Form-Skeleton.jsx";


const UpdateProductPage = () => {
   const [loading , setLoading] = useState(false)
    const {id} = useParams();

    const { brandListRequest,categoryList,categoryListRequest,
        brandList,singleProductRequest} = productStore();

    useEffect(() => {
        (async()=>{
            setLoading(true)
            await singleProductRequest(id);
            brandList === null ? await brandListRequest():null;
            categoryList === null ? await categoryListRequest():null;
            setLoading(false)
        })()
    }, [id]);

  if(loading){
      return <FormSkeleton />
  }
  return (
        <Layout>
        <UpdateForm />
        </Layout>
    );
};

export default UpdateProductPage;
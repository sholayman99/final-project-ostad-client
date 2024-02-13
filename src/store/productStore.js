import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../utility/utility.js";


const productStore =create((set)=>({

    searchKeyword:"",
    setSearchKeyword: async(keyword)=>{
        set({searchKeyword:keyword})
    },

    sliderList:null,
    sliderListRequest:async()=>{
        let res = await axios.get(`/readSliders`,{withCredentials:true});

        if(res.data['status']==='success'){
            set({sliderList:res.data['data']});
        }
    },

    brandList:null,
    brandListRequest:async()=>{
        let res = await axios.get(`/productByBrand`,{withCredentials:true});

        if(res.data['status']==='success'){
            set({brandList:res.data['data']});
        }
    },

    categoryList:null,
    categoryListRequest:async()=>{
        let res = await axios.get(`/productByCategory`,{withCredentials:true});

        if(res.data['status']==='success'){
            set({categoryList:res.data['data']});
        }
    },

    productList:null,
    productListRequest:async()=>{
        let res = await axios.get(`/readProducts`,{withCredentials:true});
        if(res.data['status']==='success'){
            set({productList:res.data['data']});
        }
    },

    listProduct:null,
    allProductListRequest:async()=>{
        try {
            let res = await axios.get(`/readAllProducts`,{withCredentials:true});
            if(res.data['status']==='success'){
                set({listProduct:res.data['data']});
            }
        }
        catch (e) {
             unauthorized(e.response.status)
        }
    },

   listByBrandRequest:async(brandID)=>{
      try {
          let res = await axios.get(`/listByBrand/${brandID}`,{withCredentials:true});
          if(res.data['status']==='success'){
              set({listProduct:res.data['data']});
          }
      }
      catch (e) {
          unauthorized(e.response.status)
      }
   },

    listByCategoryRequest:async(categoryID)=>{
        try {
            let res = await axios.get(`/listByCategory/${categoryID}`,{withCredentials:true});
            if(res.data['status']==='success'){
                set({listProduct:res.data['data']});
            }
        }
        catch (e) {
            unauthorized(e.response.status)
        }
    },

    listByKeywordRequest:async(keyword)=>{
        try {
            let res = await axios.get(`/listByKeyword/${keyword}`,{withCredentials:true});
            if(res.data['status']==='success'){
                set({listProduct:res.data['data']});
            }
        }
        catch (e) {
            unauthorized(e.response.status)
        }
    },




}));

export default productStore;
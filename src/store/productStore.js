import {create} from "zustand";
import axios from "axios";


const productStore =create((set)=>({

    sliderList:null,
    sliderListRequest:async()=>{
        let res = await axios.get(`/readSliders`);

        if(res.data['status']==='success'){
            set({sliderList:res.data['data']});
        }
        else{
            set({sliderList:null});
        }
    },

    brandList:null,
    brandListRequest:async()=>{
        let res = await axios.get(`/productByBrand`);

        if(res.data['status']==='success'){
            set({brandList:res.data['data']});
        }
        else{
            set({brandList:null});
        }
    },

    categoryList:null,
    categoryListRequest:async()=>{
        let res = await axios.get(`/productByCategory`);

        if(res.data['status']==='success'){
            set({categoryList:res.data['data']});
        }
        else{
            set({categoryList:null});
        }
    },

    productList:null,
    productListRequest:async()=>{
        let res = await axios.get(`/readProducts`);
        if(res.data['status']==='success'){
            set({productList:res.data['data']});
        }
    }


}));

export default productStore;
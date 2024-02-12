import {create} from "zustand";
import axios from "axios";
const baseUrl = "http://localhost:5080/api/v1"

const productStore =create((set)=>({

    sliderList:null,
    sliderListRequest:async()=>{
        let res = await axios.get(`${baseUrl}/readSliders`);

        if(res.data['status']==='success'){
            set({sliderList:res.data['data']});
        }
        else{
            set({sliderList:null});
        }
    },

    brandList:null,
    brandListRequest:async()=>{
        let res = await axios.get(`${baseUrl}/productByBrand`);

        if(res.data['status']==='success'){
            set({brandList:res.data['data']});
        }
        else{
            set({brandList:null});
        }
    },

    categoryList:null,
    categoryListRequest:async()=>{
        let res = await axios.get(`${baseUrl}/productByCategory`);

        if(res.data['status']==='success'){
            set({categoryList:res.data['data']});
        }
        else{
            set({categoryList:null});
        }
    },


}));

export default productStore;
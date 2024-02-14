import {create} from "zustand";
import axios from "axios";
import {getEmail, setEmail, unauthorized} from "../utility/utility.js";

import Cookies from "js-cookie";

const userStore =create((set)=>({

    isLogin:()=>{
        return !!Cookies.get("token");
    },

    isFormSubmit:false,

    isLoading:false,

    accountFormValue:{name:"",email:"",password:"",mobile:"",avatar:""},
    accountFormOnChange:(name,value)=>{
        set((state)=>({
            accountFormValue:{
                ...state.accountFormValue,
                [name]:value
            }
        }))
    },

    otpFormValue:{otp:""},
    otpFormOnChange:(name,value)=>{
        set((state)=>({
            otpFormValue:{
                ...state.otpFormValue,
                [name]:value
            }
        }))
    },

    loginFormValue:{email: "", password: ""},
    loginValueOnChange:(name,value)=>{
        set((state)=>({
            loginFormValue:{
                ...state.loginFormValue,
                [name]:value
            }
        }))
    },

    createAccountRequest:async(postBody)=>{
        set({isFormSubmit:true})
        setEmail(postBody.email);
        let res = await axios.post(`/createUser`,postBody,{withCredentials:true});
        set({isFormSubmit:false})
        return res.data['status'] === 'success';
    },

    accountVerifyRequest:async(otp)=>{
        set({isFormSubmit:true})
        let email = getEmail();
        let res = await axios.post(`/verifyUser/${email}/${otp}`,{withCredentials:true});
        set({isFormSubmit:false})
        return res.data['status'] === 'success';
    },

    userLoginRequest:async(postBody)=>{
        set({isFormSubmit:true})
        let res = await axios.post(`/loginUser`,postBody,{withCredentials:true});
        set({isFormSubmit:false})
        return res.data['status'] === 'success';

    },

    userLogoutRequest:async()=>{
        let res = await axios.get('/logout',{withCredentials:true});
        return res.data['status'] === 'success';

    },

    userInfo:null,
    userInfoRequest:async ()=>{
       try {

           let res = await axios.get(`/userInfo`,{withCredentials:true});
           set({isLoading:true})
           if( res.data['status'] === 'success'){
               set({userInfo:res.data['data'][0]},);
           }
           set({isLoading:false})
       }
       catch (e) {
         unauthorized(e.response.status);
       }
    }

}));

export default userStore;
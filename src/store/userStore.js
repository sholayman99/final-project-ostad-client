import {create} from "zustand";
import axios from "axios";
import {getEmail, setEmail} from "../utility/utility.js";
const baseUrl = "http://localhost:5080/api/v1";
import Cookies from "js-cookie";

const userStore =create((set)=>({

    isFormSubmit:false,

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
        let res = await axios.post(`${baseUrl}/createUser`,postBody);
        console.log(res)
        set({isFormSubmit:false})
        return res.data['status'] === 'success';
    },

    accountVerifyRequest:async(otp)=>{
        set({isFormSubmit:true})
        let email = getEmail();
        let res = await axios.post(`${baseUrl}/verifyUser/${email}/${otp}`);
        set({isFormSubmit:false})
        return res.data['status'] === 'success';
    },

    userLoginRequest:async(postBody)=>{
        set({isFormSubmit:true})
        let res = await axios.post(`${baseUrl}/loginUser`,postBody);
        console.log(res);
        set({isFormSubmit:false})
        return res.data['status'] === 'success';

    },
}));

export default userStore;
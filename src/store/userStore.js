import {create} from "zustand";
import axios from "axios";
const baseUrl = "http://localhost:5080/api/v1"

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

    createAccountRequest:async()=>{
        let res = await axios.post(`${baseUrl}/createUser`);

        return res.data['status'] === 'success';
    },



}));

export default userStore;
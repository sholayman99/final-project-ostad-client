// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import Layout from "../components/layout/Layout.jsx";
import userStore from "../store/userStore.js";
import Avatar from "../components/user/Avatar.jsx";
import SubmitButton from "../components/user/SubmitButton.jsx";
import toast from "react-hot-toast";
import validator from "../utility/validator.js";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const ProfilePage = () => {
  const [passwordType, setPasswordType] = useState("password");
  const {passFormValue,passFormOnChange,updatePassRequest,avatarFormOnChange,
      avatarFormValue,updateAvatarRequest} = userStore();


  const handlePass = async()=>{
      if(validator.isPassword(passFormValue.password) && !validator.isNull(passFormValue.password)){
          let res = await updatePassRequest(passFormValue);
          if(res){
              toast.success("Password changed successfully");
              passFormValue.password = ""
          }
          else{
              toast.error('Something went wrong!')
          }
      }
      else{
          toast.error("Min length 8,one num,one letter and one special character")
      }
  }

  const handleAvatar = async ()=>{
      let res = await updateAvatarRequest(avatarFormValue);
      if(res){
          toast.success("Avatar updated successfully");
          avatarFormValue.avatar ="";
      }
      else{
          toast.error("Something went wrong!")
      }
  }

    const togglePassword =()=>{
        if(passwordType==="password")
        {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    return (
        <Layout>
            <section className={" md:h-[70vh] lg:h-screen flex flex-col lg:flex-row p-10 justify-center gap-20 items-start mt-32"}>
                <div>
                    <Avatar/>
                    <label className="form-control w-full my-3 max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Update Your Avatar</span>
                        </div>
                        <input type="text" placeholder="Type here" value={avatarFormValue.avatar}
                               className="input input-bordered input-primary w-full max-w-xs"
                        onChange={(e)=>avatarFormOnChange("avatar",e.target.value)}/>
                    </label>
                    <SubmitButton onClick={handleAvatar} text={"Update"}/>

                </div>
                <div>
                    <h2 className={"font-semibold"}>Change Password</h2>
                    <label className="input my-3 input-bordered input-primary flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path fillRule="evenodd"
                                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <input type={passwordType} placeholder={"New password"} value={passFormValue.password}
                               onChange={(e) => passFormOnChange("password", e.target.value)}/>
                        <div className="input-group-btn">
                            <button className="btn bg-base-100 hover:bg-base-100 border-none btn-sm" onClick={togglePassword}>
                                {passwordType === "password" ? <FaEyeSlash /> :
                                    <FaEye />}
                            </button>
                        </div>
                    </label>
                    <SubmitButton onClick={handlePass} text={"Change"}/>
                </div>
            </section>

        </Layout>
    );
};

export default ProfilePage;
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import userStore from "../../store/userStore.js";
import Avatar from "../../components/user/Avatar.jsx";
import SubmitButton from "../../components/user/SubmitButton.jsx";
import toast from "react-hot-toast";
import validator from "../../utility/validator.js";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import profile from "../../assets/images/profile.jpeg";
import {motion} from "framer-motion";
import AvatarSkeleton from "../../skeleton/Avatar-Skeleton.jsx";

const Profile = () => {


    const [passwordType, setPasswordType] = useState("password");
    const {passFormValue,passFormOnChange,updatePassRequest,avatarFormOnChange,
        avatarFormValue,updateAvatarRequest , userInfo} = userStore();


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
        <section className={" min-h-screen flex flex-col md:flex-row lg:flex-row  items-start justify-center lg:gap-28 gap-20 lg:p-10 p-6 my-28"}>

                <div className={"flex flex-col gap-5"}>

                    {
                        userInfo === null ? (<AvatarSkeleton />): (<>
                            <div>
                                <div className="avatar">
                                    <div className=" w-28 md:w-36 lg:w-40 rounded-full">
                                        <img src={userInfo['avatar']} alt={""}/>
                                    </div>
                                </div>
                                <h2 className={"text-xl my-5 font-semibold uppercase"}>{userInfo['name']}</h2>
                            </div>
                            <div>
                                <h3 className={"font-semibold text-lg mb-2"}>Contact Info:</h3>
                                <h4 className={"text-gray-800"}><span className={"font-semibold text-primary"}>Email:</span> {userInfo['email']}</h4>
                                <h4 className={"text-gray-800"}><span className={"font-semibold text-primary"}>Mobile: </span>{userInfo['mobile']} </h4>
                            </div>
                        </>)
                    }
                </div>
            <div>

                <label className="form-control w-full my-3 max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Update Your Avatar</span>
                    </div>
                    <input type="text" placeholder="Image url" value={avatarFormValue.avatar}
                           className="input input-bordered input-primary w-full max-w-xs"
                           onChange={(e) => avatarFormOnChange("avatar", e.target.value)}/>
                </label>
                <SubmitButton onClick={handleAvatar} text={"Update"}/>

                <label className="form-control w-full my-3 max-w-xs relative">
                    <div className="label">
                        <span className="label-text font-semibold">Change Your password</span>
                    </div>
                    <input type={passwordType} placeholder="New passowrd" value={passFormValue.password}
                           className="input input-bordered input-primary w-full max-w-xs"
                           onChange={(e) => passFormOnChange("password", e.target.value)}/>
                    <div className="input-group-btn absolute right-1 top-11">
                        <button className="btn bg-base-100 hover:bg-base-100 border-none btn-sm"
                                onClick={togglePassword}>
                            {passwordType === "password" ? <FaEyeSlash/> :
                                <FaEye/>}
                        </button>
                    </div>
                </label>
                <SubmitButton onClick={handlePass} text={"Change"}/>
            </div>
        </section>
    );
};

export default Profile;
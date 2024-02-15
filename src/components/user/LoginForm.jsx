import React, {useState} from 'react';
import login from "../../assets/images/login.jpg"
import SubmitButton from "./SubmitButton.jsx";
import {Link, useNavigate} from "react-router-dom";
import validator from "../../utility/validator.js";
import toast from "react-hot-toast";
import userStore from "../../store/userStore.js";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const LoginForm = () => {
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState("password");
    const {loginFormValue,loginValueOnChange,userLoginRequest,} = userStore();

    const handleSubmit = async()=>{
        if(!validator.isEmail(loginFormValue.email) || validator.isNull(loginFormValue.email)){
            toast.error("Provide a valid email")
        }
        else if(!validator.isPassword(loginFormValue.password) || validator.isNull(loginFormValue.password)){
            toast.error("Password must contains 8 characters, at least one letter, one number and one special character")
        }
        else{
            let res = await userLoginRequest(loginFormValue);
            if(res === true){
                toast.success("logged in successfully");
                navigate('/');
                loginFormValue.email="";
                loginFormValue.password="";
            }
            else{
                toast.error("Something went wrong!")
            }
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
        <section className={"lg:min-h-screen my-20 lg:my-5 md:my-0 min-h-[80vh] flex items-center px-5 justify-center"}>

            <div className={"flex  flex-col-reverse lg:pt-20 lg:flex-row-reverse items-center" +
                "justify-center gap-10 lg:gap-20"}>

                <div className={"hidden lg:flex flex-col items-center justify-center gap-1"}>
                    <h1 className={"lg:text-3xl font-bold"}>Login your account</h1>
                    <p className={"text-gray-500"}>Nice to meet you!Login to explore the website.</p>
                    <img src={login} alt={""} className={"max-w-md w-full"}/>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">LOG IN</h2>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" value={loginFormValue.email}
                                       className="input input-bordered input-primary"
                                       onChange={(e) => loginValueOnChange("email", e.target.value)}
                                       required/>
                            </div>
                        <div className="form-control  relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passwordType} placeholder="Your password" value={loginFormValue.password}
                                   className="input input-bordered input-primary"
                                   onChange={(e) => loginValueOnChange("password", e.target.value)}
                                   required/>
                            <div className="input-group-btn absolute right-2 top-11">
                                <button className="btn bg-base-100 hover:bg-base-100 border-none btn-sm"
                                        onClick={togglePassword}>
                                    {passwordType === "password" ? <FaEyeSlash/> :
                                        <FaEye/>}
                                </button>
                            </div>
                        </div>


                        <div className="form-control mt-6">
                            <SubmitButton onClick={handleSubmit} text={"Login"}/>
                        </div>
                        <div className="form-control my-6">
                            <p>Already have an account?
                                <Link to={"/create-account"} className={"font-bold hover:text-primary hover:underline"}>
                                    Create Account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default LoginForm;
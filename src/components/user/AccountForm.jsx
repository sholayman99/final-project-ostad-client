import React from 'react';
import signup from "../../assets/images/signup.jpg"
import {Link, useNavigate} from "react-router-dom";
import userStore from "../../store/userStore.js";
import SubmitButton from "./SubmitButton.jsx";
import validator from "../../utility/validator.js";
import toast from "react-hot-toast";


const AccountForm = () => {
    const navigate = useNavigate();
    const {accountFormValue,accountFormOnChange,createAccountRequest} = userStore();


    const handleSubmit = async()=>{
       if(!validator.isEmail(accountFormValue.email) && validator.isNull(accountFormValue.email)){
           toast.error("Provide a valid email")
       }
       else if(!validator.isPassword(accountFormValue.password) && validator.isNull(accountFormValue.password)){
           toast.error("Password must contains 8 characters, at least one letter, one number and one special character")
       }
       else if(!validator.isMobile(accountFormValue.mobile) && validator.isNull(accountFormValue.mobile)){
          toast.error("Provide a valid Bangladeshi number")
       } else if(accountFormValue.avatar === ""){
           accountFormValue.avatar = 'https://i.ibb.co/7XLTDWv/user.png'
       }
       else{
           let res = await createAccountRequest(accountFormValue);
           if(res === true){
               toast.success("Created account successfully");
               navigate('/otp-verification');
           }
           else{
               toast.error("Something went wrong!")
           }
       }
    }


    return (
        <section className={"lg:min-h-screen my-20 lg:my-5 md:my-0 min-h-[80vh] flex items-center px-5 justify-center"}>

            <div className={"flex  flex-col-reverse lg:pt-20 lg:flex-row-reverse items-center" +
                "justify-center gap-10 lg:gap-20"}>

                <div className={"hidden lg:flex flex-col items-center justify-center gap-1"}>
                    <h1 className={"lg:text-3xl font-bold"}>Create an account</h1>
                    <p className={"text-gray-500"}>Nice to meet you!Enter your details to register</p>
                    <img src={signup} alt={""} className={"max-w-md w-full"} />
                </div>

                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">SIGN UP</h2>

                        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="email" placeholder="Your full name" value={accountFormValue.name}
                                       className="input input-bordered input-primary"
                                       onChange={(e) => accountFormOnChange("name", e.target.value)}
                                       required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" value={accountFormValue.email}
                                       className="input input-bordered input-primary"
                                       onChange={(e) => accountFormOnChange("email", e.target.value)}
                                       required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Your password" value={accountFormValue.password}
                                       className="input input-bordered input-primary"
                                       onChange={(e) => accountFormOnChange("password", e.target.value)}
                                       required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile</span>
                                </label>
                                <input type="text" placeholder="Your mobile num" value={accountFormValue.mobile}
                                       className="input input-bordered input-primary"
                                       onChange={(e) => accountFormOnChange("mobile", e.target.value)}
                                       required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Avatar</span>
                                </label>
                                <input type="text" placeholder="Your avatar link" value={accountFormValue.avatar}
                                       className="input input-bordered input-primary"
                                       onChange={(e) => accountFormOnChange("avatar", e.target.value)} />
                            </div>

                        </div>

                        <div className="form-control mt-6">
                            <SubmitButton onClick={handleSubmit} text={"Next"}/>
                        </div>
                        <div className="form-control my-6">
                            <p>Don't have an account?
                                <Link to={"/login"} className={"font-bold hover:text-primary hover:underline"}>
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default AccountForm;
import React from 'react';
import SubmitButton from "./SubmitButton.jsx";
import otp from "../../assets/images/otp.jpg"
import userStore from "../../store/userStore.js";
import validator from "../../utility/validator.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const OtpForm = () => {
    const navigate = useNavigate();
    const {otpFormValue,otpFormOnChange,accountVerifyRequest} = userStore();

    const handleSubmit = async()=>{
       if(validator.isEmpty(otpFormValue.otp) || validator.isNull(otpFormValue.otp)){
           toast.error("Provide a valid otp")
       }
       else{
           let res = await accountVerifyRequest(otpFormValue.otp);
           if(res === true){
               toast.success("Verified successfully");
               navigate('/login');
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
                    <h1 className={"lg:text-3xl font-bold"}>Verify Your account</h1>
                    <p className={"text-gray-500"}>Nice to meet you!Enter otp code for verification.</p>
                    <img src={otp} alt={""} className={"max-w-md w-full"}/>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">OTP VERIFICATION</h2>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Otp Code</span>
                                </label>
                                <input type="email" placeholder="Your otp number" value={otpFormValue.otp}
                                       className="input input-bordered input-primary"
                                       onChange={(e)=>otpFormOnChange("otp",e.target.value)}
                                       required/>

                        </div>

                        <div className="form-control mt-6">
                            <SubmitButton onClick={handleSubmit} text={"Submit"}/>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default OtpForm;
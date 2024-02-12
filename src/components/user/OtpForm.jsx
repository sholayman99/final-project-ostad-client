import React from 'react';
import SubmitButton from "./SubmitButton.jsx";
import otp from "../../assets/images/otp.jpg"

const OtpForm = () => {

    const handleSubmit = async()=>{

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
                                <input type="email" placeholder="Your otp number"
                                       className="input input-bordered input-primary"
                                       required/>

                        </div>

                        <div className="form-control mt-6">
                            <SubmitButton onClick={handleSubmit} text={"Next"}/>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default OtpForm;
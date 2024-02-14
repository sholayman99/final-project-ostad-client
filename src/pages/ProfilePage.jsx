import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import userStore from "../store/userStore.js";
import Avatar from "../components/user/Avatar.jsx";

const ProfilePage = () => {
   const {userInfoRequest} = userStore();
    useEffect(() => {
        (async()=>{
           await userInfoRequest();
        })()
    }, []);

    return (
        <Layout>
            <section className={" md:h-[70vh] lg:h-screen flex flex-col lg:flex-row p-10 justify-center gap-20 items-start mt-32"}>
                <div>
                    <Avatar/>
                    <label className="form-control w-full my-3 max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Update Your Avatar</span>
                        </div>
                        <input type="text" placeholder="Image url" className="input input-bordered w-full max-w-xs"/>
                    </label>
                    <button className={"btn btn-primary"}>Update</button>

                </div>
                <div>
                    <h2 className={"font-semibold"}>Change Password</h2>
                    <label className="input my-3 input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path fillRule="evenodd"
                                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <input type="text" className="grow" placeholder={"New pass"}/>
                    </label>
                    <button className={"btn btn-primary"}>Change</button>
                </div>
            </section>

        </Layout>
    );
};

export default ProfilePage;
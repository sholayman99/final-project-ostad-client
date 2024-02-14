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
            <Avatar />
        </Layout>
    );
};

export default ProfilePage;
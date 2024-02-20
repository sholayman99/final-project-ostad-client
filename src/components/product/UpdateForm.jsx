import React, {useEffect, useState} from 'react';
import ProductSubmitBtn from "./ProductSubmitBtn.jsx";
import productStore from "../../store/productStore.js";
import FormSkeleton from "../../skeleton/Form-Skeleton.jsx";
import toast from "react-hot-toast";
import {useParams} from "react-router-dom";
import UpdateModal from "./UpdateModal.jsx";
import Loader from "../layout/Loader.jsx";

const UpdateForm = () => {
    const [formData, setFormData] = useState({productName: "",image: "",brandID: "", categoryID: "",
        des: ""});
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const {id} = useParams();

    const {updateProductRequest,brandList,categoryList,
        singleProductRequest,singleProduct} = productStore();


    useEffect(() => {
        (async()=>{
            singleProduct === null ? await singleProductRequest(id) : null ;
            setFormData({
                productName: singleProduct['productName'],image:singleProduct['image'],brandID:singleProduct['brandID'] ,
                categoryID:singleProduct['categoryID'], des: singleProduct['des']
            })
        })()
    }, [id]);


    const updateFormOnChange = (key, value) => {
        setFormData((formData) => ({
            ...formData,
            [key]: value,
        }));
    };
    const handleSubmit = async ()=>{
             setIsDeleteModalOpen(true)

         }

         const onUpdate =async ()=>{
           await handleSubmit();
           setIsDeleteModalOpen(false);
             let res = await updateProductRequest(formData,id);
             if(res){
                 toast.success("Updated successfully");
             }
             else{
                 toast.error("Something went wrong!");
             }
         }

    if(singleProduct === null){
        return <Loader />
    }
    else{
        return (
            <section className={"flex justify-center mt-10 items-center lg:min-h-screen md:min-h-[70vh] min-h-screen"}>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">UPDATE PRODUCT</h2>

                        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="XYZ 420..." value={formData.productName}
                                       className="input input-bordered input-primary"
                                       onChange={(e) => updateFormOnChange("productName", e.target.value)}
                                       required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="https://abc" value={formData.image}
                                       className="input input-bordered input-primary"
                                       onChange={(e) => updateFormOnChange("image", e.target.value)}
                                       required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand</span>
                                </label>
                                <select className="select select-primary  w-full max-w-xs" value={formData.brandID}
                                        onChange={(e) => updateFormOnChange("brandID", e.target.value)}>
                                    <option disabled value={""}> Select Brand</option>
                                    {
                                        brandList !== null ? (
                                            brandList.map((item, i) => {
                                                return (
                                                    <option value={item['_id']} key={i}>{item['brandName']}</option>
                                                )
                                            })
                                        ) : (
                                            <option>No brand</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select className="select select-primary  w-full max-w-xs" value={formData.categoryID}
                                        onChange={(e) => updateFormOnChange("categoryID", e.target.value)}>
                                    <option disabled value={""}>Select Category</option>
                                    {
                                        categoryList !== null ? (
                                            categoryList.map((item, i) => {
                                                return (
                                                    <option key={i} value={item['_id']}>{item['categoryName']}</option>
                                                )
                                            })
                                        ) : (
                                            <option>No brand</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="textarea textarea-primary" value={formData.des}
                                          onChange={(e) => updateFormOnChange("des", e.target.value)}
                                          placeholder="lorem ipsum......."></textarea>
                            </div>

                        </div>

                        <div className="form-control mt-6">
                            <ProductSubmitBtn onClick={handleSubmit} text={"Update"}/>
                        </div>

                    </div>
                </div>
              <UpdateModal onUpdate={onUpdate} isOpen={isDeleteModalOpen}
                           onClose={() => setIsDeleteModalOpen(false)}  />
            </section>
        );

    }
};

export default UpdateForm;
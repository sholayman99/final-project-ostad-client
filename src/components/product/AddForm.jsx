import React, {useEffect} from 'react';
import productStore from "../../store/productStore.js";
import ProductSubmitBtn from "./ProductSubmitBtn.jsx";
import toast from "react-hot-toast";

const AddForm = () => {

    const {addProductRequest,addFormValue,addFormOnChange,brandList,
        brandListRequest,categoryList,categoryListRequest} = productStore();

    const handleSubmit = async ()=>{

         let res = await addProductRequest(addFormValue);
         if(res){
             toast.success("Added successfully");
             addFormValue.productName="";
             addFormValue.image="";
             addFormValue.brandID="";
             addFormValue.categoryID="";
             addFormValue.des="";
         }
         else{
             toast.error("Something went wrong!");
             addFormValue.productName="";
             addFormValue.image="";
             addFormValue.brandID="";
             addFormValue.categoryID="";
             addFormValue.des="";
         }
    }

    useEffect(() => {
        (async ()=>{
            brandList === null ?await brandListRequest():null;
            categoryList === null?await categoryListRequest():null;

        })()
    }, []);

    return (
        <section className={"flex justify-center mt-10 items-center lg:min-h-screen md:min-h-[70vh] min-h-screen"}>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">ADD A NEW PRODUCT</h2>

                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="email" placeholder="XYZ 420..." value={addFormValue.productName}
                                   className="input input-bordered input-primary"
                                   onFocus={(e) => addFormOnChange("productName", e.target.value)}
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="email" placeholder="https://abc" value={addFormValue.image}
                                   className="input input-bordered input-primary"
                                   onFocus={(e) => addFormOnChange("image", e.target.value)}
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <select value={addFormValue.brandID} className="select select-primary  w-full max-w-xs"
                                    onFocus={(e) => addFormOnChange("brandID", e.target.value)}>
                                <option disabled selected> Select Brand</option>
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
                            <select value={addFormValue.categoryID} className="select select-primary  w-full max-w-xs"
                                    onFocus={(e) => addFormOnChange("categoryID", e.target.value)}>
                                <option disabled selected>Select Category</option>
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
                            <textarea className="textarea textarea-primary" value={addFormValue.des}
                                      onFocus={(e) => addFormOnChange("des", e.target.value)}
                                      placeholder="lorem ipsum......."></textarea>
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <ProductSubmitBtn onClick={handleSubmit} text={"Add"}/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddForm;
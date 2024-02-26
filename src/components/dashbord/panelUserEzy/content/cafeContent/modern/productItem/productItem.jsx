import { IoPricetagsOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { PiGooglePhotosLogoLight } from "react-icons/pi";
import { useState } from "react";
import pizza from "../../../../../../../assets/images/panelFile/cafeRestaurantBlook/pizza.jpg"
import { Modal } from "@mui/material";
const ProductItem = () => {
    const [photoProduct, setPhotoProduct] = useState(false)
    return (
        <>
            <li className="list-group-item bg-white shadow-lg border border-secondary rounded-2 my-2">
                <div className="row d-flex justify-content-between align-items-center px-2">
                    <div className="col">
                        <h6 className="m-0">Espresso</h6>
                    </div>
                    <div className="col-3 p-0 text-end">
                        <span className="badge badge-primary text-black border border-primary d-flex justify-content-center align-items-center">
                            <IoPricetagsOutline size={18} className="me-1 text-primary" />12 $
                        </span>
                    </div>
                </div>
                <div className="row mt-1">
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </div>
                <div dir="ltr" className="row d-flex justify-content-end pe-5 pe-sm-4 align-items-center">
                    <div className="col-3 text-end p-0 pe-md-3 d-flex justify-content-around align-items-center">
                        <button onClick={(e) => {
                            e.stopPropagation()
                            setPhotoProduct(true)
                        }} className="btn p-0 py-1 mx-1 ">
                            <span className="badge bg-white text-primary d-flex justify-content-center align-items-center py-0 px-1">
                                <PiGooglePhotosLogoLight size={18} /> Photo
                            </span>
                        </button>
                        <button className="btn  mx-1 border-primary p-0 py-1">
                            <span className="badge bg-white text-primary d-flex justify-content-center align-items-center py-0 px-1">
                                <CiTimer size={18} /> 10 min
                            </span>
                        </button>
                    </div>
                </div>
            </li>
            <Modal
                open={photoProduct}
                onClose={() => setPhotoProduct(false)}
                style={{ backgroundColor: 'rgba(0,0,0,0.50)', height: "100vh" }}
                className="d-flex justify-content-center align-items-center"
            >
                <div onClick={()=>setPhotoProduct(false)} className="container-sm">
                    <div className="row">
                        <div className="col text-center">
                            <img src={pizza} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default ProductItem
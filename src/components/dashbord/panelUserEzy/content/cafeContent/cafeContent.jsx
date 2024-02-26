import { useEffect, useState } from "react";
import DragDropIcon from "../../dragdropIcon/dragDropIcon";
import styled from "./cafecontent.module.css";
import { IoCafeOutline } from "react-icons/io5";
import ModalCafeRestaurant from "../../blooks/blooksetting/caferestaurant/modalCafeRestaurant";
const CafeContent = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <div onClick={() => setMenu(true)} className="container rounded-5 position-relative mt-3 mb-5 p-3">
                <DragDropIcon />
                <div className="row d-flex justify-content-center align-items-center p-2">
                    <div className="col-7 col-sm-5 col-md-5 col-lg-4 col-xl-3  text-start">
                        <h6 className={` ${styled.title_cafe} mb-0 fs-2`}>Cafe</h6>
                    </div>
                    <div className="col-2 col-lg-1 text-end">
                        <IoCafeOutline size={28} />
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center p-2">
                    <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-5">
                        <ul className="list-group rounded-4">
                            <li className="list-group-item d-flex justify-content-between align-items-top  border-0">
                                <div className="d-flex flex-column align-items-start">
                                    <p className={` ${styled.title_item} mb-0 fw-bold fs-3 w-100`}>Espresso</p>
                                    <span className={` ${styled.descripe_item} `}>Single short espresso</span>
                                </div>

                                <span className="badge text-white bg-primary badge-primary badge-pill d-flex justify-content-center align-items-center" style={{ height: '25px' }}> $ 13.000</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-top  border-0">
                                <div className="d-flex flex-column align-items-start">
                                    <p className={` ${styled.title_item} mb-0 fw-bold fs-3 w-100`}>Title</p>
                                    <span className={` ${styled.descripe_item} `}>Single short espresso</span>
                                </div>

                                <span className="badge text-white bg-primary badge-primary badge-pill d-flex justify-content-center align-items-center" style={{ height: '25px' }}> $ 23.000</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-top  border-0">
                                <div className="d-flex flex-column align-items-start">
                                    <p className={` ${styled.title_item} mb-0 fw-bold fs-3 w-100`}>Title</p>
                                    <span className={` ${styled.descripe_item} `}>Single short espresso</span>
                                </div>

                                <span className="badge text-white bg-primary badge-primary badge-pill d-flex justify-content-center align-items-center" style={{ height: '25px' }}> $ 13.000</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <ModalCafeRestaurant
                setClose={setMenu}
                open={menu}
                titleValue="کافه رستوران"
            />
        </>
    )
}
export default CafeContent
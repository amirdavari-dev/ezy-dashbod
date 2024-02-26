import DragDropIcon from "../../dragdropIcon/dragDropIcon"
import styled from "./informationuser.module.css"
import bg from "../../../../../assets/images/vectore/signinup.png"
import { useEffect, useState } from "react"
const Informationuser = () => {
    // const [drag,setDrag]=useState(false)
    // useEffect(()=>{
    //     console.log("dragged");
    // },[drag])
    return (
        <div className="container position-relative mb-5">
            <DragDropIcon pinActive={true}  />
            <div className="row d-flex justify-content-center align-items-center mt-3 z-4">
                <div className="col-10 col-sm-6 col-md-6 col-lg-5 col-xl-5 card text-center">
                    <img src={bg} alt="ezy" className="card-img-top" height={150} />
                    <div className={` ${styled.cardBody} card-body pt-0`}>
                        <img src={bg} alt="ezyy" width={70} height={70} className="rounded-circle" />
                        <h6 className={` ${styled.title} card-title mt-2 mb-0`}>Amir Davari</h6>
                        <p className={` ${styled.text} card-text`}>i'm from iran</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Informationuser
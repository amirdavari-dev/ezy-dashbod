import { GrRestaurant } from "react-icons/gr";
import styled from "./blook.module.css"
import { useContext } from "react";
import { ModalStepContext } from "../modalContextAPI/modalBlookContextAPI";

const Blook = ({ label, desc, keyId }) => {
    const { dispatchBlooks } = useContext(ModalStepContext)
    return (
        <>
            <div className="row m-2 bg-white rounded-3 overflow-hidden">
                <button onClick={() => {
                    dispatchBlooks({ type: "CAFE_RESTAURANT" })
                }} className="btn border-0 bg-white d-flex justify-content-center align-items-center p-3">
                    <div className="col-11 text-end pe-2">
                        <h6 className={` ${styled.title_blook} card-title mb-0`}>{label}</h6>
                        <p className={` ${styled.text_blook} card-text`}>{desc}</p>
                    </div>
                    <div className="col-1">
                        <GrRestaurant size={30} className="text-info" />
                    </div>
                </button>
            </div>


        </>
    )
}
export default Blook
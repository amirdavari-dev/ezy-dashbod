import { useContext } from "react"
import styled from "./menucaferestaurant.module.css"
import { ModalStepContext } from "../../../modalContextAPI/modalBlookContextAPI"
const MenuCafeRestaurant = ({ setModalCafe }) => {
    const { cafeDispatch } = useContext(ModalStepContext)
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center mb-4">

                <div className="col-5 col-sm-4 col-lg-4 bg-white shadow border p-0 rounded-3 m-1">
                    <button onClick={() => {
                        cafeDispatch({ type: "MODERN" })
                        setModalCafe(false)
                    }}
                        className={` ${styled.btn_item} btn border-0 w-100 px-2 py-3`}>Modern</button>
                </div>
                <div className="col-5 col-sm-4 col-lg-4 bg-white shadow border p-0 rounded-3 m-1">
                    <button onClick={() => {
                        cafeDispatch({ type: "CLASSIC" })
                        setModalCafe(false)
                    }}
                        className={` ${styled.classicTag} btn border-0 w-100 px-2 py-3 text-white`}>Classic</button>
                </div>
                <div className="col-5 col-sm-4 col-lg-4 bg-white shadow border p-0 rounded-3 m-1">
                    <button onClick={() => {
                        cafeDispatch({type : "PRICE_LIST"})
                        setModalCafe(false)
                    }}
                        className={` ${styled.btn_item} btn border-0 w-100 px-2 py-3`}>Price List</button>
                </div>
                <div className="col-5 col-sm-4 col-lg-4 bg-white shadow border p-0 rounded-3 m-1">
                    <button
                        className={` ${styled.btn_item} btn border-0 w-100 px-2 py-3`}>Empty</button>
                </div>

            </div>
        </div>
    )
}
export default MenuCafeRestaurant
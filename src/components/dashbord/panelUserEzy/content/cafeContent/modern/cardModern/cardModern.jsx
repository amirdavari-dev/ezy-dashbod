import { useContext } from "react"
import styled from "../moderncafe.module.css"
import cardStyle from "./cardmodern.module.css"
import { ModalStepContext } from "../../../../modalContextAPI/modalBlookContextAPI"

const CardModern = ({ src, title }) => {
    const { activePreview } = useContext(ModalStepContext)
    return (
        <div className={`col-5 col-sm-4 col-md-3 ${activePreview ? "col-lg-3 col-xl-3 col-xxl-3" : " col-lg-2 col-xl-2 col-xxl-2"}`}>
            <button onClick={(e)=>{
                e.stopPropagation()
            }} className="btn border-0 p-0 m-0 w-100 h-100">
                <div className={` ${cardStyle.cardParent} card rounded-3 position-relative p-0`}>
                    <img src={src} className={` ${cardStyle.imgBgCard} card-img m-0`} height={100} width={120} />
                    <div className={` ${cardStyle.childCard} card-body p-1 rounded-3 position-absolute`}>
                        <h6 className={` ${styled.title_card} card-text fw-bold`}>{title}</h6>
                    </div>
                </div>

            </button>
        </div>

    )
}
export default CardModern
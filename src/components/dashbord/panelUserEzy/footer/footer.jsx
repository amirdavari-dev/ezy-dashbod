import { FaPlus } from "react-icons/fa6"
import styled from "./footer.module.css"
import ModalBox from "../../modalbox/modalbox"
import { useContext, useEffect, useState } from "react"
import { FaRegEye } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import Blooks from "../blooks/blooks"
import { ModalStepContext } from "../modalContextAPI/modalBlookContextAPI";
import Content from "../content/content";


const Footer = () => {
    const [blook, setBlook] = useState(false)
    const [titleBlook, setTitleBlook] = useState('')

    const [preview, setPreview] = useState(false)
    // context id
    const { blooksShow, cafeDispatch, dispatchBlooks ,setActivePreview} = useContext(ModalStepContext)
    useEffect(() => {
        blooksShow === "MAIN" && cafeDispatch({ type: "MAIN" })
        setBlook(false)
    }, [blooksShow])
    useEffect(() => {
        !blook && dispatchBlooks({ type: "DEFAULT" })
    }, [blook])
    // responsive preview content
    useEffect(() => {
        preview ? setActivePreview(true) : setActivePreview(false)
    }, [preview])
    return (
        <>
            <div className={` ${styled.parentFooter} row w-100 position-fixed bottom-0 justify-content-center align-items-center`}>
                <div className="d-flex justify-content-center align-items-center py-2 col col-sm-10 col-md-8 col-lg-6 col-xl-7">
                    <div className="col-4 text-center">
                        <button onClick={() => setPreview(true)} className="btn border-0 p-2 text-white">
                            <FaRegEye size={24} />
                        </button>
                    </div>
                    <div className={`col-4 text-center ${styled.plusBtn} `}>
                        <button onClick={() => {
                            setBlook(true)
                            setTitleBlook('اضافه کردن بلوک')
                        }} className="btn border-0 p-3 rounded-4 shadow-sm text-white">
                            <FaPlus size={30} />
                        </button>
                    </div>
                    <div className="col-4 text-center">
                        <button className="btn border-0 p-2 text-white">
                            <IoSettings size={24} />
                        </button>
                    </div>
                </div>
            </div>
            {/* show blooks box */}
            <ModalBox open={blook} close={setBlook} titleValue="اضافه کردن بلوک">
                {
                    blooksShow
                }
            </ModalBox>
            {/* show preview modl box */}
            <ModalBox open={preview} close={setPreview} titleValue="پیش نمایش">
                <Content />
            </ModalBox>

        </>

    )
}
export default Footer
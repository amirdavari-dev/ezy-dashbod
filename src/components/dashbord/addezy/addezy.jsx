import { useState } from "react"
import styled from "./addezy.module.css"
import { FaPlus } from "react-icons/fa6"
import ModalBox from "../modalbox/modalbox"
import AddEzyContent from "./addEzyContent"
const Addezy = () => {
    const [add, setAdd] = useState(false)
    const [titleAdd, setTitleAdd] = useState('')
    return (
        <>
            <button onClick={() => {
                setAdd(true)
                setTitleAdd('اضافه کردن ایزی')
            }} className={`btn border-0 position-fixed rounded-circle p-4 bottom-md-0 end-md-0 translation-middle text-white ${styled.btn_add}`}>
                <FaPlus size={24} />
            </button>
            {/* show add Box */}
            <ModalBox open={add} close={setAdd} titleValue={titleAdd} >
                <AddEzyContent />
            </ModalBox>
        </>
    )
}
export default Addezy
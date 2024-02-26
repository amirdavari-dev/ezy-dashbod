import { useEffect, useState } from "react"
import styled from "./linkezy.module.css"
import Alertmessage from "../../alertMessage/alertmessage"
import { MdContentCopy, MdOutlineVerifiedUser } from "react-icons/md"
import { IoShareSocialOutline } from "react-icons/io5"
import Share from "../../shareEzy/share"
import ModalBox from "../../modalbox/modalbox"
import { useParams } from "react-router-dom"

const Linkezy = ({ bgBackdrop = false, colorBackdrop = false, shopStatus, handleIdUser }) => {
    const { userId } = useParams()
    // show alert message
    const [alert, setAlert] = useState(false)
    const [labelAlert, setLabelAlert] = useState('')
    // show share box
    const [share, setShare] = useState(false)
    const [titleShare, setTitleShare] = useState('')
    const [id, setId] = useState('')
    useEffect(() => {
        bgBackdrop ? setId(userId) : setId('Amir')
    }, [])
    useEffect(() => {
        !bgBackdrop && handleIdUser(id)
    }, [id])
    return (
        <>
            <div className={` ${!bgBackdrop ? styled.parent : styled.parent_link_active} row my-0 p-1 mx-1 rounded-3 justify-content-center align-items-center border`}>
                <div className="col-2 d-flex justify-content-center pe-1 ps-0">
                    <button onClick={() => {
                        setAlert(true)
                        setLabelAlert('لینک شما کپی شد')
                    }} className={` ${!colorBackdrop ? styled.link_btn : styled.link_btn_active} btn border-0 p-1`}>
                        <MdContentCopy size={16} />
                    </button>
                    <button onClick={() => {
                        setShare((curr) => !curr)
                        setTitleShare('اشتراک گذاری ایزی لینک')
                    }} className={` ${!colorBackdrop ? styled.link_btn : styled.link_btn_active} btn border-0 p-1`}>
                        <IoShareSocialOutline size={16} />
                    </button>
                </div>
                <div className="col-9 ps-1 d-flex justify-content-start align-items-center border-start">
                    <p className={` ${styled.link_content} m-0 fw-bold`}>{shopStatus ? `ezy.company/${id}/shop` : `ezy.company/${id}`}</p>
                </div>
                <div className={` ${!colorBackdrop ? styled.verify_color : styled.link_btn_active} col-1 ps-1`}>
                    <MdOutlineVerifiedUser />
                </div>
            </div>
            {/* show box alert */}
            {alert && (<Alertmessage timeOut={setAlert} label={labelAlert} left={30} bottom={60} />)}
            {/* show share box */}
            {
                share && <ModalBox open={share} close={setShare} titleValue={titleShare}>
                    <Share />
                </ModalBox>
            }
        </>
    )
}
export default Linkezy
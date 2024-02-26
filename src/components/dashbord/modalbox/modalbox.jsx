import { Modal } from "@mui/material"
import Navbar from "./navbar"
import styled from "./modalbox.module.css"
const ModalBox = ({ children, open, close, titleValue }) => {
    return (
        <Modal
            open={open}
            onClose={() => close(false)}
            style={{ backgroundColor: 'rgba(0,0,0,0.50)', height: "100vh" }}
            className="d-flex align-items-center justify-content-end justify-content-sm-center "
        >
            <div data-aos="fade-up" className={` ${styled.modalContent} container bg-white rounded-4 overflow-y-scroll position-relative`}>
                <Navbar closeBtn={close} titleValue={titleValue} />
                <div style={{ backgroundColor: 'rgb(240,240,240)' }} className="row">
                    {children}
                </div>
            </div>
        </Modal>
    )
}
export default ModalBox
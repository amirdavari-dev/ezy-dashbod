import { useRef, useState } from "react"
import ezyicon from "../../../assets/images/icon/logoezy.svg"
import styled from "./navbar.module.css"
import Userinfo from "../userinfo/userinfo"
import { Popover } from "@mui/material"
import { IoPersonAddOutline } from "react-icons/io5"

const Navbar = ({ vip, titlePage, userInfo, panelTop=false }) => {
    const btnBox = useRef(null)
    const [boxInfo, setBoxInfo] = useState(false)
    return (
        <>
            <nav className={`navbar navbar-white border-bottom p-0 w-100 ${!panelTop ? 'position-fixed top-0' : ''}`}>
                <div className="container-fluid p-0">
                    <div className="row w-100 m-0 d-md-flex flex-md-row-reverse bg-white p-2 p-md-3">
                        <div className="col-12 col-md-4 text-center p-0 ">
                            <img src={ezyicon} className="d-inline-block" alt="ezy" />
                        </div>
                        <div className="col-12 col-md-8 d-flex justify-content-start align-items-center  ps-md-5 pt-2 pt-md-0">

                            <div className="col-4 col-md-12 d-flex justify-content-start align-items-center">
                                {userInfo &&
                                    <button ref={btnBox} onClick={() => {
                                        setBoxInfo((curr) => !curr)
                                    }} className="btn border-0 me-2 p-0">
                                        <IoPersonAddOutline size={20} className="text-secondary" />
                                    </button>
                                }
                                {vip &&
                                    <button type="button" className={` ${styled.vip_btn} btn border-0 px-1 py-2`}>خرید اشتراک</button>
                                }
                            </div>
                            {titlePage &&
                                <div className="col-4 d-md-none text-center">
                                    <h6 className={` ${styled.title_page} overflow-hidden flex-nowrap m-0 fw-bold`}>داشبورد</h6>
                                </div>
                            }
                            <div className="col-4 d-md-none"></div>
                        </div>
                    </div>
                </div>
            </nav>
            <Popover
                open={boxInfo}
                onClose={() => setBoxInfo(false)}
                anchorEl={btnBox.current}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Userinfo />
            </Popover>
        </>
    )
}
export default Navbar
import { NavLink } from "react-router-dom"
import styled from "./menuhamb.module.css"
import menuList from "../../../pages/home/menulist"
import { Modal } from "@mui/material"
import Closebtn from "../../closeBtn/closebtn"
const Menuhamb = (props) => {

    return (
        <Modal
            open={props.show}
            onClose={() => props.closeValue((curr) => !curr)}
            className="d-flex justify-content-end"
        >
            <div data-aos="fade-left" className={` ${styled.menu} col-8 col-sm-5 col-md-4 bg-white`}>
                <div className="container-fluid m-0">
                    <div className="row ps-2 pt-2">
                        <div className="col position-relative">
                            <Closebtn closeValue={props.closeValue} />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <ul className="list-group p-3 d-flex align-items-end flex-column-reverse">
                            {menuList.map((item) => {
                                return <li key={item.title} className="list-group-item my-1 col-10 rounded-3 text-end p-0">
                                    <NavLink to={item.path} style={({ isActive }) => ({
                                        color: isActive ? "#34B7F1" : "black",
                                        borderBottom: isActive ? "0.2rem solid #34B7F1" : "none",
                                        fontFamily: 'sansSmall'
                                    })} className={` ${styled.link_menu} fw-bolder h-100 p-2 d-inline-block`}>{item.title}</NavLink>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </Modal>
    )
}
export default Menuhamb
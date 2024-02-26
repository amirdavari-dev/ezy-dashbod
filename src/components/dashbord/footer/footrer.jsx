import { NavLink, Outlet } from "react-router-dom"
import styled from "./footer.module.css"
import { useState } from "react"
import { Modal } from "@mui/material"
import { IoIosArrowBack } from "react-icons/io"
import { IoHomeOutline } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Footer = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            {/* open manu more than 770 px => md bootstrap */}
            <button onClick={() => setMenu((curr) => !curr)} className={` ${styled.btn_menu} btn border-0 d-none position-fixed end-0 p-2 pe-1 d-md-flex justify-content-md-center align-items-md-center`}>
                <IoIosArrowBack className="text-white" size={20} />
            </button>
            <Modal
                open={menu}
                onClose={() => setMenu((curr) => !curr)}
                style={{ backgroundColor: 'rgba(0,0,0,0.50)' }}
            >
                <footer data-aos="fade-left" className={` ${styled.footer} w-100 position-fixed bottom-0 end-0 bg-white border d-md-flex justify-content-md-center`}>
                    <button onClick={() => setMenu((curr) => !curr)} className={` ${styled.close_btn} btn border-0 d-none position-absolute start-0 top-0 rounded-0 bg-white text-black p-2 d-md-flex justify-content-md-center align-items-md-center`}>
                        <AiOutlineCloseCircle size={2} />
                    </button>
                    <ul className="nav flex-md-nowrap justify-content-center flex-md-column flex-md-column-reverse">
                        <li className="nav-item mx-2 my-md-1 m-md-0">
                            <NavLink to="statistics" style={({ isActive }) => ({
                                color: isActive ? "#34B7F1" : "black",
                                borderRight: isActive ? "0.2rem solid #34B7F1" : "none",
                                fontFamily: 'sansSmall'
                            })} className="nav-link px-md-4">
                                <div className="row">
                                    <div className="col-md-10 d-none d-md-block text-md-end">
                                        گزارش آماری
                                    </div>
                                    <div className="col-12 col-md-2">
                                        <FaChartSimple size={22} />
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2 my-md-1 m-md-0">
                            <NavLink to="orders" style={({ isActive }) => ({
                                color: isActive ? "#34B7F1" : "black",
                                borderRight: isActive ? "0.2rem solid #34B7F1" : "none",
                                fontFamily: 'sansSmall'
                            })} className="nav-link px-md-4">
                                <div className="row">
                                    <div className="col-md-10 d-none d-md-block text-md-end">
                                        سفارشات مشتری
                                    </div>
                                    <div className="col-12 col-md-2">
                                        <CiShoppingCart size={20} />
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2 my-md-1 m-md-0">
                            <NavLink to="wallet" style={({ isActive }) => ({
                                color: isActive ? "#34B7F1" : "black",
                                borderRight: isActive ? "0.2rem solid #34B7F1" : "none",
                                fontFamily: 'sansSmall'
                            })} className="nav-link px-md-4">
                                <div className="row">
                                    <div className="col-md-10 d-none d-md-block text-md-end">
                                        حساب ایزی پی
                                    </div>
                                    <div className="col-12 col-md-2">
                                        <IoWalletOutline size={20} />
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2 my-md-1 m-md-0">
                            <NavLink to="/dashbord" style={({ isActive }) => ({
                                color: isActive ? "#34B7F1" : "black",
                                borderRight: isActive ? "0.2rem solid #34B7F1" : "none",
                                fontFamily: 'sansSmall'
                            })} className="nav-link px-md-4">
                                <div className="row">
                                    <div className="col-md-10 d-none d-md-block text-md-end">
                                        داشبورد
                                    </div>
                                    <div className="col-12 col-md-2">
                                        <IoHomeOutline size={20} />
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                    </ul>

                </footer>
            </Modal>
            <footer className={` ${styled.footer} w-100 position-fixed bottom-0 end-0 bg-white border d-md-none pt-1 shadow`}>
                <ul className="nav flex-md-nowrap justify-content-center flex-md-column flex-md-column-reverse">
                    <li className="nav-item mx-2 m-md-0">
                        <NavLink to="statistics" style={({ isActive }) => ({
                            color: isActive ? "#34B7F1" : "black",
                            borderBottom: isActive ? "0.2rem solid #34B7F1" : "none",
                            fontFamily: 'sansSmall'
                        })} className="nav-link px-md-1">
                            <div className="row">
                                <div className="col-md-10 d-none d-md-block text-md-end">
                                    گزارش آماری
                                </div>
                                <div className="col-12 col-md-2">
                                    <FaChartSimple size={20} />
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="nav-item mx-2 m-md-0">
                        <NavLink to="orders" style={({ isActive }) => ({
                            color: isActive ? "#34B7F1" : "black",
                            borderBottom: isActive ? "0.2rem solid #34B7F1" : "none",
                            fontFamily: 'sansSmall'
                        })} className="nav-link px-md-1">
                            <div className="row">
                                <div className="col-md-10 d-none d-md-block text-md-end">
                                    سفارشات مشتری
                                </div>
                                <div className="col-12 col-md-2">
                                    <CiShoppingCart size={20} />
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="nav-item mx-2 m-md-0">
                        <NavLink to="wallet" style={({ isActive }) => ({
                            color: isActive ? "#34B7F1" : "black",
                            borderBottom: isActive ? "0.2rem solid #34B7F1" : "none",
                            fontFamily: 'sansSmall'
                        })} className="nav-link px-md-1">
                            <div className="row">
                                <div className="col-md-10 d-none d-md-block text-md-end">
                                    حساب ایزی پی
                                </div>
                                <div className="col-12 col-md-2">
                                    <IoWalletOutline size={20} />
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="nav-item mx-2 m-md-0">
                        <NavLink to="/dashbord" style={({ isActive }) => ({
                            color: isActive ? "#34B7F1" : "black",
                            borderBottom: isActive ? "0.2rem solid #34B7F1" : "none",
                            fontFamily: 'sansSmall'
                        })} className="nav-link px-md-1">
                            <div className="row">
                                <div className="col-md-10 d-none d-md-block text-md-end">
                                    داشبورد
                                </div>
                                <div className="col-12 col-md-2">
                                    <IoHomeOutline size={20} />
                                </div>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </footer>
            <Outlet />

        </>
    )
}
export default Footer
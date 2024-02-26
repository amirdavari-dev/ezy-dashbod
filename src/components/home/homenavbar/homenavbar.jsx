import { Link, NavLink, Outlet } from "react-router-dom"
import ezyicon from "./../../../assets/images/icon/logoezy.svg"
import styled from './homenavbar.module.css'
import { useState } from "react"
import menuList from "../../../pages/home/menulist"
import Menuhamb from "../hambmenu/menuhamb"
import { RxHamburgerMenu } from "react-icons/rx"
const Homenavbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <nav className="navbar bg-white p-3 px-1 d-flex justify-content-between align-items-center w-100 position-sticky top-0 border-bottom">
                {/* btn hamb */}
                <div className="col d-xl-none text-start">
                    <button onClick={() => {
                        setMenu(true)
                    }} className="btn border-0 px-2 py-1 bg-light shadow">
                        <RxHamburgerMenu size={25} />
                    </button>
                </div>
                <div className="col col-xxl-3 p-0 ps-xl-3 text-center text-xl-start">
                    <img src={ezyicon} alt="Ezy Icon" />
                </div>
                {/* 1200px list menu */}
                <div className="d-none d-xl-block col-xxl-6">
                    <ul style={{ listStyle: 'none' }} className="d-flex justify-content-center align-items-center p-0 m-0">
                        {menuList.map((item) => {
                            return <li key={item.title} className="mx-2 text-center">
                                <NavLink to={item.path} style={({ isActive }) => ({
                                    color: isActive ? "#34B7F1" : "black",
                                    borderBottom: isActive ? "0.2rem solid #34B7F1" : "none",
                                    fontFamily: 'sansSmall'
                                })} className={` ${styled.link_menu} nav-link fw-bolder d-block px-3 py-2 fs-5`}>{item.title}</NavLink>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="col col-xxl-3 d-flex justify-content-end">
                    <button className="btn col col-md-3 col-xl-2 p-0 border-0 rounded-2 overflow-hidden mx-1" style={{ backgroundColor: '#F1D334' }}>
                        <Link to="/user" target="_blank" dir="rtl" className={` ${styled.link_url} d-block p-2 text-black fw-bold`}>ورود</Link>
                    </button>
                    <button className="btn col col-md-3 col-xl-2 p-0 border-0 rounded-2 overflow-hidden mx-1" style={{ backgroundColor: '#F1D334' }}>
                        <Link to="/user/register" target="_blank" dir="rtl" className={` ${styled.link_url} d-block p-2 text-black fw-bold`}>ثبت نام</Link>
                    </button>
                    {/* dashbord btn box */}
                    {/* <button className="btn col-8 col-md-3 col-xl-2 p-0 border-0 rounded-2 overflow-hidden mx-1" style={{ backgroundColor: '#F1D334' }}>
                        <Link to="/dashbord" target="_blank" dir="rtl" className={` ${styled.link_url} d-block p-2 text-black fw-bold w-100`}>داشبورد</Link>
                    </button> */}
                </div>
            </nav>

            {/* hambur menu */}

            <Menuhamb show={menu} closeValue={setMenu} />
            <Outlet />

        </>
    )
}
export default Homenavbar
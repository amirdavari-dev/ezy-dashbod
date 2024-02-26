import Closebtn from "../../closeBtn/closebtn"
import styled from "./navbar.module.css"
const Navbar = ({ closeBtn ,titleValue }) => {
    return (
        <div className="row position-sticky top-0 p-2 border-bottom bg-white shadow-sm z-1">
            <Closebtn closeValue={closeBtn} />
            <p className={` ${styled.title} w-100 col-12 text-center mb-0 fw-bold`}>{titleValue}</p>
        </div>
    )
}
export default Navbar
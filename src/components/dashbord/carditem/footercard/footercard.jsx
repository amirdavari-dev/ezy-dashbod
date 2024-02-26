import { Link } from "react-router-dom"
import styled from "./footercard.module.css"
import { FaRegEye } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi"
import { FaChartSimple } from "react-icons/fa6";
const Footercard = ({ statisStatus = true, userId }) => {
    const colorIcon = "rgb(52, 183, 241)"
    return (
        <div className="row my-2 mt-3 p-2 border mx-4 rounded-5 bg-white shadow">
            <div className={`px-0 ${statisStatus ? "col-4" : "col-6"}`}>
                <Link to={`ezy/${userId}`} target="_blank" className="d-block w-100 d-flex align-items-center flex-column justify-content-center">
                    <FiEdit2 style={{ color: colorIcon }} size={19} />
                    <span className={`${styled.span_label} fw-bold mt-1`}>ویرایش</span>
                </Link>
            </div>
            <div className={`px-0 ${statisStatus ? "col-4" : "col-6"}`}>
                <Link className="d-block w-100 d-flex align-items-center flex-column justify-content-center">
                    <FaRegEye style={{ color: colorIcon }} size={19} />
                    <span className={`${styled.span_label} fw-bold mt-1`}>نمایش</span>
                </Link>
            </div>
            {statisStatus &&
                <div className="col-4 px-0">
                    <Link className="d-block w-100 d-flex align-items-center flex-column justify-content-center">
                        <FaChartSimple style={{ color: colorIcon }} size={19} />
                        <span className={`${styled.span_label} fw-bold mt-1`}>گزارش آماری</span>
                    </Link>
                </div>
            }
        </div>
    )
}
export default Footercard
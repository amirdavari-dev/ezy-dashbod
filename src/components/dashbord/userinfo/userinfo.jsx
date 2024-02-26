import { Link } from "react-router-dom"
import styled from "./userinfo.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsBoxArrowInLeft } from "react-icons/bs";
const Userinfo = () => {
    return (
        <div className={` bg-white px-3 ${styled.box_info}`}>
            <div className="row mt-3">
                <button className="btn px-3 border-0 bg-white d-flex justify-content-center align-items-center">
                    <div className="col-4 d-flex justify-content-start">
                        <IoIosArrowBack size={20} />
                    </div>
                    <div className="col-8 d-flex flex-column align-items-end">
                        <h6 className={` ${styled} mb-0`}>امیر داوری</h6>
                        <span className={styled}>اشتراک ندارید</span>
                    </div>
                </button>
            </div>
            <div className="row mt-2">
                <div className="col text-center px-4">
                    <button className={`${styled.vip_btn} ${styled} btn border-0 w-100 rounded-4 `}>
                        خرید اشتراک
                    </button>
                </div>
            </div>
            <hr className="my-2" />
            <div className="row my-2">
                <div className="col-12">
                    <Link className="d-inline-block bg-white w-100 text-end px-3 py-2 text-secondary">
                        داشبورد
                        <span className="ms-2">
                            <IoHomeOutline size={20} />
                        </span>

                    </Link>
                </div>
                <div className="col-12">
                    <Link className="d-inline-block bg-white w-100 text-end px-3 py-2 text-secondary">
                        پشتیبانی
                        <span className="ms-2">
                            <TfiHeadphoneAlt size={20} />
                        </span>

                    </Link>
                </div>
                <div className="col-12">
                    <Link className="d-inline-block bg-white w-100 text-end px-3 py-2 text-danger">
                        خروج از حساب
                        <span className="ms-2">
                            <BsBoxArrowInLeft size={20} />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Userinfo
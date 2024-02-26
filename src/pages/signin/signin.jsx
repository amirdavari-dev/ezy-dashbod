import vectore from "../../assets/images/vectore/signinup.png"
import logoezy from "../../assets/images/icon/logoezy.svg"
import styled from "./signin.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"
const Signin = () => {
    let regMail = /.+gmail.com/;
    let regPhone = /09.+/;
    const lowerTest = /[a-z]/
    const upperTest = /[A-Z]/
    const numTest = /[0-9]/
    const [userCheck, setUserCheck] = useState(false)
    const [passCheck, setPassCheck] = useState(false)
    return (
        <div className="container-fluid">
            <div className="row text-center p-sm-1 p-md-5 p-lg-0">
                <div className="d-none col col-sm-12 col-md-7 col-lg-8 col-xl-7 d-lg-flex justify-content-center align-items-center pt-3">
                    <img src={vectore} width={450} height={450} alt="Sign in" />
                </div>
                <div className="col col-lg-4 col-xl-5 bg-white">
                    <div className="px-4">
                        <div className="col-12 text-center mt-4">
                            <img src={logoezy} alt="Logo Ezy" />
                        </div>
                        <div className="col-12 text-end my-2">
                            <h5 className={` ${styled} fw-bolder `}>ورود</h5>
                        </div>
                        <form onSubmit={(event) => event.preventDefault()}>
                            <div className="form-floating mb-4 mt-5">
                                <input autoComplete="off" title="شماره موبایل شما باید با 09 شروع || ...@gmail.com" onChange={(event) => {
                                    let val = event.target.value
                                    setUserCheck(regMail.test(val) || regPhone.test(val) && Number(val.length) === 11 ? true : false)
                                }} type="text" id="mailPhone" className={` ${styled} text-end form-control rounded-4 border border-2 ${userCheck && 'is-valid'}`} placeholder="devam...@gmail.com / 0903..." />
                                <label htmlFor="mailPhone" className={` ${styled} text-end `}>شماره موبایل / ایمیل</label>
                            </div>
                            <div className="form-floating mt-3 mb-5">
                                <input autoComplete="off" title="مقدار شما باید بزرگ تر از 8 کارکتر و شامل عدد و شامل حروف کوچک و بزرگ لاتین باشد" onChange={(event) => {
                                    let val = event.target.value
                                    setPassCheck(lowerTest.test(val) && upperTest.test(val) && val.length >= 8 && numTest.test(val) ? true : false)
                                }} type="text" id="passInp" className={` ${styled} text-end form-control rounded-4 border border-2 ${passCheck && ' is-valid'}`} placeholder="a-zA-Z && 0-9 x>=8" />
                                <label htmlFor="passInp" className={` ${styled} text-end `}>رمز عبور</label>
                            </div>
                            <div className="row text-end mt-4 gy-2">
                                <div className="col-12">
                                    <Link className={styled}>ارسال رمز عبور یکبار مصرف</Link>
                                </div>
                                <div className="col-12">
                                    <Link className={styled}>آیا رمز عبور را فراموش کرده اید ؟</Link>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col px-5">
                                    <button disabled={!userCheck || !passCheck} type="submit" className={`btn border-0 p-0 w-100 bg-primary ${styled}`}>
                                        <Link to="/dashbord" className="text-white w-100 d-block h-100 p-2 m-0">
                                            ورود
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className="row text-center mt-3 mb-1">
                                <div className="col p-0">
                                    <p className={` ${styled} fw-lighter m-0 `}>یا</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="px-5">
                                    <hr className="w-100" />
                                </div>
                                <div className="col text-center">
                                    <Link className={` ${styled} fw-bolder `}>
                                        ورود به سیستم با گوگل
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google ms-2 text-black" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="px-5">
                                    <hr className="w-100" />
                                </div>
                            </div>
                            <div className="row text-center">
                                <p className={styled}>
                                    حساب کاربری ندارید ؟
                                    <Link to="/user/register" className={` ${styled} mx-1 `}>ثبت نام</Link>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signin
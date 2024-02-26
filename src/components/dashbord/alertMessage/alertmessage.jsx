import styled from "./alertmessage.module.css"
const Alertmessage = ({ bottom = 60 , left=30, label ,timeOut}) => {
    
    setTimeout(()=>{
        timeOut(false)
    },3000)

    return (
        <div style={{bottom:`${bottom}px`,left:`${left}px`}} className={` ${styled.parentBox} border border-bottom-0 fw-bold border-success bg-white p-2 rounded-3 overflow-hidden shadow-lg position-fixed d-flex justify-content-center align-items-top`}>
            <p className={` ${styled.alertbox} mb-0`}>
                لینک شما کپی شد
            </p>
            <span className={` ${styled.animationAlert} position-absolute start-0 bottom-0 top-auto bg-secondary d-inline-block`}></span>
        </div>
    )
}
export default Alertmessage
import person from "../../../../assets/images/icon/personchar.png"
import styled from "./bodycard.module.css"
import { IoMdPerson } from "react-icons/io";
const Bodycard = () => {
    return (
        <div className="row border p-3 ps-1 m-2 mt-2 rounded-3">
            <div className="col-9 pe-4 ps-0 d-flex align-items-end justify-content-center flex-column">
                <h6 className={styled}>امیر داوری</h6>
                <p className={` ${styled.decribtion} overflow-y-scroll text-end`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus ut quod impedit, distinctio esse quae commodi odio expedita! Quaerat repudiandae omnis fugiat accusamus placeat a aliquid velit cum! Eaque?
                </p>
            </div>
            <div className="col-3 p-md-2 border rounded-4 px-0 d-flex justify-content-center align-items-center">
                {/* <img width={90} height={80} src={person} alt="none" /> */}
                <IoMdPerson size={50} style={{color:'rgb(180,180,180)'}} />
            </div>
        </div>
    )
}
export default Bodycard
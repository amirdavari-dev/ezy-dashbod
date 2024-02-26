import styled from "./skills.module.css"
import { RiBubbleChartLine } from "react-icons/ri"
import { FiEdit2 } from "react-icons/fi"
const Skills = () => {
    const colorIcon = "rgb(52, 183, 241)"
    return (
        // style={{ color: "rgb(52, 183, 241)" }}
        <div className="row my-2 m-2">
            <div className={`col border rounded-3 ${styled.skills_parent} `}>
                <button className="btn border-0 py-2 px-0 w-100 d-flex justify-content-center align-items-center">
                    <div className="col-2 text-start">
                        <FiEdit2 style={{ color: colorIcon }} size={16} />
                    </div>
                    <div className="col-8">
                        <p className={` ${styled.skills} m-0 text-end`}>بازرگانی</p>
                    </div>
                    <div className="col-1 ps-1 text-end">
                        <RiBubbleChartLine style={{ color: colorIcon }} size={16} />
                    </div>
                </button>
            </div>
        </div>
    )
}
export default Skills
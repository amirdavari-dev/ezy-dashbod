import { FaMapPin } from "react-icons/fa";
import { RiDragMove2Line } from "react-icons/ri";
const DragDropIcon = ({ pinActive = false }) => {
    return (
        <div className="col-1 position-absolute h-100 start-0 d-flex justify-content-start p-0 align-items-center">
            <div className="py-4 rounded-end-4 h-100 d-flex align-items-center">
                {pinActive ? <FaMapPin size={23} className="text-dark" /> : <RiDragMove2Line size={24} className="text-black" />}
            </div>
        </div>
    )
}
export default DragDropIcon
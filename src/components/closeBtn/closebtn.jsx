import { IoIosCloseCircleOutline } from "react-icons/io"
const Closebtn = ({closeValue}) => {
    return (
        <div className="col-2 position-absolute start-0 ps-1">
            <button onClick={() => {
                closeValue((curr) => !curr)
            }} className="btn border-0 p-0 m-0">
                <IoIosCloseCircleOutline size={24} />
            </button>
        </div>
    )
}
export default Closebtn
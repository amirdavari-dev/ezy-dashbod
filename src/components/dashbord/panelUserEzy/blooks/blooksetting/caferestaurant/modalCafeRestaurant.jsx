import Tabfield from "../../../../../tab/tabfield"
import ModalBox from "../../../../modalbox/modalbox"
import EditCofeRestaurant from "./editCafeRestaurant"
import MenuCafeRestaurant from "./menuCaferestaurant"

const ModalCafeRestaurant = ({ setClose, open, titleValue }) => {
    return (
        <ModalBox close={setClose} open={open} titleValue={titleValue} >
            <Tabfield leftLabel="ویرایش" rightLabel="منو" rightValue={<MenuCafeRestaurant setModalCafe={setClose} />} leftValue={<EditCofeRestaurant />} />
        </ModalBox>
    )
}
export default ModalCafeRestaurant
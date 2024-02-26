import Tabfield from "../../tab/tabfield"
import Ezycard from "./ezycard/ezycard"
import Shopcard from "./shopcard/shopcard"
import { CiShoppingBasket } from "react-icons/ci"
const Carditem = () => {
    return (
        <div className="col-11 col-sm-8 col-md-5 col-xl-4 mx-sm-1 rounded-5 bg-white shadow-lg border overflow-hidden">
            <div className="row">
                <Tabfield
                    leftLabel="فروشگاه"
                    rightLabel="ایزی"
                    rightIcon={<CiShoppingBasket size={22} />}
                    leftIcon={<CiShoppingBasket size={22} />}
                    rightValue={<Ezycard />}
                    leftValue={<Shopcard />}
                    iconStatus={true}
                />
            </div>
        </div>
    )
}
export default Carditem
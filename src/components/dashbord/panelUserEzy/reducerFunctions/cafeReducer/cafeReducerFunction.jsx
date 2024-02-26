import CafeContent from "../../content/cafeContent/cafeContent"
import ClassicCafe from "../../content/cafeContent/classicCafe";
import ModernCafe from "../../content/cafeContent/modern/modernCafe";
import PriceList from "../../content/cafeContent/priceList/priceList";


const cafeReducerHandler = (cafe, action) => {
    switch (action.type) {
        case "MAIN":
            return <CafeContent />;
        case "MODERN":
            return <ModernCafe />;
        case "CLASSIC":
            return <ClassicCafe />;
        case "PRICE_LIST":
            return <PriceList />;
    }
}
export default cafeReducerHandler
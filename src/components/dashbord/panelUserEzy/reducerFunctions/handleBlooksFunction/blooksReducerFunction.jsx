import Blooks from "../../blooks/blooks"
const blooksReducerHandler = (state, action) => {
    switch (action.type) {
        case "CAFE_RESTAURANT":
            return "MAIN"
        case "DEFAULT":
            return <Blooks />;
    }
}
export default blooksReducerHandler
import { useContext } from "react"
import Informationuser from "./informationuser/informationuser"
import { ModalStepContext } from "../modalContextAPI/modalBlookContextAPI"
const Content = () => {
    const { cafe } = useContext(ModalStepContext)
    return (
        <>
            <Informationuser />
            {
                cafe
            }
        </>
    )
}
export default Content
import { createContext, useReducer, useState } from "react";
import blooksReducerHandler from "../reducerFunctions/handleBlooksFunction/blooksReducerFunction";
import cafeReducerHandler from "../reducerFunctions/cafeReducer/cafeReducerFunction";
import Blooks from "../blooks/blooks";
const ModalStepContext = createContext()

const ModalBlookProvider = ({ children }) => {

    const [blookId, setBlookId] = useState(undefined)
    // handle blooks modal
    const [blooksShow, dispatchBlooks] = useReducer(blooksReducerHandler, <Blooks />)
    // handle cofe blook
    const [cafe, cafeDispatch] = useReducer(cafeReducerHandler)
    const [activePreview,setActivePreview]=useState(false)
    return (
        <ModalStepContext.Provider value={{ blookId, setBlookId, blooksShow, dispatchBlooks, cafe, cafeDispatch,activePreview,setActivePreview }}>
            {children}
        </ModalStepContext.Provider>
    )
}
export { ModalStepContext, ModalBlookProvider }
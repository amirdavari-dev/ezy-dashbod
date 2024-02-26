import Linkezy from "../linkezy/linkezy"
import Bodycard from "../bodycard/bodycard"
import Skills from "../skills/skills"
import Footercard from "../footercard/footercard"
import { useState } from "react"
const Ezycard = () => {
    // save id
    const [id, setIdUser] = useState('')
    return (
        <div className="container-fluid">
            <Linkezy bgBackdrop={false} colorBackdrop={false} shopStatus={false} handleIdUser={setIdUser} />
            <Bodycard />
            <Skills />
            <Footercard userId={id} />
        </div>
    )
}
export default Ezycard
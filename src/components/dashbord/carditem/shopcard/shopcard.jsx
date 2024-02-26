import { useState } from "react"
import Bodycard from "../bodycard/bodycard"
import Footercard from "../footercard/footercard"
import Linkezy from "../linkezy/linkezy"
import Skills from "../skills/skills"
const Shopcard = ({ setAlert }) => {
    // save id
    const [id,setIdUser]=useState('')
    return (
        <div className="container-fluid">
            <Linkezy bgBackdrop={false} colorBackdrop={false} shopStatus={true} setAlert={setAlert} handleIdUser={setIdUser} />
            <Bodycard />
            <Skills />
            <Footercard statisStatus={false} userId={id} />
        </div>
    )
}
export default Shopcard
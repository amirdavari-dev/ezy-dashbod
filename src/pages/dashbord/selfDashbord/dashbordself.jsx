import nothigezy from "../../../assets/images/icon/nothingezy.png"
import Addezy from "../../../components/dashbord/addezy/addezy"
import Carditem from "../../../components/dashbord/carditem/carditem"
import styled from "./dashbordself.module.css"
import { useState } from "react"
const Dashbordself = () => {
    // show card or no
    const [nothing, setNothing] = useState(false)
    return (
        <>
            {nothing &&
                <div className="container-fluid mt-5" style={{height:'100vh'}}>
                    <div className="row text-center">
                        <div className="col">
                            <img src={nothigezy} alt="0 item" className="img-fluid" />
                            <p className={`${styled} fw-light`}>.شما هنوز هیچ ایزی ندارید</p>
                        </div>
                    </div>
                </div>
            }
            {!nothing &&
                <div style={{backgroundColor:'rgb(241,241,241)',height:'100vh'}} className="container-fluid pb-5">
                    <div style={{marginTop:'70px'}} className="row gx-1 gy-3 d-sm-flex justify-content-center">
                        <Carditem />
                        <Carditem />
                        <Carditem />
                        <Carditem />
                        <Carditem />
                        <Carditem />
                        <Carditem />
                        <Carditem />
                        <Carditem />
                        <Carditem />
                        <Carditem />
                    </div>
                </div>
            }
            <Addezy />
        </>
    )
}
export default Dashbordself
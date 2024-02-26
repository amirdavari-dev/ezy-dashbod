import Navbar from "../navbar/navbar"
import Content from "./content/content"
import Footer from "./footer/footer"
import LinkUser from "./linkUser/linkUser"
import { ModalBlookProvider } from "./modalContextAPI/modalBlookContextAPI"

const PanelUserEzy = () => {
    return (
        <ModalBlookProvider>
            <div className="container-fluid position-relative">
                <div className="row">
                    <Navbar panelTop={true} vip={true} titlePage={false} userInfo={true} />
                </div>
                <LinkUser />
                <Content />
                <Footer />
            </div>
        </ModalBlookProvider>
    )
}
export default PanelUserEzy
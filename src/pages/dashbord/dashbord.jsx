import Footer from "../../components/dashbord/footer/footrer"
import Navbar from "../../components/dashbord/navbar/navbar"

const Dashbord = () => {
    return (
        <>
            <Navbar vip={true} titlePage={true} userInfo={true} />
            <Footer />
        </>
    )
}
export default Dashbord
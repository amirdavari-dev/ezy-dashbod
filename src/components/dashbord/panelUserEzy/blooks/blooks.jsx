import Blook from "./blook"
import blookList from "./blooklist"
const Blooks = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(220,220,220)' }} className="container">
                {
                    blookList.map((item) => {
                        return (
                            <Blook key={item.id} label={item.label} desc={item.desc}  />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Blooks
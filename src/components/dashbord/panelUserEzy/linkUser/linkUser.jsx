import Linkezy from "../../carditem/linkezy/linkezy"
const LinkUser = () => {
    return (
        <div style={{ top: '10px', zIndex: '999' }} className="row d-flex justify-content-center mx-0 mt-2 position-sticky">
            <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <Linkezy bgBackdrop={true} colorBackdrop={true} shopStatus={false} />
            </div>
        </div>
    )
}
export default LinkUser
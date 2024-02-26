const Labeltab = ({label,img}) => {
    return (
        <>
            { img !==undefined && img }
            <span className="me-1">{label}</span>
        </>
    )
    }
export default Labeltab
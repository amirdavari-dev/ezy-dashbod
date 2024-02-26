import DragDropIcon from "../../../dragdropIcon/dragDropIcon"
import styled from "./moderncafe.module.css"
import pizza from "../../../../../../assets/images/panelFile/cafeRestaurantBlook/pizza.jpg"
import cofee from "../../../../../../assets/images/panelFile/cafeRestaurantBlook/cafee.jpg"
import late from "../../../../../../assets/images/panelFile/cafeRestaurantBlook/late.jpg"
import CardModern from "./cardModern/cardModern"
import ProductItem from "./productItem/productItem"
import { useContext, useEffect, useState } from "react"
import ModalCafeRestaurant from "../../../blooks/blooksetting/caferestaurant/modalCafeRestaurant"
import { ModalStepContext } from "../../../modalContextAPI/modalBlookContextAPI"

const ModernCafe = () => {
    const { activePreview } = useContext(ModalStepContext)



    // random img

    let imgsList = [pizza, cofee, late]
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => (prevCounter + 1) % imgsList.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [imgsList.length]);

    // cafe modal show
    const [modalCafe, setModalCafe] = useState(false)
    const cardCounter = [
        {
            id: 0,
            title: 'Pizza',
            src: pizza
        },
        {
            id: 1,
            title: 'Cofee',
            src: cofee
        },
        {
            id: 2,
            title: 'Late',
            src: late
        },
        {
            id: 3,
            title: 'Late',
            src: late
        },
        {
            id: 4,
            title: 'Late',
            src: late
        },
        {
            id: 5,
            title: 'Late',
            src: late
        },
    ]

    return (
        <>
            <div onClick={() => setModalCafe(true)} className="container my-3">
                <DragDropIcon />
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-11 col-sm-8 col-md-6 col-lg-4 col-xxl-3 p-0">
                        <img height={200} src={imgsList[counter]} className="w-100 rounded-3" />
                    </div>
                </div>
                <div className={` ${styled.list_parent} row align-items-center my-3 p-2 bg-white flex-row flex-nowrap`}>
                    {
                        cardCounter.map(({ id, title, src }) => {
                            return (
                                <CardModern key={id} src={src} title={title} />
                            )
                        })
                    }
                </div>
                <div className="row d-flex justify-content-center align-items-center border mt-3">
                    <div className={`col-11 col-sm-9 col-md-7 ${activePreview ? 'col-lg-8 col-xl-7 col-xxl-8' : 'col-lg-5 col-xl-4 col-xxl-4'} `}>
                        <ul className="list-group" onClick={(e) => e.stopPropagation()}>
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                        </ul>
                    </div>
                </div>
            </div>
            <ModalCafeRestaurant setClose={setModalCafe} open={modalCafe} titleValue="کافه رستوران" />
        </>
    )
}
export default ModernCafe
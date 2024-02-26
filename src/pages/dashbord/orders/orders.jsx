import { Link, Outlet } from "react-router-dom"

const Orders = () => {
    return (
        <>
            <ul>
                <li>
                    <Link>خرید های من</Link>
                </li>
                <li>
                    <Link>سفارشات مشتری</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}
export default Orders 
import { Outlet, Link } from "react-router-dom"

const Buttons = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="../main.jsx">Home</Link>
                </li>
                <li>
                    <Link to="/Gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="Socials">Socials</Link>
                </li>
            </ul>
        </nav>
            <Outlet />
        </>
    )
};

export default Buttons;
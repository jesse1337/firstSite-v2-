import React from "react"
import './navBar.css'

import Buttons from './Buttons'

export default function Navbar() {
    return (
        <nav className="nav">
            <ul className="nav-items">
                <li><a href="https://github.com/jesse1337" target="_blank">Github</a></li>
                <li><a href="https://www.linkedin.com/in/jesse-ge/" target="_blank">LinkedIn</a></li>
            </ul>
        </nav>

    )
}
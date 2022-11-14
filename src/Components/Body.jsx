import React from "react"
import "./body.css"
import Sidebar from './Sidebar'
import me from '../img/me.png'
import Footer from './Footer'

export default function Body() {
    return (
        <div className="body">
            <Sidebar />
            <h1 className="h1">About Me</h1>
            <img src={me} alt="My Pic" className="img"/>
            <text className="text">
            Hello, my name is Jesse. 
            This is the first page of my website; other pages will include things like socials, galleries, and some other things. 
            Take your time navigating around the website :) 
            </text>
            <h3 className="h3"> My Hobbies</h3>
                    <ul className="ul">
                        <li>playing games</li>
                        <li>eating food</li>
                        <li>watching netflix; some shows I've enjoyed recently are:</li>
                        <ol className="ol">
                            <li>alchemy of souls</li>
                            <li>start up</li>
                            <li>...</li>
                        </ol>
                    </ul>
            <Footer />
        </div>

    )
}
import React from "react";
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { RiServiceLine } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { useState } from "react";


const Nav = () => {
    const [active, setActive] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active': ""}><FaHome/></a>
            <a href="#about" onClick={() => setActive('About')} className={active === 'About' ? 'active': ""}><FaRegUserCircle/></a>
            <a href="#experience" onClick={() => setActive('Experience')} className={active === 'Experience' ? 'active': ""}><FaBook/></a>
            <a href="#services" onClick={() => setActive('Services')} className={active === 'Services' ? 'active': ""}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActive('Contact')} className={active === 'Contact' ? 'active': ""}><MdMessage/></a>

        </nav>
    );
}

export default Nav
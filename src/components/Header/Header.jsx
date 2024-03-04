import React from "react";
import './header.css'
import {CTA} from './CTA'
import { HeaderSocials } from "./HeaderSocials";
import MyPicture from '../../assets/MyPicture.jpeg'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Rahulya Potla</h1>
                <h5 className="text-light">Full stack developer</h5>
                <CTA />
                <HeaderSocials/>
                <div className="me">
                    <img src={MyPicture} alt="pic" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Header
import React from "react";
import './services.css'
import { FaCheck } from "react-icons/fa6";
import archlogo from "../../assets/archlogo.png"
import PlanonLogo2 from "../../assets/PlanonLogo2.png"
import IBILogo from "../../assets/IBILogo.jpeg"

const Services = () => {
    return (
        <section id='section'>
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className=".container services__container">
                <article className="service">
                    <div className="service__head">
                     <img src={archlogo} alt="About Image" className='top' />
                    </div>
                    <ul className="service__list">
                      <h3>Technologies I worked on:</h3> <small>Java, Spring Boot, REST API, MongoDB</small>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                    <img src={PlanonLogo2} alt="About Image" className='top' />
                    </div>
                    <ul className="service__list">
                        <li>
                            <FaCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </li>
                        <li>
                            <FaCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </li>
                        <li>
                            <FaCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </li>
                        <li>
                            <FaCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </li>
                        <li>
                            <FaCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                    <img src={IBILogo} alt="About Image" className='top' />
                    </div>
                    <ul className="service__list">
                        <li>
                            <FaCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </li>
                        <li>
                            <FaCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </li>
                        <li>
                            <FaCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </li>
                        <li>
                            <FaCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </li>
                        <li>
                            <FaCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </li>
                    </ul>
                </article>
            </div>

        </section >
    );
}

export default Services
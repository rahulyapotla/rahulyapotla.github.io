import React from "react";
import './services.css'
import { FaCheck } from "react-icons/fa6";

const Services = () => {
    return (
        <section id='section'>
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className=".container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>
                            UI/UX Design
                        </h3>
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
                        <h3>
                            Web Development
                        </h3>
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
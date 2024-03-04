import React from 'react'
import { FaAward } from "react-icons/fa";
import MyPicture from "../../assets/MyPicture.jpeg"
import uncclogo3 from "../../assets/uncclogo3.jpeg"
import jntuhlogo from "../../assets/jntuhlogo.jpeg"
import archlogo from "../../assets/archlogo.png"
import PlanonLogo2 from "../../assets/PlanonLogo2.png"
import IBILogo from "../../assets/IBILogo.jpeg"

import './About.css'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About me</h2>
            <div className='container about__container'>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={MyPicture} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                            <img className="top" src={archlogo} alt="About Image" />
                            <img className="company" src={PlanonLogo2} alt="About Image" />
                            <img className="company" src={IBILogo} alt="About Image" />
                        </article>
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Master's in Computer Science</h5>
                            <small>University of North Carolina at Charlotte</small>
                            <img src={uncclogo3} className='top' alt="About Image" />
                        </article>
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Bachelor's in Computer Science and Engineering</h5>
                            <img src={jntuhlogo} alt="About Image" className='top' />
                        </article>
                    </div>
                    <p>
                    Hi there! I'm Rahulya Potla, a Computer Science graduate student at UNC Charlotte with three years of Software Development experience.
                     I've worked extensively with React, JavaScript, Spring Boot, Java, Python, and SQL and build applications around them.
                     I'm passionate about leveraging technology to create applications that make everyday life easier. I believe in continuous learning and
                     I am an enthusiastic self-learner with a passion for acquiring new knowledge and applying it practically.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
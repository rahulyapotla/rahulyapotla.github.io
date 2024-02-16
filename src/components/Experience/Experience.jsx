import React from "react";
import './experience.css'
import { FaCircleCheck } from "react-icons/fa6";


const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon" />
                        <div>
                         <h4>CSS</h4>

                        </div>                          
                        </article>
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon"/>
                            <h4>JavaScript</h4>
                            
                        </article>
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon" />
                           <div>
                            <h4>Bootstrap</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon"/>
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                <h3>Backend development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon"/>
                            <div>
                                <h4>Node JS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon"/>
                            <div>
                                <h4>MongoDB</h4>
                            </div>                           
                        </article>
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon"/>
                            <div>
                                <h4>MySQL</h4>

                            </div>
                            
                        </article>
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon"/>
                            <div>
                                <h4>Java</h4>

                            </div>
                        </article>
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon" />
                            <div>
                                <h4>Spring Boot</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaCircleCheck className="experience__details-icon"/>
                            <div>
                                <h4>Python</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience
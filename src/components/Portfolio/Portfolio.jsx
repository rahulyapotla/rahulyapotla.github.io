import React from 'react'
import './portfolio.css'

const data = [
    {
        id:1,
        image: "djf",
        title: 'Sorting Visualizer',
        github: 'https://github.com/rahulyapotla/SortingVisualizer/',
        demo: 'https://rahulyapotla.github.io/SortingVisualizer/'
    },
    {
        id:2,
        image: "djf",
        title: 'Snake Game',
        github: 'https://github.com/rahulyapotla/snakeGame',
        demo: ' https://rahulyapotla.github.io/snakeGame/'
    }
]


const Portfolio = () => {
    return (
        <section id='section'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={""} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
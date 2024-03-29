import React from "react";
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

const App = () => {
    return (
        <>
            <Header/>
             <Nav/>
            <About/>
            <Experience/>
           
            <Portfolio/>
            <Contact/>
            <Footer/> 
        </>
    )
}

export default App
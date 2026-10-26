import React from "react";
import { useState } from "react";
import {Link} from "react-scroll"
import {useMediaQuery} from "react-responsive"
import Home from "./Home";
import SkillsComp from "./SkillsComp";
import ProjectsComp from "./ProjectsComp";
import EducationComp from "./EducationComp";
import './nav.css'

const CompContainer = () => {

    const [showPortfolio, setShowPortfolio] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const today = () => {
        const newDate = new Date()
        const weekday = newDate.getDay()

        return week[weekday]
    }

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

    return (
        <>

        { showPortfolio ?

        <div className="full-page-container">
        { isTabletOrMobile === true ?
        <div className="nav-container">
            <nav className="nav-bar-container">
            <div className="nav-options" onClick={() => setShowMenu(!showMenu)}><i className="fas fa-bars"></i></div>
            {showMenu && <div className="nav-option-grp">
                <Link onClick={() => setShowMenu(false)} activeClass="active-nav" smooth={true} spy={true} to="home" className="nav-option home">Home</Link>
                <Link onClick={() => setShowMenu(false)} activeClass="active-nav" offset={-200} smooth={true} spy={true} to="skills" className="nav-option skills">Skills</Link>
                <Link onClick={() => setShowMenu(false)} activeClass="active-nav" offset={-200} smooth={true} spy={true} to="projects" className="nav-option projects">Projects</Link>
                <Link onClick={() => setShowMenu(false)} activeClass="active-nav" offset={-100} smooth={true} spy={true} to="education" className="nav-option education">Education</Link>
            </div>}
            <div className="nav-contacts">
                <a className="linkedin-link" href="https://www.linkedin.com/in/parth-bhakta-a7883998/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a className="github-link" href="https://github.com/parth610" target="_blank"><i className="fab fa-github"></i></a>
            </div>
            </nav>
        </div>
        :
        <div className="nav-container">
            <nav className="nav-bar-container">
            <div className="nav-option-grp">
                <Link activeClass="active-nav" smooth={true} spy={true} to="home" className="nav-option home">Home</Link>
                <Link activeClass="active-nav" offset={-200} smooth={true} spy={true} to="skills" className="nav-option skills">Skills</Link>
                <Link activeClass="active-nav" offset={-200} smooth={true} spy={true} to="projects" className="nav-option projects">Projects</Link>
                <Link activeClass="active-nav" offset={-100} smooth={true} spy={true} to="education" className="nav-option education">Education</Link>
            </div>
            <div className="nav-contacts">
                <a className="linkedin-link" href="https://www.linkedin.com/in/parth-bhakta-a7883998/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a className="github-link" href="https://github.com/parth610" target="_blank"><i className="fab fa-github"></i></a>
            </div>
        </nav>
        </div>
        }
        <div id='home' className="home-cont-parent"><Home setShowPortfolio={setShowPortfolio} /></div>
        <div id='skills' className="skills-cont-parent"><SkillsComp /></div>
        <div id='projects' className="projects-cont-parent"><ProjectsComp /></div>
        <div id='education' className="education-cont-parent"><EducationComp /></div>
        </div>
        :
        <div className="start-page">
            <div className="start-header">Happy <span>{`${today()}`}!</span>
            </div>
            <div onClick={() => setShowPortfolio(true)} className="start-header-2">Welcome to Parth's Portfolio</div>
            <div onClick={() => setShowPortfolio(true)} className="drop-icon"><i className="fas fa-chevron-down"></i></div>
        </div>
        }
        </>
    )
}

export default CompContainer

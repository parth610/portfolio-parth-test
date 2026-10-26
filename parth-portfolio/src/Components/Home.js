import React, { useState } from "react";
import './Home.css'
import parthPhoto from '../Images/Parth-photo.png'
import brushstrokes from '../Images/brushstrokes.png'
import resumepdf from '../Images/Parth-Resume-2022.pdf'

const Home = ({setShowPortfolio}) => {

    const [showAboutMe, setShowAboutMe] = useState(false)

    const switchAbout = () => {
        if (showAboutMe) {
           setShowAboutMe(false)
        } else {
            setShowAboutMe(true)
        }
    }

    return (
        <>
        <div className="home-container">
            <div className="home-left-container">
                <p onClick={() => setShowPortfolio(false)} className="name-text">Parth Bhakta</p>
                <div className="headline-text"> Software Developer and 3D Visualizer</div>
                <div className="headline-text-info"> A problem solver with a creative mind and always keen to learn more</div>
                <div className="home-buttons-container">
                    <button onClick={switchAbout} className="aboutme-button">About Me</button>
                    <a href={resumepdf} target="_blank" className="resume-button">Resume</a>
                </div>
            </div>
            <div className="home-right-container">
                {/* <img src={brushstrokes}/> */}
                <div className="parth-photo-container">
                    <img className="parth-photo" src={parthPhoto}></img>
                </div>
            </div>
        </div>
        {
            showAboutMe &&
            <div className="aboutme-container">
                <div className="about-me-header">About Me</div>
                <div className="about-me-info">Software developer with a background in design, I love the idea of creation, whether it is web application or an animation clip. I have acquired various skills from my education and my experiences and I will keep learning new technologies. I have shipped various fascinating projects such as Virtual Reality Experiences and a short film with an official film festival selection.
When not designing or coding, I love spending time with family and friends and I enjoy playing sports in general. I am always down to play a Cricket, Tennis, Ultimate Frisbee and learning new sports.
</div>
                <div className="d-portfolio-header">To checkout my redenred 3D visuals and design studies</div>
                <a href="https://parthbhakta.myportfolio.com/" target="_blank" className="d-portfolio-link">3D Portfolio</a>
            </div>
        }
        </>
    )
}

export default Home

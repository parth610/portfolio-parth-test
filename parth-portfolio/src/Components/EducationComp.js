import React from "react";
import './Education.css'
import aaLogo from '../Images/aa_logo.png'
import nmstatelogo from '../Images/NM_State_logo.png'

const EducationComp = () => {
    return (
        <div className="education-container">
            <div className="education-header">My Education</div>
            <div className="education-cards-grp">
                <div className="app-academy-card">
                    <div className="aa-image-container">
                        <img className="aa-image" src={aaLogo} />
                    </div>
                    <div className="aa-info-card">
                        <div className="aa_title">
                            App academy
                        </div>
                        <div className="aa-major">
                            Software Engineering Bootcamp
                        </div>
                        <div className="aa-years">
                            Oct-2021 to May-2022
                        </div>
                        <div className="aa-about">
                        One of the most prestigious coding bootcamp where I learned technologies like Javascript, Python, ReactJs, Express, Flask, Sequelize, SQL-alchemy and many more technologies including more than 1000+ hours of projects and pair programming. Its fast paced environment made me a better problem solver and forced me to think critically in time constraints. 
                        </div>
                    </div>
                </div>
                <div className="nmstate-card">
                    <div className="nmstate-image-container">
                        <img className="nmstate-image" src={nmstatelogo} />
                    </div>
                    <div className="nmstate-info-card">
                        <div className="nmstate_title">
                            New Mexico State University
                        </div>
                        <div className="nmstate-major">
                            Animation and Visual Effects
                        </div>
                        <div className="nmstate-years">
                            Jan-2017 to May-2020
                        </div>
                        <div className="nmstate-about">
                        Creative Media Institute at NMSU is one of the top Animation programs in the USA. Curriculum there challenged me to work hard as well as think creatively. I graduated with 3.82 GPA while learning fundamentals and advanced designs alongside various technologies such as Maya, Adobe Suite, Unreal Engine and among others.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationComp

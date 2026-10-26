import React, { useState } from "react"
import './Projects.css'
import helpernotes from '../Images/helper-notes-bg.png'
import sharateit from '../Images/sharate-it-bg.png'
import flixtagram from '../Images/flixtagram-bg.png'

const ProjectsComp = () => {

    const [helperNotesShow, setHelperNotesShow] = useState(false)
    const [flixtagramShow, setFlixtagramShow] = useState(false)
    const [sharateitShow, setSharateitShow] = useState(false)

    return (
        <>
        <div className="projects-container">
            <div className="projects-header">My Projects</div>
            <div className="projects-grp">
                <div className="project-card-container" onClick={() => setHelperNotesShow(true)}>
                    <div className="project-image-container"><img className="project-img" src={helpernotes}/>
                        <div className="project-title">HelperNotes</div>

                    </div>
                </div>
                <div className="project-card-container" onClick={() => setFlixtagramShow(true)}>
                    <div className="project-image-container"><img className="project-img" src={flixtagram}/>
                        <div className="project-title">Flixtagram</div>
                    </div>
                </div>
                <div className="project-card-container" onClick={() => setSharateitShow(true)}>
                    <div className="project-image-container"><img className="project-img" src={sharateit}/>
                        <div className="project-title">Sharate-It</div>
                    </div>
                </div>
            </div>
        </div>
        {
            helperNotesShow &&
            <div onClick={() => setHelperNotesShow(false)} className="helperNotes-info-bg">
                <div onClick={(e) => e.stopPropagation()} className="helper-notes-container">
                    <div className="helper-notes-title">Helper Notes</div>
                    <div className="helper-notes-image-container">
                        <img className="helper-notes-image" src={helpernotes}/>
                    </div>
                    <div className="helpernotes-about-container">
                        <a className="helper-notes-link" target="_blank" href="https://helper-notes.herokuapp.com/">Live Site</a>
                        <div className="helper-notes-about">About</div>
                        <div className="project-info">Helper-Notes is a clone of EverNote web application which lets you create notes and edit them with its rich text editing tool. To organize better, user can create notebooks to store notes in it. Notes and Notebooks features are full CRUD functionality, meaning; user can create, read, update and delete Notes and Notebooks with their convenience. This application was build with Postgresql as a database management, Express as a backend engineering and React Js as a frontend tool. Javascript was the primary language used, HTML/CSS was also implemented to layout the browser containers and to give better user experience.</div>
                    </div>
                </div>
            </div>
        }
        {
            flixtagramShow &&
            <div onClick={() => setFlixtagramShow(false)} className="flixtagram-info-bg">
                <div onClick={(e) => e.stopPropagation()} className="flixtagram-container">
                    <div className="flixtagram-title">Flixtagram</div>
                    <div className="flixtagram-image-container">
                        <img className="flixtagram-image" src={flixtagram}/>
                    </div>
                    <div className="flixtagram-about-container">
                        <a className="flixtagram-link" target="_blank" href="https://flixtagram.herokuapp.com/">Live Site</a>
                        <div className="flixtagram-about">About</div>
                        <div className="project-info">Flixtagram is a clone of Instagram app where users can post pictures with caption. Users can follow other users to see their posts. This app was build by collaborative effort of me and my three partners. Backend engineering is build with Flask app, Python and Postgresql for data management. Frontend engineering is handled with the help of React Js and Redux framework.</div>
                    </div>
                </div>
            </div>
        }
        {
            sharateitShow &&
            <div onClick={() => setSharateitShow(false)} className="sharateit-info-bg">
                <div onClick={(e) => e.stopPropagation()} className="sharateit-container">
                    <div className="sharateit-title">Sharate-It</div>
                    <div className="sharateit-image-container">
                        <img className="sharateit-image" src={sharateit}/>
                    </div>
                    <div className="sharateit-about-container">
                        <a className="sharateit-link" target="_blank" href="https://sharate-it.herokuapp.com/">Live Site</a>
                        <div className="sharateit-about">About</div>
                        <div className="project-info">Sharate-it is an app where a user can list their business to promote and customers can leave their reviews based on the experience. Business listers can upload pictures of their businesses, uploading pictures has been handled by AWS S3 bucket. Backend engineering is build with Flask app, Python and Postgresql for data management. Frontend engineering is handled with the help of React Js and Redux framework.</div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default ProjectsComp

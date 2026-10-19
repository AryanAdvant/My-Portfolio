import "./styles.css"
import airplane from "./assets/download.jpg"
import ava from "./assets/Ava.png"
import studybuddy from "./assets/Studybuddy.png"


function Projects(){
    return (
        <>
            <hr className="seperator" />
            <div id="Projects-title">
                <p id="completed-pro">COMPLETED PROJECTS</p><hr id="hr-pro-title" />
                <p id="view-all">VIEW ALL THE PROJECTS <p id="arrow">&rarr;</p></p>
            </div>
            <div id="project-card-container">
                <div className = "pro-card">
                    <img src={airplane}></img>
                    <div className = "card-des">
                        <div className="card-num"><p>01</p></div>
                        <div className="card-main-title">
                            <p className = "main-card-title">Airline Management System</p>
                            <p className = "sub-card-title">A SQL Project</p>
                        </div>
                        <div className="card-arrow">
                            <p className="card-arrow">&rarr;</p>
                        </div>
                    </div>
                </div>
                <div className = "pro-card">
                    <img src={ava}></img>
                    <div className = "card-des">
                        <div className="card-num"><p>02</p></div>
                        <div className="card-main-title">
                            <p className = "main-card-title">Project Ava</p>
                            <p className = "sub-card-title">A Personal Ai Agent</p>
                        </div>
                        <div className="card-arrow">
                            <p className="card-arrow">&rarr;</p>
                        </div>
                    </div>
                </div>
                <div className = "pro-card">
                    <img src={studybuddy}></img>
                    <div className = "card-des">
                        <div className="card-num"><p>03</p></div>
                        <div className="card-main-title">
                            <p className = "main-card-title">Studybuddy</p>
                            <p className = "sub-card-title">An Academic Progress Tracker</p>
                        </div>
                        <div className="card-arrow">
                            <p className="card-arrow">&rarr;</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="seperator" id="education-seperator" />
        </>
    )
}

export default Projects
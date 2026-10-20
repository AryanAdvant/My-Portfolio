import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpenai } from "@fortawesome/free-brands-svg-icons"; 
import { faBug } from "@fortawesome/free-solid-svg-icons"; // For the bug icon
import { faChrome } from "@fortawesome/free-brands-svg-icons";


export function Education(){
    return (
        <>
            <div className = "edu-container">
                <div className = "details education">
                    <p className = "edu-title">Education & Skills</p>
                    <div className="edu-sub-container">
                        <p>Education</p><hr />
                    </div>
                    <div className="education-details">
                        <p>Diploma CM</p><p>pursuing 2024-2027</p> 
                        <p>CBSE</p><p> completed - 2024</p>
                    </div>

                    <p>Skills</p>
                    <div className = "skills">HTML & CSS</div>
                    <div className = "skills">Javascript</div>
                    <div className = "skills">React</div>
                    <div className = "skills">Nodejs & Expressjs</div>
                    <div className = "skills">SQL</div>
                    <div className = "skills">MongoDB</div>
                    <div className = "skills">C</div>
                    <div className = "skills">C++</div>
                    <div className = "skills">Java</div>
                    <div className = "skills">Python</div>


                    <p>Core Subjects</p>
                    <div className = "core">Digital Techniques</div>
                    <div className = "core">Data Structure using C</div>
                    <div className = "core">OOP</div>
                    <div className = "core">Microprocessor 8086</div>
                    <div className = "core">OS</div>
                    <div className = "core">Software Engineering</div>
                    <div className = "core">Software Testing</div>
                    <div className = "core">Data Analytics</div>
                    <div className = "core">Machine Learning</div>
                </div>
                <div className = "details experience">
                    <p>Experience</p>
                    <div className = "exp-cotainer">
                        <div className = "exp-num">01</div>
                        <div className = "exp-circle"><FontAwesomeIcon icon={faOpenai} /></div>
                        <div className="exp-main-title">Naviatech</div>
                        <div className = "exp-description">Learnt Machine Learning in Naviatech</div>
                    </div>
                    <div className = "exp-cotainer">
                        <div className = "exp-num">02</div>
                        <div className = "exp-circle"><FontAwesomeIcon icon={faChrome} /></div>
                        <div className="exp-main-title">MIOPL</div>
                        <div className = "exp-description">Experience to build a full stack website at Maharashtra Informatics Opc Pvt Ltd</div>
                    </div>
                    <div className = "exp-cotainer">
                        <div className = "exp-num">03</div>
                        <div className = "exp-circle"><FontAwesomeIcon icon={faBug} /></div>
                        <div className="exp-main-title">Evalix</div>
                        <div className = "exp-description">Currently working as an intern in evalix working as a tester and in development</div>
                    </div>
                </div>
                <div className = "details quote">
                    <div className = "quotation">"</div>
                    <div className = "main-quote">Life teaches us that no matter how ridiculous the odds may seem, within us resides the power to overcome these challenges and achieve something beautiful, that one day, we'll look back at where we started and be amazed by how far we've come.</div>
                    <div className = "Credit">-Technoblade</div>
                </div>
            </div>
        </>
    )
}

export default Education
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
                        <p className = "edu-sub-title">Education</p><hr className = "edu-line" />
                    </div>
                    <div className="education-details">
                        <div className="flex-date1 size20-bebas"><p>Diploma CM</p><p className="main-date">pursuing 2024-2027</p></div> <p className = "edu-des">SVCP - Sou. Venutai Chavan Polytechnic</p>
                        <div className="flexdate2 size20-bebas"><p>CBSE 10th</p><p className = "main-date"> completed - 2024</p></div><p className = "edu-des">Sinhgad Spring Dale School</p>
                    </div>
                    <hr className = "seperator edu-sep" />

                    <div className = "edu-sub-container">
                        <p className = "size30-bebas skill-title">Skills</p><hr className = "edu-line skill-line" />
                    </div>
                    <div className = "main-skill-container">
                        <div className="skill-container1">
                        <div className = "skills"><p class="align-texth">HTML & <p className="align-textcss">CSS</p></p></div>
                        <div className = "skills"><p className = "align-textjs">Javascript</p></div>
                        <div className = "skills"><p className = "align-textr">React</p></div>
                        <div className = "skills"><p className = "align-textne">Node & Express</p></div>
                        <div className = "skills"><p className = "align-texts">SQL</p></div><br />
                    </div>
                    <div className="skill-container1">
                        <div className = "skills"><p className = "align-textm">MongoDB</p></div>
                        <div className = "skills"><p className = "align-textc">C</p></div>
                        <div className = "skills"><p className = "align-textcpp">C++</p></div>
                        <div className = "skills"><p className = "align-textj">Java</p></div>
                        <div className = "skills"><p className = "align-textpy">Python</p></div>
                    </div>
                    </div>
                    <hr className = "seperator skill-sep" />

                    <div className="edu-sub-container">
                        <p className = "size30-bebas core-sub">Core Subjects</p>< hr className = "edu-line core-line"/>
                    </div>
                    <div className = "core-container cc1">
                        <div className = "core"><p className = "alignc-textdte alignc">Digital Techniques</p></div>
                        <div className = "core"><p className = "alignc-textdsu alignc">Data Structure using C</p></div>
                        <div className = "core"><p className = "alignc-textoop alignc">OOP</p></div>
                        <div className = "core"><p className = "alignc-textmic alignc">Microprocessor 8086</p></div>
                    </div>
                    <div className = "core-container">
                        <div className = "core"><p className = "alignc-textosy alignc">OS</p></div>
                        <div className = "core"><p className = "alignc-textste alignc">Software Engineering</p></div>
                        <div className = "core"><p className = "alignc-textsen alignc">Software Testing</p></div>
                        <div className = "core"><p className = "alignc-textdan alignc">Data Analytics</p></div>
                        <div className = "core"><p className = "alignc-textml alignc">Machine Learning</p></div>
                    </div>
                </div>
                <div className = "details experience">
                    <p className = "exp-title exp-bebas">Experience</p>
                    <div className = "exp-container">
                        <div className = "exp-num">01</div>
                        <div className = "exp-circle chat-circle"><FontAwesomeIcon icon={faOpenai} className = "font-icon ichat" /></div>
                        <div className="exp-main-title bebas nbebas">Naviatech<div className = "exp-description">Learnt Machine Learning in Naviatech</div></div>
                        
                    </div>
                    <div className = "exp-container">
                        <div className = "exp-num">02</div>
                        <div className = "exp-circle chrome-circle"><FontAwesomeIcon icon={faChrome} className = "font-icon ichrome"  /></div>
                        <div className="exp-main-title mbebas bebas">MIOPL<div className = "exp-description">Experience to build a full stack website at Maharashtra Informatics Opc Pvt Ltd</div></div>
                        
                    </div>
                    <div className = "exp-container">
                        <div className = "exp-num">03</div>
                        <div className = "exp-circle bug-circle"><FontAwesomeIcon icon={faBug} className = "font-icon ibug"  /></div>
                        <div className="exp-main-title ebebas bebas">Evalix<div className = "exp-description">Currently working as an intern in evalix working as a tester and in development</div></div>
                        
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
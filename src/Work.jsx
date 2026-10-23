import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faGithub, faLocationDot, faBriefcase } from "@fortawesome/free-solid-svg-icons"
import laptop from "./assets/laptop.jpg"

export function Work() {
    return (
        <>
            <hr className="seperator work-separator" />
            <section className="work-container">
                <div className="work-details work-intro">
                    <p className="work-title">LET'S WORK<br />TOGETHER</p>
                    <p className="work-description">I'm currently open for internships, part-time opportunities, and collaborations. Let's create something useful together.</p>
                    <div className="work-status"><span className="work-status-arrow">↗</span> AVAILABLE FOR OPPORTUNITIES</div>
                </div>
                <div className="work-details work-contact">
                    <a className="contact-details" href="https://github.com/AryanAdvant" target="_blank" rel="noreferrer">
                        <span className="contact-icon"><FontAwesomeIcon icon={faGithub} /></span>
                        <span><span className="contact-label">GITHUB</span><span className="contact-value">github.com/AryanAdvant</span></span>
                        <span className="contact-arrow">↗</span>
                    </a>
                    <div className="contact-details">
                        <span className="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <span><span className="contact-label">EMAIL</span><span className="contact-value">Available upon request</span></span>
                    </div>
                    <div className="contact-details">
                        <span className="contact-icon"><FontAwesomeIcon icon={faBriefcase} /></span>
                        <span><span className="contact-label">OPPORTUNITIES</span><span className="contact-value">Internships & collaborations</span></span>
                    </div>
                    <div className="contact-details">
                        <span className="contact-icon"><FontAwesomeIcon icon={faLocationDot} /></span>
                        <span><span className="contact-label">LOCATION</span><span className="contact-value">Pune, India</span></span>
                    </div>
                </div>
                <div className="work-details work-visual">
                    <img src={laptop} alt="Laptop displaying a digital workspace" />
                </div>
            </section>
        </>
    )
}

export default Work

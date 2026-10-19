import "./styles.css"
import mysticker from "./assets/mysticker.png"

function App()
{
  return(
    <>
      <div className = "Heading">
        <div className = "MicroHeaders" id="left" ><p id="main-header">COMPUTER ENGINEER</p><p id="sub-header">DIPLOMA STUDENT</p></div>
        <div className = "MicroHeaders" id="right"><p id="status">Currently Working in Evalix</p></div>
      </div>
      <div className = "portfolio">
        <p id="portfolio-title">PORTFOLIO</p>
        <div className = "content">
          <div className = "content-branches">
            <p id="Hello">Hello, I'm</p><br />
            <p id="Aryan" className = "Name">ARYAN</p><br />
            <p id="Advant" className = "Name">ADVANT</p>
            <p id = "field">COMPUTER ENGINEER & DIPLOMA STUDENT</p>
            <pre id="descript">
              I am a diploma student, currently<br />
              working in Evalix as an intern <br />
              Learning and growing <br />
              everyday
            </pre>
          </div>
          <div className = "content-branches" id="port-image">
            <img src = {mysticker} alt="Mysticekr" />
          </div>
          <div className = "content-branches">
            <p className = "exp">
              <span className = "num">6+</span>
              <span id="exp-descript1" className = "descript">Months of </span><br />
            </p> 
            <span id="exp-descript2" className = "descript des2"> Experience</span>
            <hr />
            <p className = "exp">
              <span className = "num">10+</span>
              <span id="pro-descript1" className = "descript">Projects</span><br />
            </p> 
            <span id="pro-descript2" className = "descript des2"> Completed</span>
            <hr />
            <p className = "exp">
              <span className = "num">2+</span>
              <span id="int-descript1" className = "descript">Company</span><br />
            </p>
            <span id="int-descript2" className = "descript des2"> Internships</span>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
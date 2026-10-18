import "./styles.css"

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
        <div className = "content-branches"></div>
        <div className = "content-branches"></div>
        <div className = "content-branches"></div>
      </div>
      </div>
      
    </>
  )
}



export default App
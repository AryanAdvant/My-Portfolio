import "./styles.css"

function App()
{
  return(
    <>
      <div className = "Heading">
        <div className = "MicroHeaders" id="left" ><p id="main-header">Computer Engineer</p><p id="sub-header">CS Student</p></div>
        <div className = "MicroHeaders" id="right"><p id="status">Currently Working in Evalix</p></div>
      </div>
      <div className = "portfolio"><span id="portfolio-title">PORTFOLIO</span></div>
      <div className = "content">
        <div className = "content-branches"></div>
        <div className = "content-branches"></div>
        <div className = "content-branches"></div>
      </div>
    </>
  )
}



export default App
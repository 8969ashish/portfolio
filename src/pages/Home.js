import React from 'react'
import './home.css'
import myphoto from '../image/image2.png'


const Home = () => {
  return (
    <>
    <div className="home_main">
        <div className="left">
            <div className="pura">
       <div className="hi">Hello...,</div>
       <div className="intro1">I'M Ashish.</div>
       <div className="intro2">And I'M <span className='change_txt'>full stack developer</span> </div>
       <h3>
        
       </h3>
       <div className="intro3">I am a full stack web developer from india. my specilization is HTML,CSS and java script and react.</div>
       <button className='download_cv'>Download CV<i class="fa-solid fa-download"></i></button>
       <button className='hire_me'>Hire Me Now! <i class="fa-solid fa-user-plus"></i></button>
       </div>
       <div className="social_icon">
         <div className="linkdin"> <i class="fa-brands fa-linkedin"></i></div>
         <div className="git"> <i class="fa-brands fa-github"></i></div>
         <div className="youtube"> <i class="fa-brands fa-youtube"></i></div>
         <div className="whatsapp"> <i class="fa-brands fa-whatsapp"></i></div>
        </div>
        </div>
     
        <div className="right">

        <img className='myphoto' src={myphoto} alt="" />



        </div>
        
    </div>
    </>
  )
}

export default Home
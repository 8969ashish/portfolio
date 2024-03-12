import React from 'react'
import  './about.css'
import image2 from '../image/myphoto5.png'


const About = () => {



  return (
    <div>
      
        <div className="about_main">
          <div className="about_left"> 
           <img className='image2' src={image2} alt="" />
          </div>
          <div className="about_right">
            <div className="right1">
            <div className="about_me">ABOUT ME</div>
            <div className="who">- who i  am -</div>
            <div className="about_intro">I'm Ashish and I'm <span className='span'>full stack developer. </span> </div>
            <div className="about_intro1"><i class="fa-solid fa-arrow-right"></i>  

 My name is ASHISH KUMAR, I am a student pursuing my Bachelor of Computer Applications (BCA) from TMBU University Bhagalpur.
I am studying on REACT.
I have worked on many project with using HTML, CSS ,Bootstrap, JavaScript (for frontend like- Portfolio Page, Instagram Clone, Symon Says Game, and for Backend like Online Testportal and many more).
Now this time worked a MajorProject - HTML, CSS, Bootstrap, JavaScript, MongoDB. In Present I am looking for Interviews in various types of firm intership and eager to learn the critical competencies in web developer sector. i am also a part of student activities amd maintained GPA of 4.2  </div>
<button className='about_more' >ABOUT MORE..</button>  </div>
          
           
          </div>
       
        </div>
    </div>
  )
}

export default About
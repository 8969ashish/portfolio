import React from 'react'
import './project.css'
import web from '../image/web development.jpg'
import weather from '../image/weather.jpg'
import TODO from '../image/sign up.jpg'
import login from '../image/login.jpg'  



const Project = () => {
  return (
    <>
     <div className="project_main">
      <div className="project_main1">
        <div className="my_project">
            MY PROJECT 
            
          

        </div>
      
      </div>
      <div className="container_main">
      <div className="web_main">
     <img className='web' src={web} alt="" />
      <div className="web_intro">My Project Name is Centralized Healthcare System and it is mainly a dynamic website which made for reduce the paper work of health report and pathology report and reduce the work of doctor and report upload on the portal and access from anywhere and in many cases patient lost their medical report or otherwise forgot to take them with hospital so this portal will help them.
Let's see some technical :-
I used Eclipse for project making technology used JAVA,and at the back end Mysql and front end HTML, CSS, Bootstrap, JavaScript.
My role was Developer.
There are 4 modules in my Project:-
1. Patient module
2. Doctor module
3. CareTeam module
4. Admin module</div>
<button className='web_read_more' >Read more</button>
      </div>
      <div className="web_main">
     <img className='web' src={weather} alt="" />
      <div className="web_intro">My Project Name is Centralized Healthcare System and it is mainly a dynamic website which made for reduce the paper work of health report and pathology report and reduce the work of doctor and report upload on the portal and access from anywhere and in many cases patient lost their medical report or otherwise forgot to take them with hospital so this portal will help them.
Let's see some technical :-
I used Eclipse for project making technology used JAVA,and at the back end Mysql and front end HTML, CSS, Bootstrap, JavaScript.
My role was Developer.
There are 4 modules in my Project:-
1. Patient module
2. Doctor module
3. CareTeam module
4. Admin module</div>
<button className='web_read_more' >Read more</button>
      </div>
      <div className="web_main">
     <img className='web' src={login} alt="" />
      <div className="web_intro">My Project Name is Centralized Healthcare System and it is mainly a dynamic website which made for reduce the paper work of health report and pathology report and reduce the work of doctor and report upload on the portal and access from anywhere and in many cases patient lost their medical report or otherwise forgot to take them with hospital so this portal will help them.
Let's see some technical :-
I used Eclipse for project making technology used JAVA,and at the back end Mysql and front end HTML, CSS, Bootstrap, JavaScript.
My role was Developer.
There are 4 modules in my Project:-
1. Patient module
2. Doctor module
3. CareTeam module
4. Admin module</div>
<button className='web_read_more' >Read more</button>
      </div>
      <div className="web_main">
     <img className='web' src={TODO} alt="" />
      <div className="web_intro">My Project Name is Centralized Healthcare System and it is mainly a dynamic website which made for reduce the paper work of health report and pathology report and reduce the work of doctor and report upload on the portal and access from anywhere and in many cases patient lost their medical report or otherwise forgot to take them with hospital so this portal will help them.
Let's see some technical :-
I used Eclipse for project making technology used JAVA,and at the back end Mysql and front end HTML, CSS, Bootstrap, JavaScript.
My role was Developer.
There are 4 modules in my Project:-
1. Patient module
2. Doctor module
3. CareTeam module
4. Admin module</div>
<button className='web_read_more' >Read more</button>
      </div>
      </div>
     </div>
    </>
  )
}

export default Project
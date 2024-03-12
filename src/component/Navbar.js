import React from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';
import logo from '../image/logo2.svg'




const navbar = () => {
  return (
<header>
  <div className="navbar">
   <img className='logo' src={logo} alt="logo" />
   <div className="logofont"><span className='logo_span' >A</span>ashu.</div>
    <div className="navbarchild">

    <Link to="/">Home</Link>
    <Link to="/Skill">Skill</Link>
    <Link to="/About">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/project">Project</Link>
    <Link to="/Testimonials">Testimonials</Link>


  </div>
  <div className="menu"> <i  class="fa-solid fa-bars"></i></div>
  </div>

</header>
  )
}

export default navbar
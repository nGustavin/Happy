import React from 'react'
import '../styles/pages/landing.css'
import { Link } from 'react-router-dom'

import { FiArrowRight } from 'react-icons/fi'
import logoImg from '../images/Logo.svg' 
import DarkModeToggle from '../components/toogleDarkTheme'

function Landing() {
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="logo"/>
        
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
        <div className="location">
          <strong>Curitiba</strong>
          <span>Paraná</span>
          <DarkModeToggle />
        </div>
        
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 1)"/>
        </Link>
        
      </div>
    </div>
  )
}

export default Landing
import React from 'react'
import Page1 from './pages/Page1'
import Header from './Components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import './index.css'
import Sc1 from '../src/pages/SmallScreen/Sc1'
import Sc2 from './pages/SmallScreen/Sc2'
import Sc3 from './pages/SmallScreen/Sc3'
import Sc5 from './pages/SmallScreen/Sc5'
import ProjectsContainer from './Components/ProjectsContainer'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <div className='main' >
    <Header/>
      <Page1/>
      <Page2/>
      <Page3/>
     <Page4/>
    
   
    </div>
    <div className=' '>
      <Sc1/>
      <Sc2/>
      
      <Sc3/>
      <Sc5/>
      <ProjectsContainer/>
     
      <Footer/>
  
    </div>

    
      </>
  )
}

export default App

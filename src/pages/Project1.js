import React from 'react'
import Buttons from '../components/Buttons'
import Logo from '../components/Logo'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'

const Project1 = () => {
  return (
    <main>
        <Mouse/>
      <div className="project">
        <Navigation/>
        <Logo/>
        <Buttons left={'/'} right={"/project-2"}/>
      </div>
    </main>
  )
}

export default Project1

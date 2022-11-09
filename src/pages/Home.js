import React from 'react'
import Buttons from '../components/Buttons'
import DynamicText from '../components/DynamicText'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import SocialNetwork from '../components/SocialNetwork'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              Antoine Mendy
            </motion.h1>
            <motion.h2
              drag
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              <DynamicText />
            </motion.h2>
          </div>
        </div>
        <Buttons right={'/a-propos'} />
      </div>
    </div>
  )
}

export default Home

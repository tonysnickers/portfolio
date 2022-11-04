import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'

const Apropos = () => {
  const [left, setLeft] = useState()
  const [top, setTop] = useState()
  const [size, setSize] = useState()

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + 'px')
    setTop(Math.floor(Math.random() * 200 + 150) + 'px')
    setSize('scale(' + (Math.random() + 0.7) + ')')
  }, [])

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  }

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  }

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
      y: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  return (
    <div>
      <Navigation />

      <motion.div
        className="project-main"
        initial="initial"
        animate="visible"
        exit="exit"
        transition={transition}
        variants={variants}
      >
        <main className="a-propos">
          <h1>A propos de moi</h1>
          <div className="about-card">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam numquam quas recusandae, sapiente neque voluptates
              omnis excepturi vel sequi labore repellat assumenda tempora
              impedit reiciendis necessitatibus sunt. Placeat, maxime quaerat?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam numquam quas recusandae, sapiente neque voluptates
              omnis excepturi vel sequi labore repellat assumenda tempora
              impedit reiciendis necessitatibus sunt. Placeat, maxime quaerat?
            </p>
          </div>
        </main>
        <motion.div
          initial="initial"
          animate="visible"
          variants={imgAnim}
          transition={{ duration: 1.2 }}
          className="img-content"
        ></motion.div>
        <span
          className="random-circle"
          style={{ left, top, tranform: size }}
        ></span>
      </motion.div>
    </div>
  )
}

export default Apropos

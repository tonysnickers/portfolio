import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Buttons from '../components/Buttons'
import ContactForm from '../components/ContactForm'
import Logo from '../components/Logo'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import SocialNetwork from '../components/SocialNetwork'
import { motion } from "framer-motion";



const Contact = () => {

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },

    out: {
      opacity: 0,
      x: 200,
    },
  }
  return (
    <main>
      <Mouse />
      <motion.div initial="out" animate="in" variants={pageTransition} transition={{duration: 0.6 }} className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>addresse</h4>
              <p>8 passage du grand cerf</p>
              <p>75002 Paris</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0614012470" className="hover">
                <p
                  onClick={() => alert('téléphone copié')}
                  className="clipboard"
                  style={{ cursor: 'pointer' }}
                >
                  06 14 01 24 70
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="antoine.mendy@hotmail.fr" className="hover">
                <p
                  onClick={() => alert('email copié')}
                  className="clipboard"
                  style={{ cursor: 'pointer' }}
                >
                  antoine.mendy@hotmail.fr
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork/>
          <div className="credits">
            <p>Antoine Mendy - 2022</p>
          </div>
        </div>
        <Buttons left={'/project-4'}/>
      </motion.div>
    </main>
  )
}

export default Contact

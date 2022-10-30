import React, { useEffect } from 'react'

const SocialNetwork = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".social-network a")
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`
      });
      link.addEventListener("mouseleave", (e) => {
        link.style.transform = ""
      })
    })
  })
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/antoine-mendy-5aa8b8b1/"
          target="_blank"
          rel="noopener noreferrer"
          className='hover linkedin'
        >
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
        </a>
        <a
          href="https://github.com/tonysnickers"
          target="_blank"
          rel="noopener noreferrer"
          className='hover github'

        >
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
        </a>
      </ul>
    </div>
  )
}

export default SocialNetwork

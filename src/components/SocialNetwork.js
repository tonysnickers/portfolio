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
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className='hover'
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className='hover'

        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className='hover'

        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  )
}

export default SocialNetwork

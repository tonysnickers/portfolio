import React, { memo, useEffect } from 'react'
import { useState } from 'react'

let letterTimout
let bigTimout
let loopTimout

const DynamicText = () => {
  useEffect(() => {
    console.log('onMount')
    const target = document.getElementById('text-target')

    let array = ['Front-end', 'Fullstack']

    let wordIndex = 0
    let letterIndex = 0

    const createLetter = () => {
      const letter = document.createElement('span')
      target.appendChild(letter)

      letter.classList.add('letter')
      letter.style.opacity = '0'
      letter.style.animation = 'anim 5s ease forwards'
      letter.textContent = array[wordIndex][letterIndex]

      letterTimout = setTimeout(() => {
        letter.remove()
      }, 2000)
    }

    const loop = () => {
      bigTimout = setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0
          letterIndex = 0
          loop()
        } else if (letterIndex < array[wordIndex].length) {
          createLetter()
          letterIndex++
          loop()
        } else {
          letterIndex = 0
          wordIndex++
          loopTimout = setTimeout(() => {
            loop()
          }, 2000)
        }
      }, 80)
    }
    loop()

    return () => {
      console.log('HEY', letterTimout, bigTimout, loopTimout)
      clearTimeout(letterTimout)
      clearTimeout(bigTimout)
      clearTimeout(loopTimout)
    }
  }, [])

  return (
    <span className="dynamic-text">
      <span>Developpeur</span>
      <span id="text-target"></span>
    </span>
  )
}

const Memoized = memo(DynamicText, () => true)

export default Memoized

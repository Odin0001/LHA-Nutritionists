import React from 'react'
import './hero.css'
import mainImg from '../assets/cutFront.jpg'

const Hero = () => {
  return (
    <div>
      <div className="main" name='hero'>
        <img src={mainImg} alt='Main Image' loading='lazy' />
        <blockquote>Getting Healthy has Never been Easier!</blockquote>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import './about.css'
import L from '../assets/L.png'
import H from '../assets/H.png'
import A from '../assets/A.png'
import lourd from '../assets/lourdPng.png'
import haya from '../assets/hayaPng.png'
import aleen from '../assets/aleenPng.png'
import { useTranslation } from 'react-i18next';

const About = () => {

  const [t, i18n] = useTranslation()

  return (
    <section className='about-container' name='about'>
      <div className="container">
        <h1 className={i18n.language == 'ar' && 'text-right'}>{t('about.title')}</h1>
        <hr />
        <div className="about-content">
          <div className="imgs-container">
            <div className="image">
              <img src={lourd} alt="Lourd" className='faces' />
              <img src={L} className='letters' />
            </div>

            <div className="image">
              <img src={haya} alt="Haya" className='faces' />
              <img src={H} className='letters' />
            </div>

            <div className="image">
              <img src={aleen} alt="Aleen" className='faces' />
              <img src={A} className='letters' />
            </div>
          </div>
          <div className="text-container">
            <p>{t('about.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
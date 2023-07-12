import React from 'react'
import './services.css'
import { useTranslation } from "react-i18next";
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'
import service4 from '../assets/service4.jpg'

const Services = () => {

  const [t, i18n] = useTranslation()

  return (
    <section className='services-container' name='services'>
      <div className="container">
        <h1 className={i18n.language == 'ar' && 'text-right'}>{t('services.title')}</h1>
        <hr />
        <div className="services-content">
          <div className="service">
            <img src={service1} loading='lazy' />
            <p>{t('services.service1')}</p>
          </div>
          <div className="service">
            <img src={service2} loading='lazy' />
            <p>{t('services.service2')}</p>
          </div>
          <div className="service">
            <img src={service4} loading='lazy' />
            <p>{t('services.service3')}</p>
          </div>
          <div className="service">
            <img src={service3} loading='lazy' />
            <p>{t('services.service4')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
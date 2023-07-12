import React from 'react'
import './benefits.css'
import one from '../assets/award01.png'
import two from '../assets/award02.png'
import three from '../assets/award03.png'
import { useTranslation } from 'react-i18next';

const Benefits = () => {

  const [t, i18n] = useTranslation()

  return (
    <section className='benefits-container'>
      <div className="container">
      <h1 className={i18n.language == 'ar' && 'text-right'}>{t('why.title')}</h1>
        <hr />
        <div className="elements">
          <img src={one} />
          <p className={i18n.language == 'ar' && 'text-right'}>{t('why.reason1')}</p>
          <img src={two} />
          <p className={i18n.language == 'ar' && 'text-right'}>{t('why.reason2')}</p>
          <img src={three} />
          <p className={i18n.language == 'ar' && 'text-right'}>{t('why.reason3')}</p>
        </div>
      </div>
    </section>
  )
}

export default Benefits
import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import './results.css'
import ResultBox from './ResultBox';
import resultsData from './resultsData';
import before1 from '../assets/before1.jpg'
import before2 from '../assets/before2.jpg'
import before3 from '../assets/before3.jpg'
import before4 from '../assets/before4.jpg'
import before5 from '../assets/before5.jpg'
import before6 from '../assets/before6.jpg'
import after1 from '../assets/after1.png'
import after2 from '../assets/after2.jpg'
import after3 from '../assets/after3.jpg'
import after4 from '../assets/after4.jpg'
import after5 from '../assets/after5.jpg'
import after6 from '../assets/after6.jpg'

const Results = () => {

  const [t, i18n] = useTranslation();

  return (
    <section className='results-container' name='results'>
      <div className="container">
        <h1 className={i18n.language == 'ar' && 'text-right'}>{t('results.title')}</h1>
        <hr />
        <div className="results-content">
          <ResultBox before={before1} after={after1} description='' />
          <ResultBox before={before2} after={after2} description='' />
          <ResultBox before={before3} after={after3} description='' />
          <ResultBox before={before4} after={after4} description='' />
          <ResultBox before={before5} after={after5} description='' />
          <ResultBox before={before6} after={after6} description='' />
        </div>
      </div>
    </section>
  )
}

export default Results
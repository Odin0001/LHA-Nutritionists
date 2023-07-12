import React, { useState } from 'react'
import './bmi.css'
import { useTranslation } from "react-i18next";

const BMI = () => {

  const [t, i18n] = useTranslation()
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [total, setTotal] = useState()

  function handleResult(e) {
    e.preventDefault()
    let total = Number(weight) / Math.pow(Number(height), 2) 
    if(height === '' || weight === '') {
      total =  'Please Fill in the Required Fields'
    }
    setTotal(total.toFixed(2))
  }



  return (
    <section className='bmi-container'>
      <div className="container">
        <h1 className={i18n.language == 'ar' && 'text-right'}>{t('bmi.title')}</h1>
        <hr />
        <div className="bmi-content">
          <form>
            <h2>{t('bmi.formTitle')}</h2>
            <input type="number" placeholder={t('bmi.weightPlaceholder')} name='weight' onChange={event => {
              setWeight(event.target.value)
            }} maxLength={3} />
            <input type='number' placeholder={t('bmi.heightPlaceholder')} name='height' onChange={event => {
              setHeight(event.target.value)
            }} maxLength={3} />
            <button className="btn btn-primary" onClick={handleResult}>{t('bmi.bmiSubmit')}</button>
          </form>
          <div className="bmi-result">
            <h2>{t('bmi.bmiResult')}</h2>
            <div className="res">
              <p>{total < 1 ? 'Please Insert Correct Height/Weight' : total}</p>
              <p>
                {total < 1 && ''}
                {total < 18.5 && total > 1 ? t('bmi.under') : ''}
                {total >= 18.5 && total <= 24.9 ? t('bmi.healthy') : ''}
                {total >= 25 && total <= 29.9 ? t('bmi.over') : ''}
                {total > 30 && total < 90 ? t('bmi.obesity') : ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BMI
import { t } from 'i18next'
import React, { useState } from 'react'
import './results.css'

const ResultBox = (props) => {

  const [on, setOn] = useState(props.on)

  const styles1 = {
    opacity: on ? 1 : 0
  }

  const styles2 = {
    opacity: on ? 0 : 1
  }

  function toggle() {
    setOn(prevOn => !prevOn)
  }

  return (
    <div className='result'>
      <img src={props.before} loading='lazy' className='before' style={styles2} />
      <img src={props.after} loading='lazy' className='after' style={styles1} />
      <button className="btn btn-primary" onClick={toggle}>{!on ? t('results.before') : t('results.after')}</button>
    </div>
  )
}

export default ResultBox
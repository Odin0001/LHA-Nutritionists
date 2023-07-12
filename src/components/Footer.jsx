import React from 'react'
import './footer.css'
import { useTranslation } from 'react-i18next'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import myImg from '../assets/new logo 4.png'

const Footer = () => {

  const [t, i18n] = useTranslation()
  let year = new Date().getFullYear()

  return (
    <footer name='contact'>
      <div className="container">
        <h1>{t('footer.title')}</h1>
        <div className="footer-content">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277.4994090189152!2d37.13406285399262!3d36.21284167462613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff99301803079%3A0x187ae73b03e8f682!2z2LnZitin2K_YqSDYsdit2KfZhCDZhNmE2KzZhNiv2YrYqSDZiNin2YTZhNmK2LLYsQ!5e0!3m2!1sen!2s!4v1659515564621!5m2!1sen!2s" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="footer-location">
            <p>{t('footer.location')}</p>
          </div>
          <div className="footer-socials">
            <ul>
              <li><a href="https://www.facebook.com/LHA-healthylifestyle-102756595546850" target="_blank"><FaFacebookF size={30} /> Facebook</a></li>
              <li><a href="https://www.instagram.com/lha.nutritionists/" target="_blank"><FiInstagram size={30} /> Instagram</a></li>
              <li><a href="https://wa.me/963992822436" data-action="share/whatsapp/share"><BsWhatsapp size={30} /> WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <p>&copy;2022 - {year} L.H.A Nutritionists. All Rights Reserved.</p>
          <p className='developed'>Developed by Philip Jobran <a href="https://www.linkedin.com/in/philip-jobran-75bb3a21b/" target='_blank'><img src={myImg} loading='lazy' /></a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
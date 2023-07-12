import React from 'react'
import { useTranslation } from "react-i18next";
import './testimonials.css'
import quote from '../assets/quote.png'

const Testimonials = () => {

  const [t, i18n] = useTranslation()

  return (
    <section className='testimonials-container' name='testimonials'>
      <div className="container">
        <h1 className={i18n.language == 'ar' && 'text-right'}>{t('testimonials.title')}</h1>
        <hr />
        <div className="testimonials-content">
          <img src={quote} loading='lazy' className='quote' />
          <div className="quote-text">
            <blockquote>التقييم 100% جد ما عم حس بالجوع و الحرمان بالعكس عم حس حالي صرت اخف و حتى بشرتي صارت احسن, و انت مافي من لطفك و تشجيعك كتير الو تأثير ايجابي و معاملتك الحلوة , مبسوطة اني عم انحف دون تعب و جوع ميرسي الين</blockquote>
            <p>Rouaa</p>
          </div>
          <img src={quote} loading='lazy' className='quote' />
          <div className="quote-text">
            <blockquote>بدي اقلك ميرسي لانو اليوم وقت طلعت عل ميزان و شفت حالي ناقصة 4 كيلو فرحت من قلبي عنجد لانو انا حدا عندو عقدة من الميزان لانو بعاني من ثبات وزن و قصور غدة .. كنت عبنزل سنتيمترات بس الميزان اليوم عطاني اشارة حلوة, ميرسي عمتابعتك ديمن و حكياتك الحلوين اللي ديمن فيون روح و ضحكة و تفائل شكرا لورد</blockquote>
            <p>Manal</p>
          </div>
          <img src={quote} loading='lazy' className='quote' />
          <div className="quote-text">
            <blockquote>I Really Appreciate Haya and the way she works, she listens my needs and respond asap which keeps me motivated. In three weeks only, I felt a big difference and hope to keep up the good habits.</blockquote>
            <p>Joelle</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
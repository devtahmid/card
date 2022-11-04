import React from "react";
import './Badge.css'
import Pfp from '../assets/pfp.jpg'
import EmailIcon from '../assets/mail.png'
import LinkedinIcon from '../assets/linkedin.svg'

export default function () {
  return (
    <div className='badge'>
      <img src={Pfp} className='image' />
      <h3 className="name">Shaikh Tahmidur Rahman</h3>
      <div className='role'>Full Stack developer</div>
      <div><a className="website" href='https://devtahmid.github.io/portfolio/' target="_blank">devtahmid.github.io/portfolio/</a>
      </div>
      <div className='badge-buttons'>
        <a href="mailto:shaikhtahmidurrahman1@gmail.com">
          <div className='email'>
            <div><img src={EmailIcon} /></div>
            <div className="link-text-nounderline">Email</div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/shaikh-tahmidur-rahman-a53067130/" target="_blank">
          <div className='linkedin'>
            <div><img src={LinkedinIcon} /></div>
            <div className="link-text-nounderline">LinkedIn</div>
          </div>
        </a>
      </div>
    </div>
  )
}


//gap and border white for linkedin, link text no dissapear
import React from 'react'
import { FormattedMessage } from 'react-intl'
import './Footer.css'
import contactSVG from '../../images/contact.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="text-align-center">
        <div className="footer-title"><FormattedMessage id="contact" /></div>
        <div className="footer-subtitle" style={{ marginBottom: 10 }}>
          <FormattedMessage id="callUSNow" />
        </div>
      </div>
      <div className="contact row">
        <div style={{ marginRight: 20 }}>
          <img src={contactSVG} style={{ width: 100 }}/>
        </div>
        <div className="contact-detail">
          <div><FormattedMessage id="email"/>: MacauTrackDx@gmail.com</div>
          <div><FormattedMessage id="phone"/>: <a className="phone-num" href="tel:+85362736790">+853 6273 6790</a></div>
        </div>
      </div>
    </div>
  )
}

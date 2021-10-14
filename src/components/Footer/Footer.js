import React from 'react'
import { FormattedMessage } from 'react-intl'
import './Footer.css'
import contactSVG from '../../images/contact.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="text-align-center">
        <div className="footer-title"><FormattedMessage id="contact" /></div>
        <div className="footer-subtitle" style={{ marginBottom: 10 }}>We are here to assist. Contact us by phone or email.</div>
      </div>
      <div className="contact row">
        <div style={{ marginRight: 20 }}>
          <img src={contactSVG} style={{ width: 100 }}/>
        </div>
        <div className="contact-detail">
          <div><FormattedMessage id="email"/>: todo@todo.example</div>
          <div><FormattedMessage id="phone"/>: <a className="phone-num" href="tel:123-456-7890">123-456-7890</a></div>
        </div>
      </div>
    </div>
  )
}

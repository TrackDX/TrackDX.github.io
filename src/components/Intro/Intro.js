import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import Button from '../Button/Button'
import './Intro.css'

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-banner">
        <StaticImage
          src="../../images/intro.jpg"
          layout="fullWidth"
          aspectRatio={18/9}
          formats={["auto", "webp", "avif"]}
        />
        <div className="intro-content">
          <div className="title">
            <FormattedMessage id="introduction"/>
          </div>
          <div className="subtitle">
            <FormattedMessage id="introduction.subtitle"/>
          </div>
          <div>
            <Button>
              <FormattedMessage id="btn.moreDetail"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

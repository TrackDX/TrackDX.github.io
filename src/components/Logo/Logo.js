import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import './Logo.css'

export default function Logo(props) {
  return (
    <div className="logo">
      <Link className="logo-content" to="/">
        <StaticImage className="logo-icon" src="../../images/banner.png" height={40} style={{ marginRight: 9 }}/>
      </Link>
    </div>
  )
}

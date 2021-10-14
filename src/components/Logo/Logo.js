import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import './Logo.css'

export default function Logo(props) {
  return (
    <div className="logo">
      <Link className="logo-content" to="/">
        <StaticImage className="logo-icon" src="../../images/icon.png" width={30} height={30} style={{ marginRight: 9 }}/>
        <span className="logo-text">{props.title}</span>
      </Link>
    </div>
  )
}

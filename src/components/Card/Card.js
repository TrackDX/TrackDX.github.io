import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-title">{props.title}</div>
      <div className="card-desc">{props.description}</div>
      <div className="card-img">{props.img}</div>
    </div>
  )
}

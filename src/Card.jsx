import * as React from 'react'
import './Card.css'

export default function Card({ headline, isBookmarkActive, text }) {
  return (
    <section className="Card">
      <div className={isBookmarkActive ? 'bookmark active' : 'bookmark'}></div>
      <h2>{headline}</h2>
      {text}
    </section>
  )
}

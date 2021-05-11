import * as React from 'react'
import './Card.css'

export default function Card({ headline, isBookmarkActive, text }) {
  return (
    <section className="Card">
      <button
        className={
          isBookmarkActive ? 'Card__bookmark active' : 'Card__bookmark'
        }
        aria-label="Bookmark card"
      ></button>
      <h2>{headline}</h2>
      {text}
    </section>
  )
}

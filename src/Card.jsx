import * as React from 'react'
import './Card.css'

export default function Card({
  id,
  question,
  answer,
  isBookmarked,
  isAnswerVisible,
  tags,
}) {
  return (
    <section className="Card">
      <button
        className={isBookmarked ? 'Card__bookmark active' : 'Card__bookmark'}
        aria-label="Bookmark card"
      ></button>
      <h2>Question:</h2>
      <p>{question}</p>
      <button className="Card__button">Click!</button>
      <h2>Answer:</h2>
      <p className={isAnswerVisible ? 'Card__answer' : 'Card__answer visible'}>
        {answer}
      </p>
      <ul className="Card__tags">
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </section>
  )
}

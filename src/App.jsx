import * as React from 'react'
import Card from './Card'

const cards = [
  {
    question:
      'Which famous 90&#039;s rap album is commonly referred to as &quot;The Bible of Hip Hop&quot;?',
    answer: 'Illmatic',
    isBookmarked: false,
    isAnswerVisible: false,
    id: 1,
  },
  {
    question: 'What is the oldest team in Major League Baseball?',
    answer: 'Atlanta Braves',
    isBookmarked: true,
    isAnswerVisible: false,
    id: 2,
  },
  {
    question:
      'In flight systems, what does the initialism &quot;TCAS&quot; stand for?',
    answer: 'Traffic Collision Avoidance System',
    isBookmarked: true,
    isAnswerVisible: false,
    id: 3,
  },
  {
    question:
      'In ancient Greece, if your job were a &quot;hippeus&quot; which of these would you own?',
    answer: 'Horse',
    isBookmarked: false,
    isAnswerVisible: true,
    id: 4,
  },
  {
    question: 'A statue of Charles Darwin sits in what London museum?',
    answer: 'Natural History Museum',
    isBookmarked: false,
    isAnswerVisible: true,
    id: 5,
  },
]

export default () => {
  return (
    <div className="App">
      {cards.map(({ id, question, answer, isBookmarked, isAnswerVisible }) => (
        <Card
          key={id}
          question={question}
          answer={answer}
          isBookmarked={isBookmarked}
          isAnswerVisible={isAnswerVisible}
        />
      ))}
    </div>
  )
}

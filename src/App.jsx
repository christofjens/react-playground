import * as React from 'react'
import Card from './Card'

const cards = [
  {
    question:
      'Which famous 90\'s rap album is commonly referred to as "The Bible of Hip Hop"?',
    answer: 'Illmatic',
    isBookmarked: false,
    isAnswerVisible: false,
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    id: 1,
  },
  {
    question: 'What is the oldest team in Major League Baseball?',
    answer: 'Atlanta Braves',
    isBookmarked: true,
    isAnswerVisible: false,
    tags: ['TagA', 'TagB', 'TagC', 'TagD'],
    id: 2,
  },
  {
    question: 'In flight systems, what does the initialism "TCAS" stand for?',
    answer: 'Traffic Collision Avoidance System',
    isBookmarked: true,
    isAnswerVisible: false,
    tags: ['Tag1a', 'Tag2b', 'Tag3c', 'Tag4d', 'Tag4e'],
    id: 3,
  },
  {
    question:
      'In ancient Greece, if your job were a "hippeus" which of these would you own?',
    answer: 'Horse',
    isBookmarked: false,
    isAnswerVisible: true,
    tags: ['TagOne', 'TagTwo', 'TagThree', 'TagFour'],
    id: 4,
  },
  {
    question: 'A statue of Charles Darwin sits in what London museum?',
    answer: 'Natural History Museum',
    isBookmarked: false,
    isAnswerVisible: true,
    tags: ['Tagtag', 'Tagtagtag', 'Tag', 'Tagtagtagtag'],
    id: 5,
  },
]

export default () => {
  return (
    <div className="App">
      {cards.map(
        ({ id, question, answer, isBookmarked, isAnswerVisible, tags }) => (
          <Card
            key={id}
            question={question}
            answer={answer}
            isBookmarked={isBookmarked}
            isAnswerVisible={isAnswerVisible}
            tags={tags}
          />
        )
      )}
    </div>
  )
}

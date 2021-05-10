import * as React from 'react'
import Card from './Card'

export default () => {
  return (
    <div>
      <Card
        headline="This is a Headline"
        isBookmarkActive
        text="Featuring an active Bookmark. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias incidunt asperiores."
      ></Card>
      <Card
        headline="A second headline"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias incidunt asperiores."
      ></Card>
    </div>
  )
}

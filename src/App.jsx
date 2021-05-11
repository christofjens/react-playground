import * as React from 'react'
import Card from './Card'
import Nav from './Nav'

export default () => {
  return (
    <div>
      <section className="Nav__section">
        <Nav isLeftButton navText="Home"></Nav>
        <Nav navText="About"></Nav>
        <Nav isRightButton navText="Imprint"></Nav>
      </section>
      <section className="Nav__section">
        <Nav isLeftButton isActive navText="Home"></Nav>
        <Nav navText="About"></Nav>
        <Nav isRightButton navText="Imprint"></Nav>
      </section>
      <section className="Nav__section">
        <Nav isLeftButton navText="Home"></Nav>
        <Nav isActive navText="About"></Nav>
        <Nav isRightButton navText="Imprint"></Nav>
      </section>
    </div>
  )
}

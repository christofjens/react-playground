import './Nav.css'
import * as React from 'react'

export default ({ isLeftButton, isRightButton, navText, isActive }) => {
  return (
    <button
      className={`${isActive ? 'Nav__button--active' : ''} + ${
        isLeftButton
          ? 'Nav__button Nav__button--left'
          : isRightButton
          ? 'Nav__button Nav__button--right'
          : 'Nav__button'
      }
      `}
    >
      {navText}
    </button>
  )
}

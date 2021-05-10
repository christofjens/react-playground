import './Pagination.css'
import * as React from 'react'

export default ({ children, isInactive }) => {
  return (
    <button
      isInactive
      className={isInactive ? 'Pagination inactive' : 'Pagination'}
    >
      {children}
    </button>
  )
}

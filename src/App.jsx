import * as React from 'react'
import Pagination from './Pagination'

export default children => {
  return (
    <div>
      <Pagination isInactive>&larr;</Pagination>
      <p>1/12</p>
      <Pagination>&rarr;</Pagination>
    </div>
  )
}

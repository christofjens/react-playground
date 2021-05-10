import * as React from 'react'
import Button from './Button'

export default children => {
  return (
    <div>
      <Button isActive>Active</Button>
      <Button>Not Active</Button>
    </div>
  )
}

import * as React from 'react' // importiere alles aus 'react' und füge es unter React ein
import * as ReactDOM from 'react-dom'
import App from './App'
import Button from './Button'

ReactDOM.render(<App text="Click Me!" />, document.querySelector('#root'))

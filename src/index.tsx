import React, { MouseEventHandler } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import FButton from './FButton'

const fn: MouseEventHandler = function(e) {
  console.log(e)
}
ReactDOM.render(
  <div>
    hello world
    <FButton size="small" />
    <FButton size="big" />
    <FButton size="big" onClick={fn}>
      <span>hello button</span>
    </FButton>
  </div>,
  document.getElementById('root')
)

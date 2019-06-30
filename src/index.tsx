import React, { MouseEventHandler } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Button from './Button'

const fn: MouseEventHandler = function(e) {
  console.log(e)
}
ReactDOM.render(
  <div>
    hello world
    <Button size="small" />
    <Button size="big" />
    <Button size="big" onClick={fn}>
      <span>hello button</span>
    </Button>
  </div>,
  document.getElementById('root')
)

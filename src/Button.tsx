import React from 'react'

interface Iprop {
  size?: string
  onClick?: React.MouseEventHandler
}

const Button: React.FunctionComponent<Iprop> = (props) => {
  return <div onClick={props.onClick} className={`${props.size}`}>{props.children}</div>
}

export default Button
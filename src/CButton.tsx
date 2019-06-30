import React from 'react'

interface IProps {
  size?: string
  onClick?: React.MouseEventHandler
}

interface IState {
  n: number
}

class CButton extends React.Component<IProps, IState> {
  static displayName = 'GerritVDidv'
  static defaultProps = {
    size: 'normal'
  }
  constructor(props: IProps) {
    super(props)
    this.state = {
      n: 1
    }
    // this.props.size! + 1
  }
  onClick = () => {
    this.setState({
      n: this.state.n + 1
    })
  }
  render() {
    return (
      <div onClick={this.onClick}>
        {this.props.children} -- {this.state.n}
      </div>
    )
  }
}

export default CButton

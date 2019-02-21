import React, { Component } from 'react'
import phil from '../images/pm.jpg'

const style= {
  width:'900px',
  heght:'450px',
  background: 'tomato'
}

export default class box extends Component {
  render() {
    return (
      <div style={style}>
        <h2>Test</h2>
        <img src={phil} alt="phil"/>
      </div>
    )
  }
}

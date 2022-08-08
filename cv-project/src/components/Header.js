import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
      super(props)
    
      
    }
  render() {
    return (
      <div className="hdr">
      <h2>{this.props.title}</h2>
      <button>Edit</button>
      </div>
    )
  }
}

export default Header
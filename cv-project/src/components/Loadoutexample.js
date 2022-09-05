import React, { Component } from 'react'


export class Loadoutexample extends Component {
constructor(props) {
  super(props)

  this.state = {
     shwMdl: false}

  this.showModal = this.showModal.bind(this)
  this.hideModal = this.hideModal.bind(this)

}

showModal (){
  this.setState({
    shwMdl:true
  })
  }

hideModal (){
  this.setState({
    shwMdl:false
  })
}

render() {

  return (
<div>
<div className="ldbtn"><button onClick={this.showModal}>LOADOUT EXAMPLE</button></div>

{
  this.state.shwMdl  &&   <div className="modal">
  <div className="modal-content">
  <span className="close" onClick={this.hideModal}>&times;</span>

  <div className="PISect">
  <h3>{this.props.PIname}</h3>
  <h3>Goron City Throne Room, Kakariko Region, Hyrule</h3>
  <h3>RubyHolder@rockmail.com</h3>
  </div>


  <div className="aboutSect">
  <h2>About</h2>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan nisl velit, id vestibulum tellus luctus at. Duis quis pretium quam. Vivamus at justo arcu. Suspendisse potenti. Nulla facilisi. Maecenas metus urna, sodales eu ultricies id, scelerisque in tellus. Pellentesque molestie non quam sed consequat. Fusce sed nibh et sem fringilla venenatis eget et nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vehicula, mi sed commodo facilisis, nibh massa sollicitudin nisl, aliquet elementum sem dolor non turpis. Etiam porta ultricies justo, nec interdum ex dapibus id. Donec feugiat porttitor semper. Pellentesque tincidunt imperdiet est, ac mattis felis porttitor id.
  </div>

  <div className="eduSect">
  <h2>Education</h2>
  <div>
  {this.props.Edudata.map(empl=>{
    return(
      <div key={empl.id}>
       <p> <strong>School</strong>:<span>&nbsp;&nbsp;</span> {empl.school} <span>&nbsp;&nbsp;</span>
        <strong>Subject</strong>:<span>&nbsp;&nbsp;</span> {empl.subject} <span>&nbsp;&nbsp;</span>
        <strong>Grade</strong>: <span>&nbsp;&nbsp;</span>{empl.grade}</p>


      </div>
    )
  })}</div>

</div>

  <div className="emplSect">
  <h2>Employment</h2>
  <div>
  {this.props.Empldata.map(empl=>{
    return(
      <div key={empl.id}>
       <p> <strong>Company</strong>:<span>&nbsp;&nbsp;</span> {empl.company} <span>&nbsp;&nbsp;</span>
        <strong>Start</strong>:<span>&nbsp;&nbsp;</span> {empl.start} <span>&nbsp;&nbsp;</span>
        <strong>End</strong>: <span>&nbsp;&nbsp;</span>{empl.end}<span>&nbsp;&nbsp;</span>
        <strong>Role</strong>:<span>&nbsp;&nbsp;</span> {empl.position}</p>

      </div>
    )
  })}
  </div>

  </div>


  </div>
  </div>
}

</div>
)}
}

export default Loadoutexample

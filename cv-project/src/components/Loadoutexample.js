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

  <div>
  <h3>{this.props.PIname}</h3>
  <h3>{this.props.PIadd}</h3>
  <h3>{this.props.PIcontact}</h3>
  </div>

<div className="profimg"><img src={this.props.PIimg} alt="profile pic"></img></div>

  </div>


  <div className="aboutSect">
  <h2>About</h2>
  {this.props.PIabout}
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

<div className="ldbtn"><button>Save as pdf</button></div>
  </div>
  </div>


}

</div>
)}
}

export default Loadoutexample

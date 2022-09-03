import React, { Component } from 'react'


export class Personalinfo extends Component {
constructor(props) {
  super(props)

  this.state = {
      shwMdl: false,
     about:"i am rhys",
     name:"Rhys",
     address:"",
     cntct:""

  }


      this.showModal = this.showModal.bind(this)
      this.hideModal = this.hideModal.bind(this)
      this.editAbout = this.editAbout.bind(this)
      this.editName=this.editName.bind(this)
      this.editAddress=this.editAddress.bind(this)
      this.editCont=this.editCont.bind(this)
      this.onSubmitTask = this.onSubmitTask.bind(this)

this.props.func(this.state.name)
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

      editAbout (e){this.setState({about: e.target.value,})}
      editName (e){this.setState({name: e.target.value,})}
      editAddress(e){this.setState({address: e.target.value,})}
      editCont(e){this.setState({cntct: e.target.value,})}



      onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
          about: this.state.about,
          name:this.state.name,
          address:this.state.address,
          cntct: this.state.cntct,
          shwMdl: false,

        });
        this.props.func(this.state.name)  
      };

  render() {

    return (


        <div>

         { this.state.shwMdl  &&   <div className="modal">

        <div className="modal-content">
        <span className="close" onClick={this.hideModal}>&times;</span>
        <p>Edit Personal Information Below</p>
        <div className="inputs">

       <p>Name</p>
        <input
        onChange={this.editName}
        value={this.state.name}></input>
       <p>Address</p>
        <input
        onChange={this.editAddress}
        value={this.state.address}></input>
       <p>Contact Info</p>
        <input
        onChange={this.editCont}
        value={this.state.cntct}></input>
      <p>About Me</p>
        <textarea
        onChange={this.editAbout}
        value={this.state.about}
        type="textarea"></textarea>


        <button onClick={this.onSubmitTask}>Edit and close</button>
      </div>
      </div>
      </div>
  }




        <div className="hdr">
        <h2>Personal Information</h2>

        <button onClick={this.showModal}>Edit</button>
        </div>
        <p><strong>Name:</strong> {this.state.name}</p>
        <p><strong>Address:</strong> {this.state.address}</p>
        <p><strong>Contact Number:</strong> {this.state.cntct}</p>
        <p><strong>About:</strong> {this.state.about}</p>

        </div>

    )
  }
}

export default Personalinfo

import React, { Component } from 'react'


export class Personalinfo extends Component {
constructor(props) {
  super(props)

  this.state = {
      shwMdl: false,
     about:"I am Darunia, boss of the Gorons.",
     name:"Darunia",
     address:"Throne Room, Goron city, Kakriko Region, Hyrule",
     cntct:"Rubyholder@rockmail.com",
     pflimg:"https://jegged.com/img/Games/Legend-of-Zelda-Ocarina-of-Time/Walkthrough/0215-Darunia.png"

  }


      this.showModal = this.showModal.bind(this)
      this.hideModal = this.hideModal.bind(this)
      this.editAbout = this.editAbout.bind(this)
      this.editName=this.editName.bind(this)
      this.editAddress=this.editAddress.bind(this)
      this.editCont=this.editCont.bind(this)
      this.editimg=this.editimg.bind(this)
      this.onSubmitTask = this.onSubmitTask.bind(this)

this.props.func(this.state.name,this.state.address,this.state.cntct,this.state.about,this.state.pflimg)
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
      editimg(e){

        const file = document.querySelector('input[type=file]').files[0];
        console.log(file)

        const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    this.setState({pflimg: reader.result})
  }, false);

  if (file) {
      reader.readAsDataURL(file);
    }

      }



      onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
          about: this.state.about,
          name:this.state.name,
          address:this.state.address,
          cntct: this.state.cntct,
          pflimg :this.state.pflimg,
          shwMdl: false,

        });
        this.props.func(this.state.name,this.state.address,this.state.cntct,this.state.about,this.state.pflimg)
      };

  render() {

    return (


        <div>

         { this.state.shwMdl  &&   <div className="modal">

        <div className="modal-content">
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


       <p>Profile Photo(Url)</p>
        <input
        type="file"
        onChange={this.editimg}
        ></input>


        <button onClick={this.onSubmitTask}>Close</button>
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
        <p><strong>Profile Image:</strong>{this.state.pflimg}</p>

        </div>

    )
  }
}

export default Personalinfo

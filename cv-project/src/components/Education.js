import React, { Component } from 'react';
import uniqid from "uniqid";

export class Education extends Component {
    constructor(props) {
      super(props)

      this.state = {
        shwMdl: false,
        School:"",
        Subject:"",
        grade:"",
        list: [
          {id:uniqid(),
            school: "Brynmawr comp",
            subject: "Maths",
            grade:"A"
          },
          {id:uniqid(),
            school: "Nantyglo comp",
            subject:"English",
            grade:"C"
          }

        ]

     }

         this.showModal = this.showModal.bind(this)
         this.hideModal = this.hideModal.bind(this)
         this.onSubmitTask = this.onSubmitTask.bind(this)
         this.addGrade = this.addGrade.bind(this)
         this.addSchool = this.addSchool.bind(this)
         this.addSubject = this.addSubject.bind(this)
         this.rmvInfo = this.rmvInfo.bind(this)


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


             rmvInfo(v){
               const newList = this.state.list.filter(edu=>edu.id !== v)
           this.setState({list:newList})
         }

             addSchool(e){
             this.setState({School:e.target.value})
             }

             addSubject(e){
               this.setState({Subject:e.target.value})
             }

             addGrade(e){
               this.setState({grade:e.target.value})
             }



    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
          list: this.state.list.concat({
            id: uniqid(),
            school: this.state.School,
            subject: this.state.Subject,
            grade: this.state.grade
          }),
        School: '',
        Subject: '',
        grade: '',
          shwMdl: false
        });
      };


  render() {
    return (
      <div>

    { this.state.shwMdl  &&   <div className="modal">

        <div className="modal-content">
        <span className="close" onClick={this.hideModal}>&times;</span>
        <p>Add educational Information Below</p>
        <div className="inputs">
        <label>Add School</label>
        <input
        onChange={this.addSchool}
                type="text"></input>

        <label>Add Subject</label>
        <input
        onChange={this.addSubject}
                type="text"></input>

        <label>Add Grade</label>
        <input
        onChange={this.addGrade}
                type="text"></input>




        <button onClick={this.onSubmitTask}>Submit</button>
        </div>

      </div>
      </div>
  }

<div className="hdr">
        <h2>Education</h2>

        <button onClick={this.showModal}>Add</button>
        </div>

        <div className="emplymnt">{this.state.list.map(edu=>{
          return(<div key={edu.id}>
            <span className="close" onClick={() => this.rmvInfo(edu.id)}>&times;</span>
            <p> School: {edu.school}</p>
            <p>  Subject: {edu.subject}</p>
            <p> Grade: {edu.grade}</p>


          </div>)

        })}</div>

        </div>





    )
  }
}

export default Education

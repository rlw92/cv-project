import React, { Component } from 'react'
import uniqid from 'uniqid'

export class Employment extends Component {
constructor(props) {
  super(props)

  this.state = {
     shwMdl: false,
     Company:"",
     strtDte:"",
     endDte:"",
     position:"",
     list: [
      {id:uniqid(),
        company:"Hylian Alliance",
       start:"year 124",
       end:"year 137",
       position: "Goron-Royal Relations Liason"
      },
      {id:uniqid(),
        company:"Goron Mining company",
       start:"Year 137",
       end:"Ongoing",
       position: "Owner/Manager"
      }
    ]

  }

      this.showModal = this.showModal.bind(this)
      this.hideModal = this.hideModal.bind(this)
      this.addStrt = this.addStrt.bind(this)
      this.addEnd = this.addEnd.bind(this)
      this.addComp = this.addComp.bind(this)
      this.addPos = this.addPos.bind(this)
      this.rmvInfo = this.rmvInfo.bind(this)

      this.props.func(this.state.list)
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



      addStrt(e){
      this.setState({strtDte:e.target.value})
      }

      addEnd(e){
        this.setState({endDte:e.target.value})
      }

      addComp(e){
        this.setState({Company:e.target.value})
      }

      addPos(e){
        this.setState({position:e.target.value})
      }

      rmvInfo(v){
        const newList = this.state.list.filter(edu=>edu.id !== v)
    this.setState({list:newList})
    this.props.func(newList)

  }

      onSubmitTask = (e) => {
          e.preventDefault();
          const newList = this.state.list.concat({
            id:uniqid(),
            company: this.state.Company,
            start: this.state.strtDte,
            end: this.state.endDte,
            position: this.state.position
          })
          this.setState({
          list:newList,
          Company: '',
          strtDte: '',
          endDte: '',
          position:  '',
            shwMdl: false,
                    });
          this.props.func(newList)
               };





  render() {
    return (

        <div>

         { this.state.shwMdl  &&   <div className="modal">

        <div className="modal-content">
        <span className="close" onClick={this.hideModal}>&times;</span>
        <p>Add Employment Information Below</p>
       <div className="inputs">
        <label>Add Company</label>
        <input
        onChange={this.addComp}
                type="text"></input>

        <label>Add Start Date</label>
        <input
        onChange={this.addStrt}
                type="text"></input>

        <label>Add End Date</label>
        <input
        onChange={this.addEnd}
                type="text"></input>

        <label>Add Position</label>
                <input
                onChange={this.addPos}
                        type="text"></input>

        <button onClick={this.onSubmitTask}>Submit</button>
      </div>
      </div>
      </div>
  }




        <div className="hdr">
        <h2>Employment</h2>

        <button onClick={this.showModal}>Add</button>
        </div>
        <div className="emplymnt">{this.state.list.map(empl=>{
          return(
            <div key={empl.id}>
            <span className="close" onClick={() => this.rmvInfo(empl.id)}>&times;</span>
              <p>Company: {empl.company}</p>
              <p>Start: {empl.start}</p>
              <p>End: {empl.end}</p>
              <p>Role: {empl.position}</p>
            </div>
          )
        })}</div>

        </div>

    )
  }
}

export default Employment

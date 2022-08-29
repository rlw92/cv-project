import React, { Component } from 'react'


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
      {company:"Screwfix",
       start:"July 2017",
       end:"January 2019",
       position: "Service Assistant"
      },
      {company:"Screwfix",
       start:"July 2017",
       end:"January 2019",
       position: "Service Assistant"
      }
     ]

  }

      this.showModal = this.showModal.bind(this)
      this.hideModal = this.hideModal.bind(this)
      this.addStrt = this.addStrt.bind(this)
      this.addEnd = this.addEnd.bind(this)
      this.addComp = this.addComp.bind(this)
      this.addPos = this.addPos.bind(this)

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

      onSubmitTask = (e) => {
          e.preventDefault();
          this.setState({
            list: this.state.list.concat({
              company: this.state.Company,
              start: this.state.strtDte,
              end: this.state.endDte,
              position: this.state.position
            }),
          Company: '',
          strtDte: '',
          endDte: '',
          position:  '',
            shwMdl: false
          });
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
            <div>
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

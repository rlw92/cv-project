import React, { Component } from 'react'
import Personalinfo from './components/Personalinfo'
import Education from './components/Education'
import Employment from './components/Employment'
import Loadoutexample from './components/Loadoutexample'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      PIname:"",
      location:"",
      contact:"",
      aboutme:"",
      EmploymentData:"",
      EducationData:""
    }

    this.pullData=this.pullData.bind(this)
    this.pullEmplData=this.pullEmplData.bind(this)
    this.pullEduData=this.pullEduData.bind(this)

  }

  pullData(name,add,cntact,about) {
    this.setState({
      PIname:name,
      location:add,
      contact:cntact,
      aboutme:about
    })
  }

    pullEmplData(data) {
      this.setState({
        EmploymentData:data
      })
    console.log(data)}

    pullEduData(data){
      this.setState({
        EducationData:data
      })
    }


  render() {
    return (
      <div className="skltn">
        <h1 style={{textAlign:"center"}}>CV Builder</h1>
          <Personalinfo func={this.pullData}/>
          <Education func={this.pullEduData}/>
          <Employment func={this.pullEmplData}/>





     <Loadoutexample
      PIname={this.state.PIname}
      PIadd={this.state.location}
      PIcontact={this.state.contact}
      PIabout={this.state.aboutme}
      Edudata={this.state.EducationData}
       Empldata={this.state.EmploymentData}/>



      </div>
    )
  }
}

export default App

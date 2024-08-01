import React, { Component } from 'react'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName:'',
        emial:'',
        occupation: '',
        city: '',
        bio:''
    }

    //Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step +1
        });
    }
     prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step -1
        });    
   
   
    } 



    //Handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default UserForm

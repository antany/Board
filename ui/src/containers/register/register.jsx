import React, { Component } from "react";
import Form from "../../components/form/form";

class RegisterForm extends Component {

  
  
  componentDidMount(){
    
    this.state.form.fromElements.map((element,index)=>{
      return this.setState({[element.name]:index})
    });
  }

  onElementChangeEvent=(event)=>{
    const index = this.state[event.target.name]
    let elements = [...this.state.form.fromElements];
    let element = {...elements[index],value:event.target.value};
    elements[index] = element;
    this.setState({form:{...this.state.form,fromElements:elements}});
    
  }

  state = {
    form:{
      header: "Register",
      method: "post",
      formSubmit:this.onSubmitEvent,
      onElementChangeEvent: this.onElementChangeEvent,
      fromElements:[
        {
          type:"text",
          isRequired: true,
          value:"",
          name:"username",
          label:"Username"
        },
        {
          type:"password",
          isRequired: true,
          value:"",
          name:"password",
          label:"Password"
        },
        {
          type:"text",
          isRequired: true,
          value:"",
          name:"firstname",
          label:"Firstname"
        },
        {
          type:"text",
          isRequired: true,
          value:"",
          name:"lastname",
          label:"Lastname"
        },
        {
          type:"text",
          isRequired: true,
          value:"",
          name:"email",
          label:"Email"
        }

      ],

      buttons:[
        {
          label:"Cancel",
          action:this.onCancelEvent,
          type:"button"
        },
        {
          label:"Submit",
          action:this.onSubmitEvent,
          type:"submit"
        }
      ]

    }
  }

  onCancelEvent=(event)=>{

  }

  onSubmitEvent=(e)=>{
    console.log(e)
    e.preventDefault();
  }

  render() {
    return (
        <Form {...this.state.form}></Form>
    );
  }
}

export default RegisterForm;

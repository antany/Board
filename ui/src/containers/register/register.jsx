import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import Form from "../../components/form/form";
import {getURL as URL} from '../../constants/urlconstants';
import {REGISTER} from '../../constants/urlstringconstants';
 

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

  onCancelEvent=(event)=>{
    this.props.history.push("/ui/auth");

  }

  onSubmitEvent=(e)=>{
    e.preventDefault();
    const data={
      username:{
        value: this.state.form.fromElements[0].value
      },
      password:{
        value: this.state.form.fromElements[1].value
      },
      firstname:{
        value: this.state.form.fromElements[2].value
      },

    }
    axios.post(URL(REGISTER),data,null).then((reponse)=>this.props.history.push("/ui/auth"));
    
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
          type:"button",
          style:"btn-cancel"
        },
        {
          label:"Register",
          action:()=>{return false},
          type:"submit",
          style:"btn-submit"
        }
      ]

    }
  }

 

  render() {
    return (
        <Form {...this.state.form}></Form>
    );
  }
}

export default withRouter(RegisterForm);

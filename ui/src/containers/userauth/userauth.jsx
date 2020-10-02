import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import {LOGIN} from '../../constants/urlstringconstants';
import {getURL as URL} from '../../constants/urlconstants';

import { withRouter } from "react-router";
import Form from "../../components/form/form";

class UserAuth extends Component {

  onElementChangeEvent=(event)=>{
    const index = this.state[event.target.name]
    let elements = [...this.state.form.fromElements];
    let element = {...elements[index],value:event.target.value};
    elements[index] = element;
    this.setState({form:{...this.state.form,fromElements:elements}});
    
}

  onSubmitEvent=(e)=>{
    e.preventDefault();
    axios.post(URL(LOGIN),null,{params:{
      username:this.state.username,
      password:window.btoa(this.state.password)
    }})
  }

  componentDidMount(){
    
    this.state.form.fromElements.map((element,index)=>{
      return this.setState({[element.name]:index})
    });
  }

  state = {
    form:{
      header: "Login",
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
        }
      ],
      buttons:[
        {
          label:"Register",
          action:()=>{this.props.history.push("/ui/auth/register")},
          type:"button",
          style:"btn-cancel"
        },
        {
          label:"Login",
          action:()=>{return false},
          type:"submit",
          style:"btn-submit"
        }
      ]
    }  
  }

  onChangeEvent = (event,name)=>{
    this.setState({[name]:event.target.value})
  } 
  

 

  render() {
    return (
      <Form {...this.state.form}></Form>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    username:state.username,
    password:state.password,
  };
}

const mapDispatchAction = (dispatch)=>{
  return{
    onInputChange: (event, nm)=> dispatch({type:"UPDATE",name:nm,value:event.target.value})
  };  
}

export default connect(mapStateToProps,mapDispatchAction)(withRouter(UserAuth));

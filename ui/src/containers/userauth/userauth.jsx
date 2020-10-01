import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import {LOGIN} from '../../constants/urlstringconstants';
import {getURL as URL} from '../../constants/urlconstants';

import styles from './userauth.module.css';

class UserAuth extends Component {
  state = {
    username:"",
    password:""
  }

  onChangeEvent = (event,name)=>{
    this.setState({[name]:event.target.value})
  } 
  

  onSubmitEvent=(e)=>{
    e.preventDefault();
    axios.post(URL(LOGIN),null,{params:{
      username:this.state.username,
      password:window.btoa(this.state.password)
    }})
  }

  render() {

    
    return (
      <div className={styles.container}>
        <h1>Sign In</h1>
        <form method="post" onSubmit={this.onSubmitEvent}>
          <div className={styles["input-filed"]}>
            <input type="text" required value={this.state.username} onChange={(event)=>this.onChangeEvent(event,'username')}/>
            <label>Username</label>
          </div>
          <div className={styles["input-filed"]}>
            <input type="password" required value={this.state.password} onChange={(event)=>this.onChangeEvent(event,'password')}/>
            <label>Password</label>
          </div>
          <a href="/ui/auth/register"><span className="register">Register</span></a>
          <input type="submit"  className={styles["btn-login"]} value="Login"/>
        </form>
      </div>
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

export default connect(mapStateToProps,mapDispatchAction)(UserAuth);

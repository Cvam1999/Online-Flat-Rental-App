
import React, { useState } from 'react';
import styles from '../Login-Page/login.module.css';
import LoginAction from './LoginAction';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom"
import axios from 'axios';




function Login() {

   function preback()
        {
          window.history.forward();
        }
        setTimeout(preback(),0);
      
        window.onunload=()=>(null);
      
   

        const [msg,setMsg]=useState("")

   
   function formValidate()
   {
      const form = document.querySelector('form')
      var uName=form.elements.username.value
      var upassword=form.elements.password.value
      var uType = form.elements.usertype.value

      var error=document.getElementById("error")
      //   var error1=document.getElementById("error1")

      var lgn=document.getElementById("formlogin")
      //   error1.innerHTML=""


      if(uName.length<3)
      {
         error.innerHTML="User Name must be minimum 3 char"
      }
      else if(upassword.length<8)
      {
         error.innerHTML="Password must be minimum 8 char"
      }
      else if(uType.length===0){
         error.innerHTML="Select an option"
      }
      else{ 
         error.innerHTML="Ready to Submit"
         lgn.style.pointerEvents="auto"
         
      }
   }





   const history = useHistory();
   const [username,setUsername] = useState('');
   const [password,setPassword] = useState(''); 
   const [usertype,setUserType] = useState(''); 

   const {errors} = {username,password}

const selectOption = (e)=>{
   setUserType(e.target.value)
}
const myfn=()=>{
   history.push('/register')
}
const handleClick=()=>{
   var error = document.getElementById("error")
        let x = error.innerHTML;
       if(x==="Ready to Submit"){
         axios
        .post(`http://localhost:9093/login/authenticateUser/${username}/${password}/${usertype}`)
        .then((response) => {

console.log(response)
            if(response.data.userType==="admin")
            {
             sessionStorage.setItem("password",response.data.password)
             sessionStorage.setItem("userName",response.data.userName)
             sessionStorage.setItem("usertype",response.data.userType)
                      
             console.log('hello admin')
            history.push('/admin')
  
            setTimeout(function(){
                myFunction()
              },500)
        }
        else if(response.data.userType==="tenant")
            {
             sessionStorage.setItem("password",response.data.password)
             sessionStorage.setItem("userName",response.data.userName)
             sessionStorage.setItem("usertype",response.data.userType)
                      
             console.log('hello tenant')
            history.push('/tenant')
  
            setTimeout(function(){
                myFunction()
              },500)
        }
        else if(response.data.userType==="landlord")
            {
             sessionStorage.setItem("password",response.data.password)
             sessionStorage.setItem("userName",response.data.userName)
             sessionStorage.setItem("usertype",response.data.userType)
                      
             console.log('hello landlord')
            history.push('/landlord')
  
            setTimeout(function(){
                myFunction()
              },500)
        }
        else{
            sessionStorage.setItem("username",response.data.userName)
            sessionStorage.setItem("password",response.data.password)
            sessionStorage.setItem("usertype",response.data.userType)
            console.log('Hello error')
            window.alert('Invalid credentials')
            history.push({
                 pathname:'/'
            })
  
            setTimeout(function(){
                myFunction()
              },500)
        }

        })
        .catch((error) => {
            if(error.status===401)
          setMsg("Not Authorized");
         
        });
      
    
        history.push('/loginactions')
       }else{
        window.alert("Fill all the details...");
        window.location.reload()
       }
}
function myFunction()
    {
     window.location.reload(false)
    }


   return (
      <React.Fragment>
       <Router>     
       <Switch>



      <div className={styles.loginbox}>   
         <div className={styles.c1}>
            
            <div className={styles.c11}>
               
              
                      {/* <Route path="/loginactions">
                      <LoginAction username={username} password={password} usertype = {usertype}/>
                     </Route> */}
                     <h1 className={styles.mainhead}>Welcome</h1>
                
            </div>
         </div>
         <div className={styles.c2}>
         
            <form className={styles.signin} method="post">
               <h1 className={styles.signup1}>SIGN IN</h1>
               {/* <Route path="/loginactions">
                      <LoginAction username={username} password={password} usertype = {usertype}/>
                     </Route> */}
            
               
               <input name="username" type="text" required={true} placeholder="Username*" className={styles.username}
                  value = {username}
                  onChange= {(e)=>setUsername(e.target.value)}
                  onInput={formValidate}
                  style={{marginTop:20}}
                  />
                
               <input name="password" type="password" required={true} placeholder="Password*" className={styles.username}
               value = {password}
               onChange= {(e)=>setPassword(e.target.value)}
               onInput={formValidate}
               />

                  <h6 style={{paddingLeft:40}}>Select User Type</h6>

                  <select name="usertype" required={true} className={styles.username} value={usertype} onInput={formValidate}
                  onChange= {selectOption}
                  >
                     <option value="">Select type</option>
                     <option value="landlord"  >landlord</option>
                     <option value="tenant"  >tenant</option>
                     <option value="admin"  >admin</option>
                    
                  </select>

                  <p id="error" style={{backgroundColor:"#D6EAF8", textAlign:"center"}}></p>
                  
               <button id="formlogin" type="submit" onClick={handleClick} className={styles.btnlogin}>Sign In</button>
            <br/>
            </form>
            <br/>
            <button type='submit' onClick={myfn}  className={styles.btnlogin}>SignUp</button>
         </div>
         
         
      </div>
      </Switch>
      </Router>
      </React.Fragment>
    );
   }

export default Login;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function RegisterUser() {
  let initialuser = { userName: "", password: "", userType: "" };
  let [user, setUser] = useState(initialuser);
  let [msg, setMsg] = useState("");
  let [id, setId] = useState(0);
  let history = useHistory();

  useEffect(() => {}, []);

  function handleBtnClick(e) {
    var error = document.getElementById("error");
    let x = error.innerHTML;
    if (x === "Ready to Submit") {
      const URL = "http://localhost:9093/user/addUser";
      axios
        .post(URL, user)
        .then((response) => {
          setMsg(response.data);
          let y=response.data;
          if(!(y=="User Name already exists, Try anouther name")){
            console.log(response.data);
            window.alert(
              "User Added Successfully. UserId::" + response.data.userId
            );
          }else{
            window.alert(y)
          }
         
        })
        .catch((error) => console.log(error.message));

      e.preventDefault();
      setId(1);
      setUser(user);
      history.push("/login");
    } else {
      console.log(x);
      window.alert("Fill all the details...");
      window.location.reload();
    }
  }
  function formValidate() {
    const form = document.querySelector("form");
    var uName = form.elements.username.value;
    var upassword = form.elements.password.value;
    var uType = form.elements.usertype.value;
    var regex2 = /[0-9]/;
    var regex3 = /[A-Z]/;
    var regex4=/[@#$%^&+=]/;
    var error = document.getElementById("error");
    //   var error1=document.getElementById("error1")

    //var lgn=document.getElementById("formlogin")
    //   error1.innerHTML=""

    if (uName.length < 3) {
      error.innerHTML = "User Name must be minimum 3 char";
    }
    else if (upassword.length < 6) {
      error.innerHTML = "Password must be minimum 6 char";
    } else if (upassword.length > 20) {
      error.innerHTML = "Password must be maximum 20 char";
    } else if (
      !(regex4.test(upassword))
    ) {
      error.innerHTML = "Password must contain atleast one special char";
    } else if (!regex2.test(upassword)) {
      error.innerHTML = "Password must contain atleast one numeric";
    } else if (!regex3.test(upassword)) {
      error.innerHTML = "Password must contain atleast one capital";
    } else if (uType.length === 0) {
      error.innerHTML = "Select an option";
    } else {
      error.innerHTML = "Ready to Submit";
      //lgn.style.pointerEvents="auto"
    }
  }

  return (
    <React.Fragment>
      <form className="c2" name="form1">
        <h1 className="form-text ">Register User</h1>
        <br />
        <br />
        <br />
        <br />
        <input
          name="username"
          type="text"
          placeholder="Username*"
          className="username"
          value={user.userName}
          onInput={formValidate}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password*"
          className="username"
          value={user.password}
          onInput={formValidate}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <select
          name="usertype"
          id="select1"
          className="username"
          value={user.userType}
          onInput={formValidate}
          onChange={(e) => setUser({ ...user, userType: e.target.value })}
        >
          <option value="">Select one option</option>
          <option value="landlord">Landlord</option>
          <option value="tenant">Tenant</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <div className="text-center">
          <p
            id="error"
            style={{ backgroundColor: "#D6EAF8", textAlign: "center" }}
          ></p>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleBtnClick}
          >
            Register
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default RegisterUser;

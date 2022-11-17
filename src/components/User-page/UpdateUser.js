// pending

// After redirection page
// validation
// user added success message

import React, { useEffect, useState } from "react";
import axios from "axios";

function UpdateUser() {
  let initialuser = { userId: "", userName: "", password: "", userType: "" };
  let [user, setUser] = useState(initialuser);
  let [msg, setMsg] = useState("");
  const [btn, setButton] = useState(0);

  useEffect(() => {
    const URL = "http://localhost:9093/user/updateUser";
    axios
      .put(URL, user)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [btn]);

  function handleBtnClick(e) {
    e.preventDefault();
    setButton(user.userId);
    setUser(user);
    window.alert("User Updated...");
  }
  function formValidate() {
    const form = document.querySelector("form");
    var uName = user.userName;
    var upassword = user.password;
    var uType = user.userType;
    var regex2 = /[0-9]/;
    var regex3 = /[A-Z]/;
    var regex4 = /[@#$%^&+=]/;
    var error = document.getElementById("error");
    //   var error1=document.getElementById("error1")

    //var lgn=document.getElementById("formlogin")
    //   error1.innerHTML=""

    if (uName.length < 3) {
      error.innerHTML = "User Name must be minimum 3 char";
    } else if (upassword.length < 6) {
      error.innerHTML = "Password must be minimum 6 char";
    } else if (upassword.length > 20) {
      error.innerHTML = "Password must be maximum 20 char";
    } else if (!regex4.test(upassword)) {
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
      <div
        style={{
          backgroundImage: "linear-gradient(15deg, #fdf9f1 0%, #f6e4c0 100%)",
          height: 700,
        }}
      >
        <h2 className="text-primary container">Update User details</h2>
        <hr />
        <form className="c2">
          <h1 className="form-text ">Update User</h1>
          <br /> <br />
          <input
            name="userid"
            type="number"
            placeholder="User ID"
            className="username"
            value={user.userId}
            onChange={(e) => setUser({ ...user, userId: e.target.value })}
          />
          <input
            id="a"
            name="username"
            type="text"
            placeholder="New Username*"
            className="username"
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            onKeyUp={formValidate}
          />
          <br />
          <input
            id="b"
            name="password"
            type="password"
            placeholder="New Password*"
            className="username"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            onKeyUp={formValidate}
          />
          <br />
          <select
            id="c"
            name="usertype"
            className="username"
            value={user.userType}
            onChange={(e) => setUser({ ...user, userType: e.target.value })}
            onKeyUp={formValidate}
          >
            <option value="">Select one option</option>
            <option value="landlord">Landlord</option>
            <option value="tenant">Tenant</option>
            <option value="admin">Admin</option>
          </select>
          <br />
          <p
            id="error"
            style={{ backgroundColor: "#D6EAF8", textAlign: "center" }}
          ></p>
          <button className="btn" type="submit" onClick={handleBtnClick}>
            Update User
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default UpdateUser;

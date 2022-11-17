// pending

// After redirection page
// validation
// user added success message

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function RemoveUser() {
  const [status, setStatus] = useState(null);
  const [userid, setUser] = useState(0);
  let history=useHistory();
  // useEffect(() => {
  //   // DELETE request using axios inside useEffect React hook
  //   // axios
  //   //   .delete(`http://localhost:8080/user/removeUser/${userid}`)
  //   //   .then(() => setStatus("Delete successful"));
  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, [userid]);

  const handleBtnClick = (e) => {
    console.log(e.target.response);

    axios
      .delete(`http://localhost:9093/user/removeUser/${userid}`)
      .then((response) => {setStatus("Delete successful")
      
        if(response.status==200){
          window.alert("User Removed");
          history.push("/users")
        }else{
          window.alert("Some error occured")
          history.push("/users")
        }
    });
   
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: "linear-gradient(15deg, #fdf9f1 0%, #f6e4c0 100%)",
          height: 700,
        }}
      >
        <h2 className="text-primary container">Delete User</h2>
        <hr />
        <form className="c2 view-form">
          <h1 className="form-text ">Remove User By ID</h1>
          <br />
          <input
            name="userid"
            type="number"
            placeholder="User ID*"
            className="username"
            value={userid}
            onChange={(e) => setUser(e.target.value)}
            //   onChange={e=>console.log(e.target.value)}
          />
          <br />

          <button className="btn" onClick={handleBtnClick}>
            Remove User
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default RemoveUser;

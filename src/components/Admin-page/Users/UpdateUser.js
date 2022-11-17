// pending

// After redirection page
// validation
// user added success message

import React, { useEffect, useState } from "react";
import axios from "axios";

function UpdateUser() {
  let initialuser = { userId: "", userName: "", password: "", userType: "" };
  const [user, setUserDetail] = useState(initialuser);
  const [userid, setUserId] = useState(0);
  const [btn, setButton] = useState(0);

  useEffect(() => {
    const URL = "http://localhost:9093/user/updateUser";
    axios
      .put(URL, user)
      .then((response) => {
        setUserDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [btn]);

  function handleBtnClick(e) {
    e.preventDefault();
    setButton(user.userId);
    setUserDetail(user);
    window.alert("User Updated...");
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
            onChange={(e) => setUserDetail({ ...user, userId: e.target.value })}
          />
          <input
            name="username"
            type="text"
            placeholder="New Username*"
            className="username"
            value={user.userName}
            onChange={(e) =>
              setUserDetail({ ...user, userName: e.target.value })
            }
          />
          <input
            name="password"
            type="password"
            placeholder="New Password*"
            className="username"
            value={user.password}
            onChange={(e) =>
              setUserDetail({ ...user, password: e.target.value })
            }
          />
          <select
            name="usertype"
            className="username"
            value={user.userType}
            onChange={(e) =>
              setUserDetail({ ...user, userType: e.target.value })
            }
          >
            <option value="">New User Type</option>
            <option value="landlord">Landlord</option>
            <option value="tenant">Tenant</option>
          </select>
          <br /> <br /> <br />
          <button className="btn" onClick={handleBtnClick}>
            Update User
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default UpdateUser;

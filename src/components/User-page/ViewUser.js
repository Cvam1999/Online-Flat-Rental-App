// pending

// After redirection page
// validation
// user added success message

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewUser() {
  // const [status, setStatus] = useState(null);
  const [userid, setUserId] = useState(0);
  const [user, setUserDetail] = useState([]);
  const [btn, setButton] = useState(0);
  const [deletebtn, setdeleteButton] = useState(0);

  useEffect(() => {
    // DELETE request using axios inside useEffect React hook
    axios
      .get(`http://localhost:9093/user/viewUserByID/${userid}`)
      .then((response) => setUserDetail(response.data));
  }, [btn]);

  useEffect(() => {
    const URL = `http://localhost:9093/user/removeUser/${userid}`;
    axios
      .delete(URL)
      .then((response) => {
        setUserDetail([]);
        // setUserId(userid);
        btn(0);
      })
      .catch((error) => console.log(error.response));
  }, [deletebtn]);

  const handleBtnClick = (e) => {
    e.preventDefault();
    setButton(userid);
  };

  const handleDeleteBtnClick = (e) => {
    e.preventDefault();
    setdeleteButton(userid);
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: "linear-gradient(15deg, #fdf9f1 0%, #f6e4c0 100%)",
          height: 700,
        }}
      >
        <h2 className="text-primary container">View User</h2>
        <hr />
        <form className="view-form">
          <h1 className="form-text ">View User By ID</h1>
          <br />
          <input
            name="userId"
            type="number"
            placeholder="User ID*"
            className="username"
            value={userid}
            onChange={(e) => setUserId(e.target.value)}
          />
          <br />
          <button className="btn" onClick={handleBtnClick}>
            View User
          </button>
        </form>

        <table className="table table-data table-striped table-bordered view-table">
          <thead>
            <tr className="table-warning">
              <th className="col-md-2">User ID</th>
              <th className="col-md-4">User Name</th>
              <th className="col-md-4">User Type</th>
              <th className="col-md-2">Actions</th>
            </tr>
          </thead>
          <tbody className="table-success ">
            <tr>
              <td className="col-md-2">{user.userId}</td>
              <td className="col-md-3">{user.userName}</td>
              <td className="col-md-3">{user.userType}</td>
              <td className="col-md-3">
                <button className="btn btn-warning logout-btn" type="submit">
                    Update
                </button>
                <button
                  className="btn btn-danger logout-btn"
                  type="submit"
                  onClick={handleDeleteBtnClick}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ViewUser;

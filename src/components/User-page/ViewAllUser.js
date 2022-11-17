// pending

// After redirection page
// validation
// user added success message

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewAllUser() {
  let initialuser = [];
  let [users, setUsers] = useState(initialuser);
  const [userid, setUserId] = useState(0);
  const [btn, setButton] = useState(0);
  const [deletebtn, setdeleteButton] = useState(0);

  useEffect(() => {
    const URL = "http://localhost:9093/user/viewAllUser";
    axios
      .get(URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const URL = `http://localhost:9093/user/removeUser/${userid}`;
    axios
      .delete(URL)
      .then((response) => {
        setUsers([]);
        // setUserId(userid);
        btn(0);
      })
      .catch((error) => console.log(error.response));
  }, [deletebtn]);

  function updatebtnhandler() {
    //props.history.push('/addCustomer');
  }

  const handleDeleteBtnClick = (e) => {
    e.preventDefault();
    setdeleteButton(document.getElementById("usid"));
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: "linear-gradient(15deg, #fdf9f1 0%, #f6e4c0 100%)",
          height: 700,
        }}
      >
        <h2 className="text-primary container">View All Users</h2>
        <hr />
        <table className="table table-data table-striped table-bordered">
          <thead>
            <tr className="table-warning">
              <th>User ID</th>
              <th>User Name</th>
              <th>User Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-success ">
            {users.map((user) => (
              <tr>
                <td className="col-md-2" id="usid">{user.userId}</td>
                <td className="col-md-3">{user.userName}</td>
                <td className="col-md-3">{user.userType}</td>
                <td className="col-md-3">
                  <button
                    className="btn btn-warning logout-btn"
                    type="submit"
                    onClick={updatebtnhandler}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger logout-btn"
                    type="submit" onClick={handleDeleteBtnClick}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ViewAllUser;

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
function GetAllFlats() {
  let initialFlat = [] ;
  let [Flat, setFlat] = useState(initialFlat);

  const formStyle = {
    backgroundColor: "#FFFAFA",
    padding: "15px"
};
const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  useEffect(() => {
    const URL = "http://localhost:9093/flat/getallflats";
    axios
      .get(URL)
      .then((response) => {
          setFlat(response.data)
          console.log(response.data)
      })
      .catch((error) => console.log(error.message));
  },[])

  return (
    <div style={formStyle}>
     
      <table className="table table-hover table-striped border-dark">
        <thead>
          <tr className="table-dark">
            <th>Flat ID</th>
            <th>HOUSE NO</th>
            <th>STREET</th>
            <th>CITY</th>
            <th>PIN</th>
            <th>STATE</th>
            <th>COUNTRY</th>
            <th>FLAT COST</th>
            <th>AVAILABILITY</th>
          </tr>
          </thead>
          
          <tbody>
            {Flat.map((flat) => (
              <tr>
                <td>{flat.flatId}</td>
                <td>{flat.flatAddress.houseNo}</td>
                <td>{flat.flatAddress.street}</td>
                <td>{flat.flatAddress.city}</td>
                <td>{flat.flatAddress.pin}</td>
                <td>{flat.flatAddress.state}</td>
                <td>{flat.flatAddress.country}</td>
                <td>{flat.flatCost}</td>
                <td>{flat.flatAvailability}</td>
               
              </tr>
            ))}
            
          </tbody>
        
      </table>
   
         <Link to="addbooking"><button style={{width:"120px"}}  className=" btn btn-outline-light btn-success" type="submit">BOOK NOW</button></Link>
    </div>
  );
}

export default GetAllFlats;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RemoveBooking() {

   return (
      <React.Fragment>
        <form className="c2">
            <h1 className="form-text ">Remove Booking By ID</h1>
            <br/>
            <input name="tenentid" type="number" placeholder="Booking ID*" className="username"/>
         

            <br/>
            <button className="btn">Remove Booking</button>
         </form>
    </React.Fragment>
    );
}

export default RemoveBooking;
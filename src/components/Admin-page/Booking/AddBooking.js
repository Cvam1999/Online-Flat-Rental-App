import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddBooking() {

  return (
      <React.Fragment>
       <form class="c2">
    <h1 class="form-text">Add Booking</h1>
    <br/><br/>
    <input name="flatid" type="number" placeholder="Flat ID" class="col-md-4 address-tags"/>
    <input name="tenantid" type="number" placeholder="Tenant ID" class="col-md-4 address-tags"/>
    <br/>
    <label for="" className="lable-tag col-md-3">From</label>
    <input type="date" value="" class="col-md-4 address-tags"/> 
    <label for="" className="lable-tag col-md-3">To</label>
    <input type="date" value="" class="col-md-4 address-tags"/>

    <br/>
    <button class="btn">Book Flat</button>
 </form>
    

     </React.Fragment>
    );
}

export default AddBooking;